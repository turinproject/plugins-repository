import React from "react";
import SearchBar from "../SearchBar";
import PluginPreview from "../PluginPreview";

class PluginListing extends React.Component {
  getPluginList() {
    const pluginList = [];
    this.props.pluginEdges.forEach(pluginEdge => {
      pluginList.push({
        path: pluginEdge.node.fields.slug,
        tags: pluginEdge.node.frontmatter.tags,
        category: pluginEdge.node.frontmatter.category,
        logo: pluginEdge.node.frontmatter.logo,
        title: pluginEdge.node.frontmatter.title,
        date: pluginEdge.node.fields.date,
        description: pluginEdge.node.rawMarkdownBody
      });
    });
    return pluginList;
  }

  render() {
    const pluginList = this.getPluginList();
    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle">
        <SearchBar />
        <div className="md-grid md-cell--8 mobile-fix">
          {pluginList.map(plugin => (
            <PluginPreview key={plugin.title} pluginInfo={plugin} />
          ))}
        </div>
      </div>
    );
  }
}

export default PluginListing;
