/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Ankit Tailor",
    description: "I'm Ankit Tailor, a Frontend Developer from Gujarat, India. Currently I am Software Engineer Intern at GeekyAnts. I share my knowledge by writing blogs on hashnode.",
    siteUrl: "https://ankittailor.tech",
    url: "ankittailor.tech",
    author: "Ankit Tailor",
    twitter: "@ankittailor__",
    twitterDescription: "Software Engineer Intern @geekyants | code, photos, memes !",
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
