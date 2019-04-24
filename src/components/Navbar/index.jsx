import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import _ from 'lodash';
import config from 'data/SiteConfig';

const renderNavMenu = props => {
  const categories = config.categories[0].options;

  return categories.map(category => (
    <div
      key={category.id}
      className={props.category === category.id ? 'active' : ''}
    >
      <Link to={`/categories/${_.kebabCase(category.id)}/`}>{category.name}</Link>
    </div>
  ));
}

const Navbar = props => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <div id="navMenu">
        <div className="navMenu">
          <div className={!props.category ? 'active' : ''}>
            <Link to="/">Recent</Link>
          </div>
          {renderNavMenu(props)}
        </div>
        <div className="searchBox">
          <input
            type="text"
            placeholder="Search plugins ..."
            value={props.searchQuery}
            onChange={props.onChange}
            onKeyDown={(e) => props.onSearch(e, data.siteSearchIndex.index)}
          />
        </div>
      </div>
    )}
  />
);

export default Navbar;
