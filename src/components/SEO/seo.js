import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ siteTitle = "" }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          url
          image
          twitter
          author
        }
      }
    }
  `)

  const defaults = data.site.siteMetadata

  console.log(data.site.siteMetadata, "###")

  const title = `${defaults.title} • ${siteTitle}`
  const description = defaults.description
  const url = defaults.siteUrl
  const image = defaults.image

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="image" content={`${url}${image}`} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={defaults.twitter} />
      <meta name="twitter:title" content={defaults.title} />
      <meta name="twitter:description" content={defaults.twitterDescription} />
      <meta
        name="twitter:image"
        content={`https://pbs.twimg.com/profile_images/1462665715903696896/6UU9EkZF_400x400.jpg`}
      />
    </Helmet>
  )
}

export default SEO
