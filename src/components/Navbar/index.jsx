import React, { Component } from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import config from 'data/SiteConfig';

class Navbar extends Component {
  renderNavMenu() {
    const categories = config.categories[0].options;

    return categories.map(category => {
      <div
        key={category.id}
        className={this.props.category === category.id ? 'active' : ''}
      >
        <Link to={`/categories/${_.kebabCase(category.id)}/`}>{category.name}</Link>
      </div>
    });
  }

  render() {
    return (
      <div id="navMenu">
        <div className="navMenu">
          <div
            className={!this.props.category ? 'active' : ''}
          >
            <Link to="/">Recent</Link>
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
