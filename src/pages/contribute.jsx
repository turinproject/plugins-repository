import React, { Component } from "react";
import Page from "../templates/page";
import config from "../../data/SiteConfig";

class Contribute extends Component {
  render() {
    return (
      <Page
        location={this.props.location}
        url={`${config.siteUrl}/contribute/`}
        title='Contribute'
        content={() => {
          return(
            <div>
              <p>If you'd like to contribute a plugin, please fill out the information below. We require that your plugin be hosted as a public git hub repository and that you have a valid github account.</p>

              <form name="contact" method="POST" netlify-honeypot="honeypot" data-netlify="true">
                <p class="hidden">
                  <label>Don’t fill this out if you're human: <input name="honeypot" /></label>
                </p>
                <p>
                  <label>Email: <input type="text" name="email" /></label>
                </p>
                <p>
                  <label>Github Username: <input type="text" name="github-username" /></label>
                </p>
                <p>
                  <label>Github Plugin Repository: <input type="text" name="repository" /></label>
                </p>
                <p>
                  <button type="submit">Request Access</button>
                </p>
              </form>
            </div>
          );
        }}
      />
    );
  }
}

export default Contribute;
