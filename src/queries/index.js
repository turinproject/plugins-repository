exports.getPluginTagsFromMarkdown = `
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            tags
            category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

exports.getRepostoryInfo = `
  query Repositories($owner: String!, $name: String!) {
    github {
      repository(owner: $owner, name: $name) {
        name
        url
        updatedAt
        description
        owner {
          id
          login
          avatarUrl
          url
        }
        stargazers {
          totalCount
        }
        object(expression: "master") {
          ... on GitHub_Commit {
            history(first: 100) {
              edges {
                node {
                  committer {
                    user {
                      login
                      url
                    }
                    name
                    avatarUrl
                  }
                }
              }
            }
          }
        },
        second_object: object(expression: "master:README.md") {
          ... on GitHub_Blob {
            text
          }
        }
        releases(first: 50, orderBy: {field: CREATED_AT, direction: DESC}) {
          totalCount
          nodes {
            releaseAssets(first: 10) {
              nodes {
                name
                downloadCount
                createdAt
              }
            }
          }
        }
      }
    }
  }
`
