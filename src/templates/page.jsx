import React, { Component } from 'react';
import Helmet from 'react-helmet';
import CardText from 'react-md/lib/Cards/CardText';
import Card from 'react-md/lib/Cards/Card';

import Layout from 'layout';
import UserLinks from 'components/UserLinks';
import config from 'data/SiteConfig';

/**
 * A page is a static page that content contributors should not have control over.
 * This template applies the necessary headers, menus, footers and styles.
 */
class Page extends Component {
  render() {
    return (
      <Layout location={this.props.location} title={this.props.title}>
        <div className="submit-plugin-container">
          <Helmet>
            <title>{this.props.title}</title>
            <link rel="canonical" href={this.props.url} />
          </Helmet>
          <div className="page-container md-grid mobile-fix">
            <Card className="md-grid md-cell--8">
              <div className="page-wrapper">
                <CardText>
                  <p className="page-text md-body-1">{this.props.content()}</p>
                </CardText>
                <UserLinks labeled config={config} />
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Page;
