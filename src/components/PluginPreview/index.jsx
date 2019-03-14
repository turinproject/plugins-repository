import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Button from "react-md/lib/Buttons";
import Avatar from "react-md/lib/Avatars";
import CardText from "react-md/lib/Cards/CardText";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";
import moment from "moment";
import PluginTags from "../PluginTags";
import config from "../../../data/SiteConfig";
import "./PluginPreview.scss";

class PluginPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true
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
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }

  render() {
    const { pluginInfo } = this.props;
    const { mobile } = this.state;
    const expand = mobile;

    return (
      <Card key={pluginInfo.path} id="cardItem" raise className="md-grid md-cell md-cell--4">
        <Link style={{ textDecoration: "none" }} to={pluginInfo.path}>
          <CardTitle className="cardHeader" title={pluginInfo.title}>
            <Button raised secondary className="md-cell--right">
              Install
            </Button>
          </CardTitle>
        </Link>
        <CardTitle
          expander={expand}
          avatar={<Avatar icon={<FontIcon iconClassName="fa fa-calendar" />} />}
          title={`Published on ${moment(pluginInfo.date).format(
            config.dateFormat
          )}`}
          subtitle={`${pluginInfo.timeToRead} min read`}
        />

        <CardText expandable={expand}>
          {pluginInfo.description}
          <PluginTags tags={pluginInfo.tags} />
        </CardText>
      </Card>
    );
  }
}

export default PluginPreview;
