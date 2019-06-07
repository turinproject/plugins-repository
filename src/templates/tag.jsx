import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from 'layout';
import PluginListing from 'components/PluginListing';
import config from 'data/SiteConfig';

export default class TagTemplate extends React.Component {
  render() {
    const { tag, repositories } = this.props.pageContext;
    const pluginEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout
        location={this.props.location}
        title={`Tagged in ${tag.charAt(0).toUpperCase() + tag.slice(1)}`}
      >
        <div className="index-container">
          <Helmet>
            <title>{`Plugins tagged as "${tag}" | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/tags/${tag}`} />
          </Helmet>
          <PluginListing pluginEdges={pluginEdges} repositories={repositories} />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
            date
            category
            url
          }
        }
      }
    }
  }
`;
