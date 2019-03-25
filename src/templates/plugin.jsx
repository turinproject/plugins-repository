import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Card from 'react-md/lib/Cards';
import CardText from 'react-md/lib/Cards/CardText';
import Layout from 'layout';
import UserInfo from 'components/UserInfo';
import PluginTags from 'components/PluginTags';
import PluginInfo from 'components/PluginInfo';
// import PluginSuggestions from 'components/PluginSuggestions';
import SEO from 'components/SEO';
import config from 'data/SiteConfig';

export default class PluginTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: true
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ isMobile: false });
    } else {
      this.setState({ isMobile: true });
    }
  }

  render() {
    const { isMobile } = this.state;
    const { slug } = this.props.pageContext;
    const expanded = !isMobile;
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
            className="md-grid md-cell--9 plugin-page-contents mobile-fix plugin-overlap"
          >
            <Card className="md-grid md-cell md-cell--12 plugin">
              <CardText className="plugin-body">
                <h1 className="md-display-2 plugin-header">{plugin.title}</h1>
                <PluginInfo pluginNode={pluginNode} />
                <div dangerouslySetInnerHTML={{ __html: pluginNode.html }} />
              </CardText>
              <div className="plugin-meta">
                <PluginTags tags={plugin.tags} />
              </div>
            </Card>
            <UserInfo
              className="md-grid md-cell md-cell--12"
              config={config}
              expanded={expanded}
            />
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
