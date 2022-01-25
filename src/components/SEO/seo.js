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

  const title = `${defaults.title} • ${siteTitle}`
  const description = defaults.description
  const url = defaults.siteUrl
  const image = defaults.image
  const defaultUrl = "https://ankittailor.tech"
  console.log(defaultUrl + image)

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      {image && <meta name="image" content={`${defaultUrl}${image}`} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={`${defaultUrl}${image}`} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={defaults.twitter} />
      <meta name="twitter:title" content={defaults.title} />
      <meta name="twitter:description" content={defaults.twitterDescription} />
      {image && <meta name="twitter:image" content={`${defaultUrl}${image}`} />}
    </Helmet>
  )
}

export default SEO
