import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from 'layout';
import PluginListing from 'components/PluginListing';
import SEO from 'components/SEO';
import config from 'data/SiteConfig';

class Index extends React.Component {
  render() {
    const pluginEdges = this.props.data.allMarkdownRemark.edges;
    console.log('plugin edges in index', pluginEdges);
    return (
      <Layout location={this.props.location} title="Home">
        <div className="index-container">
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
          </Helmet>
          <SEO pluginEdges={pluginEdges} />
          <PluginListing pluginEdges={pluginEdges} />
        </div>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          frontmatter {
            title
            tags
            category
            logo
            date
            description
          }
          rawMarkdownBody
        }
      }
    }
  }
`;
