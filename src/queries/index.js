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
        }
      }
    }
  }
`
