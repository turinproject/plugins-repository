import React, { Component } from "react";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";

export default class PluginSuggestions extends Component {
  render() {
    const { pluginNode } = this.props;
    const pluginFields = pluginNode.fields;
    return (
      <div className="plugin-suggestions md-grid md-cell--12">
        <Link to={pluginFields.prevSlug} className="plugin-suggestion">
          <FontIcon
            forceFontSize
            forceSize={64}
            className="secondary-color arrow-nav"
          >
            arrow_back
          </FontIcon>
          <div className="headline-container hide-on-mobile">
            <h2 className="md-body-2 secondary-color">Previous</h2>
            <h6 className="md-headline secondary-color">
              {pluginFields.prevTitle}
            </h6>
          </div>
        </Link>
        <Link to={pluginFields.nextSlug} className="plugin-suggestion">
          <div className="headline-container">
            <h2 className="md-body-2 secondary-color">Next</h2>
            <h6 className="md-headline secondary-color">
              {pluginFields.nextTitle}
            </h6>
          </div>
          <FontIcon
            forceFontSize
            forceSize={64}
            className="secondary-color arrow-nav"
          >
            arrow_forward
          </FontIcon>
        </Link>
      </div>
    );
  }
}
