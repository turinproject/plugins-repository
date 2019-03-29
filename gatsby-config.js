require('dotenv').config();

const urljoin = require('url-join');
/*
const fetch = require('node-fetch');
const { createHttpLink } = require('apollo-link-http');
*/
const path = require('path');

const config = require('./data/SiteConfig');
// const plugins = require('./data/PluginsList');

const regexExcludeRobots = /^(?!\/(dev-404-page|404|offline-plugin-app-shell-fallback|tags|categories)).*$/;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix)
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-lodash",
    "gatsby-plugin-sass",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/assets/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "plugins",
        path: `${__dirname}/content/plugins/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-responsive-iframe"
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers"
        ]
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#c62828"
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        templates: path.join(__dirname, 'src/templates'),
        layout: path.join(__dirname, 'src/layout'),
        styles: path.join(__dirname, 'src/styles'),
        data: path.join(__dirname, 'data'),
        utils: path.join(__dirname, 'src/utils')
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap.xml",
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage(
              filter: {
                path: {
                  regex: "${regexExcludeRobots}"
                }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
        }`
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: "#e0e0e0",
        theme_color: "#c62828",
        display: "minimal-ui",
        icons: [
          {
            src: "/logos/logo-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/logos/logo-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },
    /*
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        createLink: (pluginOptions) => {
          createHttpLink({
            uri: `${process.env.GATSBY_GITHUB_GRAPHQL_URL}`,
            headers: {
              'Authorization': `bearer ${process.env.GITHUB_TOKEN}`,
            },
            fetch,
          })
        }
      },
    },
    */
    "gatsby-plugin-offline"
  ]
};
