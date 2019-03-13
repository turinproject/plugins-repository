module.exports = {
  siteTitle: "Turin Plugins Repository", // Site title.
  siteTitleShort: "Plugins", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Plugins Repository", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://turinproject.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/plugins-repository", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A plugin repository for Avogadro 2.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "", // Tracking code ID for google analytics.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "", // Username to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription: ".", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/turinproject/",
      iconClassName: "fa fa-github"
    },
    {
      label: "Slack",
      url: "https://openchemistry.slack.com",
      iconClassName: "fa fa-slack"
    },
  ],
  copyright: "Copyright © 2019." // Copyright string for the footer of the website and RSS feed.
};
