import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import moment from 'moment';
import { Grid, Cell, FontIcon } from 'react-md';

import config from 'data/SiteConfig';
import Layout from 'layout';
import SEO from 'components/SEO';

const dummyContributors = [
  {id: 1, name: 'James K', img_url: '/assets/img/profile1.jpg'},
  {id: 2, name: 'Michelle', img_url: '/assets/img/profile2.jpg'},
  {id: 3, name: 'Sasha M', img_url: '/assets/img/profile3.jpg'},
  {id: 4, name: 'Natasha', img_url: '/assets/img/profile4.jpg'},
  {id: 5, name: 'John Doe', img_url: '/assets/img/profile5.jpg'},
]

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

  renderContributors() {
    return dummyContributors.map(contributor => (
      <div key={contributor.id}>
        <img
          src={contributor.img_url}
          alt="avatar"
          className="avatar"
          onError={e => {e.target.src = config.defaultAvatar}}
        />
        <span>{contributor.name}</span>
      </div>
    ))
  }

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
        <Grid className="plugin-page md-grid--no-spacing">
          <Helmet>
            <title>{`${plugin.title} | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}${plugin.id}`} />
          </Helmet>
          <SEO pluginPath={slug} pluginNode={pluginNode} pluginSEO />
          <Grid id="plugin-detail-page" className="index-container">
            <Cell size={12} className="plugin-header">
              <img
                src={plugin.logo}
                alt="featured"
                className="avatar"
                onError={e => {e.target.src = config.siteLogo}}
              />
              <div className="plugin-info">
                <h2>{plugin.title}</h2>
                <p>By <span>{plugin.author || `Unknown Author`}</span></p>
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
                  <a href="https://github.com">
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
                  {this.renderContributors()}
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
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
