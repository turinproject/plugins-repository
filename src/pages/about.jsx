import React, { Component } from "react";
import Page from "../templates/page";
import config from "../../data/SiteConfig";

class About extends Component {

  render() {
    return (
      <Page
        location={this.props.location}
        url={`${config.siteUrl}/about/`}
        title='About'
        content={()=>{}}
      />
    );
  }
}

export default About;
