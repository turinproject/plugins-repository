import React, { Component } from 'react';
import { Link } from 'gatsby';
import { FontIcon } from 'react-md';

import PluginTags from 'components/PluginTags';
import config from 'data/SiteConfig';
import Helpers from 'utils/Helpers';

class PluginPreview extends Component {
  render() {
    const { pluginInfo } = this.props;
    const logo = pluginInfo.logo ? pluginInfo.logo : `/assets/img/logos/${pluginInfo.category}.png`;
    return (
      <div key={pluginInfo.path} id="cardItem" className="md-grid md-cell md-cell--6">
        <div className="card-content">
          <img
            src={logo}
            alt="featured"
            className="featured-image"
            onError={e => {e.target.src = config.siteLogo}}
          />
          <div className="card-body">
            <Link to={`categories/${pluginInfo.category}`}>
              <h6>{Helpers.getCategoryName(pluginInfo.category)}</h6>
            </Link>
            <Link to={pluginInfo.path}>
              <h3>{pluginInfo.title}</h3>
            </Link>
            <p>{pluginInfo.description}</p>
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
          <div className="plugin-poster">
            <img
              src={config.defaultAvatar}
              alt="avatar"
              className="avatar"
            />
            <span>Automatic</span>
          </div>
          <div className="post-rating">
            <div className="download">
              <FontIcon iconClassName="fa fa-cloud-download" />
              689,514
            </div>
            <div className="stars">
              <div className="star-icon">
                <FontIcon iconClassName="fa fa-star" />
              </div>
              <div className="stared-num">522</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PluginPreview;
