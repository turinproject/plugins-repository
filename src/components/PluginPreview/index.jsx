import React, { Component } from 'react';
import { Link } from 'gatsby';
import { FontIcon } from 'react-md';

import PluginTags from 'components/PluginTags';
import Helpers from 'utils/Helpers';
import config from 'data/SiteConfig';

class PluginPreview extends Component {
  getDownloadCount({ releases }) {
    const { nodes } = releases;
    if (nodes && !nodes.length) return 'Pre-release';
    let count = 0;
    nodes.forEach(node => {
      const { releaseAssets } = node;
      return releaseAssets && releaseAssets.nodes && releaseAssets.nodes.forEach(item => {
        count += item.downloadCount;
      });
    });
    return count;
  }

  render() {
    const { pluginInfo, repositories } = this.props;
    const repository = repositories && repositories.find(item => item.url.toLowerCase() === pluginInfo.url.toLowerCase());
    const logo = pluginInfo.logo ? pluginInfo.logo : `/assets/img/logos/${pluginInfo.category}.png`;
    const downloadCount = this.getDownloadCount(repository); 
    return (
      <div key={pluginInfo.path} id="cardItem" className="md-grid md-cell md-cell--6">
        <div className="card-content">
          <img
            src={logo}
            alt="featured"
            className="featured-image"
            onError={e => { e.target.src = config.siteLogo }}
          />
          <div className="card-body">
            <Link to={`categories/${pluginInfo.category}`}>
              <h6>{Helpers.getCategoryName(pluginInfo.category)}</h6>
            </Link>
            <Link to={pluginInfo.path}>
              <h3>{pluginInfo.title}</h3>
            </Link>
            <p>{repository && repository.description}</p>
          </div>
          <div className="card-action">
            <Link to={pluginInfo.path}>
              <button type="button" className="plugin-install default-button">Get Plugin</button>
              <span>More Detiails</span>
            </Link>
          </div>
        </div>
        <PluginTags tags={pluginInfo.tags} />
        <div className="card-footer">
          <a href={repository.owner.url} className="plugin-poster">
            <img
              src={repository && repository.owner.avatarUrl}
              alt="avatar"
              className="avatar"
              onError={e => { e.target.src = config.defaultAvatar }}
            />
            <span>{repository && repository.owner.login}</span>
          </a>
          <div className="post-rating">
            <div className="download">
              <FontIcon iconClassName="fa fa-cloud-download" />
              {downloadCount}
            </div>
            <div className="stars">
              <div className="star-icon">
                <FontIcon iconClassName="fa fa-star" />
              </div>
              <div className="stared-num">{repository && repository.stargazers.totalCount}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PluginPreview;
