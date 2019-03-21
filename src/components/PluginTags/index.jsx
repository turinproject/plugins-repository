import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import Chip from "react-md/lib/Chips";

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
              <Chip label={tag} className="plugin-preview-tags" />
            </Link>
          ))}
      </div>
    );
  }
}

export default PluginTags;
