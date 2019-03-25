import React, { Component } from 'react';
import UserLinks from 'components/UserLinks';

class Toolbar extends Component {
  render() {
    const { config } = this.props;
    return (
      <div className="toolbar-actions">
        <div className="userlinks-container">
          <UserLinks config={config} />
        </div>
      </div>
    );
  }
}

export default Toolbar;
