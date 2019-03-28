import React, { Component } from 'react';
import config from 'data/SiteConfig';

class Navbar extends Component {
  renderNavMenu() {
    const categories = config.categories[0].options;

    return categories.map(category => (
      <div
        key={category.id}
        className={this.props.activeCategory === category.id ? 'active' : ''}
        onClick={() => this.props.onMenuChange(category.id)}
      >
        {category.name}
      </div>
    ));
  }

  render() {
    return (
      <div id="navMenu">
        <div className="navMenu">
          <div
            className={this.props.activeCategory === 'all' ? 'active' : ''}
            onClick={() => this.props.onMenuChange('all')}
          >
            Recent
          </div>
          {this.renderNavMenu()}
        </div>
        <div className="searchBox">
          <input type="text" placeholder="Search plugins ..." />
        </div>
      </div>
    );
  }
}

export default Navbar;
