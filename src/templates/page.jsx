import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Layout from 'layout';

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
            {this.props.content()}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Page;
