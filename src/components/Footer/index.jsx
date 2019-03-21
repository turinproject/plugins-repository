import React, { Component } from "react";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";

class Footer extends Component {
  render() {
    const { userLinks } = this.props;
    const { fixedFooter } = config;

    return (
      <footer className={fixedFooter ? "footer footer-fixed" : "footer"}>
        {userLinks ? <UserLinks config={config} labeled /> : null}
      </footer>
    );
  }
}

export default Footer;
