module.exports = {
  siteMetadata: {
    title: `Dark Matter Consulting`,
    description: `Let's talk about how we can make small batch, craft brewed software for your unique palate`,
    author: `@mckelveygreg`,
    siteUrl: 'https://darkmatteroregon.com',
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cms`,
        path: `${__dirname}/src/markdown/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 300,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },

    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat', 'Raleway'],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-136704200-1',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dark Matter Consulting`,
        short_name: `Dark Matter`,
        start_url: `/`,
        background_color: `#fbfcfb`,
        theme_color: `#070a0e`,
        display: `minimal-ui`,
        icon: `src/images/logoBackground.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
  ],
}
