import React, { Component } from 'react';
import Helmet from 'react-helmet';
import urljoin from 'url-join';
import config from '../../../data/SiteConfig';

class SEO extends Component {
  render() {
    const { pluginNode, pluginPath, pluginSEO } = this.props;
    let title;
    let description;
    let image;
    let pluginURL;
    if (pluginSEO) {
      const pluginMeta = pluginNode.frontmatter;
      ({ title } = pluginMeta);
      description = pluginMeta.description
        ? pluginMeta.description
        : pluginNode.description;
      image = pluginMeta.logo ? pluginMeta.logo : `/logos/${pluginMeta.category}.png`;
      pluginURL = urljoin(config.siteUrl, config.pathPrefix, pluginPath);
    } else {
      title = config.siteTitle;
      description = config.siteDescription;
      image = config.siteLogo;
    }
    image = urljoin(config.siteUrl, config.pathPrefix, image);
    const blogURL = urljoin(config.siteUrl, config.pathPrefix);
    const schemaOrgJSONLD = [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : ""
      }
    ];
    if (pluginSEO) {
      schemaOrgJSONLD.push([
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": pluginURL,
                name: title,
                image
              }
            }
          ]
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPlugining",
          url: blogURL,
          name: title,
          alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
          headline: title,
          image: {
            "@type": "ImageObject",
            url: image
          },
          description
        }
      ]);
    }
    return (
      <Helmet>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:url" content={pluginSEO ? pluginURL : blogURL} />
        {pluginSEO ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

      </Helmet>
    );
  }
}

export default SEO;
