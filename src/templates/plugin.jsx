import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import moment from 'moment';
import { Grid, Cell } from 'react-md';

import config from 'data/SiteConfig';
import Layout from 'layout';
import SEO from 'components/SEO';
import PluginTags from 'components/PluginTags';

export default class PluginTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const pluginNode = this.props.data.markdownRemark;
    const plugin = pluginNode.frontmatter;
    if (!plugin.id) {
      plugin.id = slug;
    }
    if (!plugin.category_id) {
      plugin.category_id = config.pluginDefaultCategoryID;
    }

    return (
      <Layout location={this.props.location}>
        <div className="plugin-page md-grid md-grid--no-spacing">
          <Helmet>
            <title>{`${plugin.title} | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}${plugin.id}`} />
          </Helmet>
          <SEO pluginPath={slug} pluginNode={pluginNode} pluginSEO />
          <div
            className="index-container"
          >
            <Grid className="plugin-detail-page md-grid md-cell-middle">
              <Cell size={12} className="plugin-header">
                <img
                  src={plugin.logo}
                  alt="featued"
                  className="featured-image"
                  onError={e => {e.target.src = config.siteLogo}}
                />
                <div className="plugin-info">
                  <h2>{plugin.title}</h2>
                  <p>By <span>{plugin.author || `Unknown Author`}</span></p>
                </div>
              </Cell>
              <Grid className="plugin-body md-cell md-cell--12">
                <Cell size={8} className="plugin-description">
                  <h2>Description</h2>
                  <div dangerouslySetInnerHTML={{ __html: pluginNode.html }} />
                </Cell>
                <Cell size={4} className="plugin-detail">
                  <div className="detail-info">
                    <span>Version:</span>
                    <label>1.0.0</label>
                  </div>
                  <hr />
                  <div className="detail-info">
                    <span>Last updated:</span>
                    <label>{moment(pluginNode.fields.date).format(config.dateFormat)}</label>
                  </div>
                  <hr />
                  <div className="detail-info">
                    <span>Tags</span>
                    <PluginTags tags={plugin.tags} />
                  </div>
                </Cell>
              </Grid>
            </Grid>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query PluginBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        logo
        date
        category
        tags
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`;
