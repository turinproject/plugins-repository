const path = require("path");
const fs = require("file-system");
const _ = require("lodash");
const moment = require("moment");

const queries = require("./src/queries");
const siteConfig = require("./data/SiteConfig");
const repoList = require("./data/plugins/PluginsList");

const pluginNodes = [];
let repositories = [];

function addSiblingNodes(createNodeField) {
  pluginNodes.sort(
    ({ frontmatter: { date: date1 } }, { frontmatter: { date: date2 } }) => {
      const dateA = moment(date1, siteConfig.dateFromFormat);
      const dateB = moment(date2, siteConfig.dateFromFormat);

      if (dateA.isBefore(dateB)) return 1;

      if (dateB.isBefore(dateA)) return -1;

      return 0;
    }
  );
  for (let i = 0; i < pluginNodes.length; i += 1) {
    const nextID = i + 1 < pluginNodes.length ? i + 1 : 0;
    const prevID = i - 1 > 0 ? i - 1 : pluginNodes.length - 1;
    const currNode = pluginNodes[i];
    const nextNode = pluginNodes[nextID];
    const prevNode = pluginNodes[prevID];
    createNodeField({
      node: currNode,
      name: "nextTitle",
      value: nextNode.frontmatter.title
    });
    createNodeField({
      node: currNode,
      name: "nextSlug",
      value: nextNode.fields.slug
    });
    createNodeField({
      node: currNode,
      name: "prevTitle",
      value: prevNode.frontmatter.title
    });
    createNodeField({
      node: currNode,
      name: "prevSlug",
      value: prevNode.fields.slug
    });
  }
}

function getRepoContributors(repository) {
  let contributors = [];
  const { edges } = repository.object.history;
  edges.forEach(edge => {
    if (!_.find(contributors, edge.node.committer)) {
      const { user } = edge.node.committer;
      contributors.push({
        ...edge.node.committer,
        url: user ? user.url : ''
      });
    }
  });
  return contributors;
}

function overridePlugins(repo) {
  const ownerName = repo.owner.login;
  const dirName = `./content/plugins/${ownerName.toLowerCase()}`;
  let files = [];
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
  } else {
    files = fs.readdirSync(dirName);
  }
  if (!files.length || !files.includes(`${repo.name}.md`)) {
    let data = '---\r\n';
    data += `title: ${repo.title ? repo.title : repo.name}\r\n`;
    data += `date: \r\n`;
    data += `slug: ${repo.name}\r\n`;
    data += `category: ${repo.category ? repo.category : 'other'}\r\n`;
    data += `url: ${repo.url}\r\n`;
    data += `tags:\r\n`;
    if (repo.tags) repo.tags.forEach(tag => {
      data += ` - ${tag}\r\n`;
    });
    data += `description: ${repo.description}\r\n`;
    data += '---\r\n';
    data += repo.second_object.text;
    fs.writeFile(`${dirName}/${repo.name}.md`, data, (error) => {
      console.log('error while writing a file', error);
    })
  }
}

function getRepositoryInfo(graphql) {
  return Promise.all(repoList.map(repo => graphql(queries.getRepostoryInfo, repo).then(result => {
    if (result.errors) {
      console.error(result.errors[0].message);
    }
    const { repository } = result.data.github;
    const contributors = getRepoContributors(repository);   
    overridePlugins(repository);
    return {
      ...repository,
      contributors 
    };
  })))
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
        slug = `/${_.kebabCase(node.frontmatter.slug)}`;
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter);

        createNodeField({
          node,
          name: "date",
          value: date.toISOString()
        });
      }
    }
    createNodeField({ node, name: "slug", value: slug });
    pluginNodes.push(node);
  }
};

exports.setFieldsOnGraphQLNodeType = ({ type, actions }) => {
  const { name } = type;
  const { createNodeField } = actions;
  if (name === "MarkdownRemark") {
    addSiblingNodes(createNodeField);
  }
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const oldPage = Object.assign({}, page)

  if (page.path === '/') {
    deletePage(oldPage)
    createPage({
      ...page,
      context: {
        repositories
      }
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return getRepositoryInfo(graphql).then(res => new Promise((resolve, reject) => {
    const pluginPage = path.resolve("src/templates/plugin.jsx");
    const tagPage = path.resolve("src/templates/tag.jsx");
    const categoryPage = path.resolve("src/templates/category.jsx");
    repositories = res;
    resolve(
      graphql(queries.getPluginTagsFromMarkdown).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.error(result.errors);
          reject(result.errors);
        }
        const tagSet = new Set();
        // const categorySet = new Set();
        result.data.allMarkdownRemark.edges.forEach(edge => {
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag);
            });
          }

          // if (edge.node.frontmatter.category) {
          //   categorySet.add(edge.node.frontmatter.category);
          // }

          createPage({
            path: edge.node.fields.slug,
            component: pluginPage,
            context: {
              slug: edge.node.fields.slug,
              repositories: res
            }
          });
        });

        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagPage,
            context: {
              tag,
              repositories: res
            }
          });
        });

        const categoryList = siteConfig.categories[0].options;
        // TODO: On Build. Count num of posts per category and filter out categories with no content.
        // const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category.id)}/`,
            component: categoryPage,
            context: {
              category: category.id,
              repositories: res
            }
          });
        });
      })
    );
  }));
};
