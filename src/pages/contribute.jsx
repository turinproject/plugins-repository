import React, { Component } from 'react';
import { Grid, Cell } from 'react-md';

import Page from 'templates/page';
import config from 'data/SiteConfig';

class Contribute extends Component {
  render() {
    return (
      <Page
        location={this.props.location}
        url={`${config.siteUrl}/contribute/`}
        title='Contribute'
        content={() => (
          <div className="contribute-container">
            <h2>Contribution</h2>
            <p>If you'd like to contribute a plugin, please fill out the information below. We require that your plugin be hosted as a public git hub repository and that you have a valid github account.</p>

            <Grid className="form-container">
              <Cell size={8}>
                <form name="contact" method="POST" netlify-honeypot="honeypot" data-netlify="true">
                  <div className="hidden">
                    <span>Don’t fill this out if you're human:</span>
                    <input name="honeypot" />
                  </div>
                  <div className="form-control">
                    <b>Email:</b>
                    <input type="text" name="email" />
                  </div>
                  <div className="form-control">
                    <b>Github Username:</b>
                    <input type="text" name="username" />
                  </div>
                  <div className="form-control">
                    <b>Github Plugin Repository:</b>
                    <input type="text" name="repository" />
                  </div>
                  <div className="form-control">
                    <button type="button" className="primary-button">Request Access</button>
                  </div>
                </form>
              </Cell>
              <Cell size={4}>
                <img src="/assets/img/contribution.png" alt="contribution" />
              </Cell>
            </Grid>
          </div>
        )}
      />
    );
  }
}

export default Contribute;
