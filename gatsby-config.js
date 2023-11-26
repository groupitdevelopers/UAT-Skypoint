const { linkResolver } = require("./config/prismic/link-resolver");

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Skypoint`,
    siteUrl: `https://skypoint.com.au`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        releaseId: process.env.PRISMIC_RELEASE_ID,
        linkResolver: (doc) => linkResolver(doc)
      }
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        releaseId: process.env.PRISMIC_RELEASE_ID,
        linkResolver: (doc) => linkResolver(doc)
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: '/',
        background_color: '#0054a8',
        theme_color: '#0054a8',
        display: 'standalone',
        icon: './src/images/icon-512x512.png',
      }
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -135,
        duration: 300
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Oswald\:100,200,300,400,500,600,700,800` 
        ],
        display: 'swap'
      }
    }
  ]
}
