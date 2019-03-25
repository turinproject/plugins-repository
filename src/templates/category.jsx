import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PluginListing from 'components/PluginListing';
import Layout from 'layout';
import config from 'data/SiteConfig';

export default class CategoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext;
    const pluginEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout
        location={this.props.location}
        title={category.charAt(0).toUpperCase() + category.slice(1)}
      >
        <div className="index-container">
          <Helmet>
            <title>
              {`Plugins in category "${category}" | ${config.siteTitle}`}
            </title>
            <link
              rel="canonical"
              href={`${config.siteUrl}/categories/${category}`}
            />
          </Helmet>
          <PluginListing pluginEdges={pluginEdges} />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          frontmatter {
            title
            tags
            logo
            date
          }
        }
      }
    }
  }
`;
