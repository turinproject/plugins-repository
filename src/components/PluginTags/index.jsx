import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';

class PluginTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="plugin-tag-container">
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <div className="plugin-preview-tags">
                <span>#{tag}</span>
              </div>
            </Link>
          ))}
      </div>
    );
  }
}

export default PluginTags;
