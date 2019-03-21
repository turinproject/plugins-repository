import React, { Component } from "react";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Avatar from "react-md/lib/Avatars";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";
import moment from "moment";
import _ from "lodash";
import config from "../../../data/SiteConfig";
import "./PluginInfo.scss";

class PluginInfo extends Component {
  render() {
    const { pluginNode } = this.props;
    const plugin = pluginNode.frontmatter;
    return (
      <div className="plugin-info">
        <CardTitle
          avatar={(
            <img
              src={plugin.logo}
              alt="avatar"
              className="avatar"
              onError={e => {e.target.src = config.siteLogo}}
            />
          )}
          title={`Published on ${moment(pluginNode.fields.date).format(
            config.dateFormat
          )}`}
        />
        <Link
          className="category-link"
          to={`/categories/${_.kebabCase(plugin.category)}`}
        >
          <CardTitle
            avatar={
              <Avatar icon={<FontIcon iconClassName="fa fa-folder-open" />} />
            }
            title="In category"
            subtitle={plugin.category}
          />
        </Link>
      </div>
    );
  }
}

export default PluginInfo;
