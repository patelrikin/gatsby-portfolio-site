module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: 'https://gatsby.patelrikin.com',
    author: 'Rikin Patel',
    title: 'Rikin\'s Gatsby Portfolio Project',
    description: 'My Gatsby portfolio project ...',
    keywords: [
      'UI Lead',
      'Software Engineer',
      'Web Developer',
      'Consultant',
      'Resource Manager'
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
