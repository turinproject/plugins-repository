import React, { Component } from 'react';
import UserLinks from 'components/UserLinks';

class Toolbar extends Component {
  render() {
    const config = {
      userLinks: [{
        label: "Login",
        url: "https://github.com/turinproject/plugins-repository",
        iconClassName: "fa fa-github"
      }]
    };

    return (
      <div className="toolbar-actions">
        <div className="userlinks-container">
          <UserLinks config={config} labeled />
        </div>
      </div>
    );
  }
}

export default Toolbar;
