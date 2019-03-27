import React from 'react';
import Helmet from 'react-helmet';
import Navigation from 'components/Navigation';
import config from 'data/SiteConfig';
import 'font-awesome/scss/font-awesome.scss';
import 'styles/theme.scss';

export default class PageLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Navigation config={config} LocalTitle={this.props.title}>
        <div>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
          </Helmet>
          {children}
        </div>
      </Navigation>
    );
  }
}
