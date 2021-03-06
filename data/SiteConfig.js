module.exports = {
  siteTitle: "Avogadro 2 Plugins Repository", // Site title.
  siteTitleShort: "Plugins", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Plugins Repository", // Alternative site title for SEO.
  siteLogo: "/assets/img/logos/other.png", // Logo used for SEO and manifest.
  defaultAvatar: "/assets/img/user.png", // Default Profile image for users without avatar.
  siteUrl: "https://www.turinproject.org", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteDescription: "A plugin repository for Avogadro 2.", // Website description used for meta description tag.
  categories: [
    {
      id: 'plugin-type',
      name: 'Plugin Types',
      options: [
        {
          id: 'generators',
          name: 'Generators',
        },
        {
          id: 'commands',
          name: 'Commands'
        },{
          id: 'data',
          name: 'Data',
        },
        {
          id: 'force-fields',
          name: 'Force Fields',
        },
        {
          id: 'translations',
          name: 'Translations',
        },
        {
          id: 'other',
          name: 'Other',
        },
      ]
    },
    {
      id: 'plugin-status',
      name: 'Status',
      options: [
        {
          id: 'submitted',
          name: 'Submitted'
        },
        {
          id: 'approved',
          name: 'Approved'
        },
        {
          id: 'featured',
          name: 'Featured'
        },
      ]
    }
  ],
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.

  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/turinproject/plugins-repository",
      iconClassName: "fa fa-github"
    },
    {
      label: "Slack",
      url: "https://openchemistry.slack.com",
      iconClassName: "fa fa-slack"
    },
  ]
};
