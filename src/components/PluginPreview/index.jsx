import React, { Component } from "react";
import { Card, CardTitle, CardText, Button } from 'react-md';
import { Link } from "gatsby";
import moment from "moment";
import PluginTags from "../PluginTags";
import config from "../../../data/SiteConfig";

class PluginPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: true
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ isMobile: false });
    } else {
      this.setState({ isMobile: true });
    }
  }

  render() {
    const { pluginInfo } = this.props;
    const { isMobile } = this.state;
    const expand = isMobile;

    return (
      <Card key={pluginInfo.path} id="cardItem" raise className="md-grid md-cell md-cell--4">
        <Link style={{ textDecoration: "none", width: "100%" }} to={pluginInfo.path}>
          <CardTitle className="cardHeader" title={pluginInfo.title}>
            <Button raised secondary className="md-cell--right">
              Install
            </Button>
          </CardTitle>
        </Link>
        <CardTitle
          expander={expand}
          avatar={(
            <img
              src={pluginInfo.logo}
              alt="avatar"
              className="avatar"
              onError={e => {e.target.src = config.siteLogo}}
            />
          )}
          title={`Published on ${moment(pluginInfo.date).format(
            config.dateFormat
          )}`}
        />

        <CardText expandable={expand} id="cardBody">
          {pluginInfo.description}
        </CardText>
        <PluginTags tags={pluginInfo.tags} />
      </Card>
    );
  }
}

export default PluginPreview;
