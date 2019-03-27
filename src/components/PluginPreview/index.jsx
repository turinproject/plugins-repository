import React, { Component } from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
// import StarRatings from 'react-star-ratings';

import config from 'data/SiteConfig';
import PluginTags from 'components/PluginTags';

class PluginPreview extends Component {
  render() {
    const { pluginInfo } = this.props;

    return (
      <div key={pluginInfo.path} id="cardItem" className="md-grid md-cell md-cell--6">
        <div className="card-content">
          <img
            src={pluginInfo.logo ? pluginInfo.logo : config.siteLogo}
            alt="featured"
            className="featured-image"
            onError={e => {e.target.src = config.siteLogo}}
          />
          <div className="card-body">
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
            <span>By <span>Automatic</span></span>
          </div>
          <div className="post-desc">
            <span>
              <b>Update Date</b>
              {moment(pluginInfo.date).format(config.dateFormat)}
            </span>
            {/* <StarRatings
              rating={4.5}
              starDimension="16px"
              starSpacing="0px"
              starRatedColor="#feb802"
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default PluginPreview;
