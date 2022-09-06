/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Ankit Tailor",
    description:
      "I'm Ankit Tailor, a Software Engineer from Gujarat, India. Currently I am contributing to NativeBase core @GeekyAnts. I share my knowledge by writing blogs and contributing to community.",
    siteUrl: "https://ankits.info",
    url: "https://ankits.info",
    author: "Ankit Tailor",
    keywords: "Core Developer @NativeBase",
    twitter: "@ankittailor__",
    linkedin: "@ankit-tailor",
    twitterDescription:
      "🧑🏻‍💻 @geekyants | Building  @nativebase | ankits.info",
    image: `/profile.jpeg`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/content/blogs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
