// See: https://www.gatsbyjs.org/docs/gatsby-config/

module.exports = {
  siteMetadata: {
    title: `Chaotic Design`,
    description: `Personal website for professional software engineer Kris Evans.`,
    author: `Kris Evans <mkevanz@gmail.com>`
  },
  plugins: [
    // For dyanamically loading files from the filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      }
    },
    // For parsing markdown files
    `gatsby-transformer-remark`,
    // For adding progressive web app manifest
    // https://developers.google.com/web/fundamentals/web-app-manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ChaoticDesign.io`,
        short_name: `ChaoticDesign`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      }
    },
    // For offline experience
    `gatsby-plugin-offline`,
    // For generating page metadata for search engines
    `gatsby-plugin-react-helmet`,
    // Fixes issue where page not showing on mobile. 
    //   Issue: https://github.com/gatsbyjs/gatsby/issues/13410
    `gatsby-plugin-remove-serviceworker`
  ],
}