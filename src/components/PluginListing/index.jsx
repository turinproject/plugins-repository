import React from 'react';
import { Index } from 'elasticlunr';
import _ from 'lodash';
import Navbar from '../Navbar';
import PluginPreview from '../PluginPreview';

class PluginListing extends React.Component {
  constructor() {
    super();

    this.state = {
      searchQuery: '',
      pluginList: [],
      repositories: []
    };

    this.getInitialPluginList = this.getInitialPluginList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getOrCreateIndex = this.getOrCreateIndex.bind(this);
  }

  componentDidMount() {
    this.setState({
      repositories: this.props.repositories,
      pluginList: this.getInitialPluginList()
    });
  }

  componentDidUpdate(prevProps) {
    const { repositories, pluginList } = this.props;
    if (!_.isEqual(prevProps.repositories, repositories)) {
      this.setState({ repositories });
    }
    if (!_.isEqual(prevProps.pluginList, pluginList)) {
      this.setState({
        pluginList: this.getInitialPluginList()
      });
    }
  }

  getInitialPluginList() {
    const pluginList = [];
    this.props.pluginEdges.forEach(pluginEdge => {
      pluginList.push({
        path: pluginEdge.node.fields.slug,
        tags: pluginEdge.node.frontmatter.tags,
        category: pluginEdge.node.frontmatter.category,
        logo: pluginEdge.node.frontmatter.logo ? pluginEdge.node.frontmatter.logo : `/assets/img/logos/${pluginEdge.node.frontmatter.category}.png`,
        title: pluginEdge.node.frontmatter.title,
        date: pluginEdge.node.fields.date,
        url: pluginEdge.node.frontmatter.url
      });
    });

    return pluginList;
  }

  getOrCreateIndex(searchIndex) {
    return this.index ? this.index : Index.load(searchIndex);
  }

  handleChange(e) {
    this.setState({ searchQuery: e.target.value });
  }

  handleSearch(e, searchIndex) {
    const { searchQuery } = this.state;
    if (e.keyCode !== 13) return;
    const pluginList = this.getInitialPluginList();
    if (!searchQuery) {
      this.setState({ pluginList });
    } else {
      this.index = this.getOrCreateIndex(searchIndex);
      const searchResult = this.index.search(searchQuery, { expand: true }).map(({ ref }) => this.index.documentStore.getDoc(ref));
      this.setState({
        pluginList: pluginList.filter(plugin => !!searchResult.find(item => item.title === plugin.title))
      });
    }
  }

  render() {
    const { searchQuery, repositories, pluginList } = this.state;
    const { category } = this.props;

    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle">
        <Navbar
          category={category}
          searchQuery={searchQuery}
          onChange={this.handleChange}
          onSearch={this.handleSearch}
        />
        {repositories.length && (
          <div className="plugin-container md-grid mobile-fix">
            {pluginList.map(plugin => (
              <PluginPreview
                key={plugin.title}
                pluginInfo={plugin}
                repositories={repositories}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default PluginListing;
