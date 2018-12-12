import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About";
import config from "../../data/SiteConfig";

class SubmitPlugin extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Submit Plugin">
        <div className="submit-plugin-container">
          <Helmet>
            <title>{`Submit Plugin | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/admin/`} />
          </Helmet>
          <About />
        </div>
      </Layout>
    );
  }
}

export default SubmitPlugin;
