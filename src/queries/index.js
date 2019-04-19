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
        }
        collaborators(first: 10) {
          edges {
            node {
              id
              login
            }
          }
        }
        stargazers {
          totalCount
        }
      }
    }
  }
`

exports.getOrganziationRepoInfo = `
  query Repositories($organization: String!, $repoName: String!) {
    github {
      organization(login: $organization) {
        repository(name: $repoName) {
          description
          owner {
            id
            login
            avatarUrl
          }
          collaborators(first: 10) {
            edges {
              node {
                id
                login
              }
            }
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`