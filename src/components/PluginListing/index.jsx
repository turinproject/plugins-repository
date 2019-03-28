import React from 'react';
import Navbar from '../Navbar';
import PluginPreview from '../PluginPreview';

class PluginListing extends React.Component {
  constructor() {
    super();

    this.state = {
      activeCategory: 'all'
    };

    this.handleMenuChange = this.handleMenuChange.bind(this)
  }

  getPluginList() {
    const { activeCategory } = this.state;

    const pluginList = [];
    this.props.pluginEdges.forEach(pluginEdge => {
      if (activeCategory === 'all' || activeCategory === pluginEdge.node.frontmatter.category) {
        pluginList.push({
          path: pluginEdge.node.fields.slug,
          tags: pluginEdge.node.frontmatter.tags,
          category: pluginEdge.node.frontmatter.category,
          logo: pluginEdge.node.frontmatter.logo,
          title: pluginEdge.node.frontmatter.title,
          date: pluginEdge.node.fields.date,
          description: pluginEdge.node.rawMarkdownBody
        });
      }
    });
    return pluginList;
  }

  handleMenuChange(category) {
    this.setState({ activeCategory: category });
  }

  render() {
    const { activeCategory } = this.state;
    const pluginList = this.getPluginList();

    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle">
        <Navbar
          activeCategory={activeCategory}
          onMenuChange={this.handleMenuChange}
        />
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
