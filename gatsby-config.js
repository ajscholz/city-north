module.exports = {
  siteMetadata: {
    title: 'City North Church',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'ZdJAj6bTTfsC3TCBFY0VSkFoaCTBEfL_E5WrLFZUUS0',
        spaceId: 'hiqf9clqtwll',
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-113118455-1',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    `gatsby-plugin-image`,
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
