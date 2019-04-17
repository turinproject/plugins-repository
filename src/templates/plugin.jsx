import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import moment from 'moment';
import { Grid, Cell, FontIcon } from 'react-md';

import Layout from 'layout';
import SEO from 'components/SEO';
import config from 'data/SiteConfig';
import Helpers from 'utils/Helpers';

export default class PluginTemplate extends React.Component {
  constructor() {
    super();

    this.renderTags = this.renderTags.bind(this);
    this.renderContributors = this.renderContributors.bind(this);
  }

  renderTags(tags) {
    return tags.map((tag, index) => (
      <Link key={index} to={`tags/${tag}`}><div>{tag}</div></Link>
    ))
  }

  renderContributors(contributors) {
    return contributors.map((contributor, index) => (
      <a href={`https://github.com/${contributor}`} key={index}>
        <img
          src={config.defaultAvatar}
          alt="avatar"
          className="avatar"
        />
        <span>{contributor}</span>
      </a>
    ))
  }

  render() {
    const { slug } = this.props.pageContext;
    const pluginNode = this.props.data.markdownRemark;
    const plugin = pluginNode.frontmatter;

    // Always set the logo here to the category image
    const logo = plugin.logo ? plugin.logo : `/logos/${plugin.category}.png`;

    if (!plugin.id) {
      plugin.id = slug;
    }
    if (!plugin.category_id) {
      plugin.category_id = config.pluginDefaultCategoryID;
    }

    return (
      <Layout location={this.props.location}>
        <Grid className="plugin-page md-grid--no-spacing">
          <Helmet>
            <title>{`${plugin.title} | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}${plugin.id}`} />
          </Helmet>
          <SEO pluginPath={slug} pluginNode={pluginNode} pluginSEO />
          <Grid id="plugin-detail-page" className="index-container">
            <Cell size={12} className="plugin-header">
              <img
                src={logo}
                alt="featured"
                className="avatar"
                onError={e => {e.target.src = config.siteLogo}}
              />
              <div className="plugin-info">
                <p><span>{Helpers.getCategoryName(plugin.category)}</span></p>
                <h2>{plugin.title}</h2>
              </div>
            </Cell>

            <Grid className="plugin-body md-cell--12">
              <Cell size={8} tabletSize={12} className="plugin-description">
                <h2>Description</h2>
                <div dangerouslySetInnerHTML={{ __html: pluginNode.html }} />
              </Cell>

              <Cell size={4} tabletSize={12} className="plugin-detail">
                <button type="button" className="default-button">Get Plugin</button>
                <div className="detail-info">
                  <a href={plugin.url}>
                    <FontIcon iconClassName="fa fa-github" />
                    <span>Visit Github repository</span>
                  </a>
                </div>

                <div className="detail-info">
                  <span>Version:</span>
                  <label>1.0.0</label>
                </div>

                <div className="detail-info">
                  <span>Last updated:</span>
                  <label>{moment(pluginNode.fields.date).format(config.dateFormat)}</label>
                </div>

                <div className="detail-info">
                  <span>Tags</span>
                  <div className="tag-content">{this.renderTags(plugin.tags)}</div>
                </div>

                <div className="contributors">
                  <h3>Contributors</h3>
                  {this.renderContributors(plugin.contributors)}
                </div>
              </Cell>
            </Grid>
          </Grid>
        </Grid>
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
        url
        date
        category
        tags
        contributors
      }
      fields {
        slug
        date
      }
    }
  }
`;
