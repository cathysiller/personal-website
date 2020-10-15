const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  siteMetadata: {
    title: `Catherine Siller`,
    description: `HI!`,
    author: `csiller`,
    url: `https://www.catherine-siller.com`,
    siteUrl: `https://www.catherine-siller.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACEID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}