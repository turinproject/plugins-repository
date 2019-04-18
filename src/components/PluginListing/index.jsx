import React from 'react';
import Navbar from '../Navbar';
import PluginPreview from '../PluginPreview';

class PluginListing extends React.Component {
  getPluginList() {
    const pluginList = [];
    this.props.pluginEdges.forEach(pluginEdge => {
      pluginList.push({
        path: pluginEdge.node.fields.slug,
        tags: pluginEdge.node.frontmatter.tags,
        category: pluginEdge.node.frontmatter.category,
        logo: pluginEdge.node.frontmatter.logo ? pluginEdge.node.frontmatter.logo : `/assets/img/logos/${pluginEdge.node.frontmatter.category}.png`,
        title: pluginEdge.node.frontmatter.title,
        date: pluginEdge.node.fields.date,
        description: pluginEdge.node.frontmatter.description
      });
    });

    return pluginList;
  }

  render() {
    const pluginList = this.getPluginList();

    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle">
        <Navbar category={this.props.category} />
        <div className="plugin-container md-grid mobile-fix">
          {pluginList.map(plugin => (
            <PluginPreview key={plugin.title} pluginInfo={plugin} />
          ))}
        </div>
      </div>
    );
  }
}

export default PluginListing;
