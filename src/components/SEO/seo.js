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
      <meta
        name="description"
        content="Frontend Engineer exploring grounds of React and React Native, building NativeBase UI library."
      />

      <meta property="og:url" content="https://ankits.info" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ankit Tailor | Frontend Engineer" />
      <meta
        property="og:description"
        content="Frontend Engineer exploring grounds of React and React Native, building NativeBase UI library."
      />
      <meta
        property="og:image"
        content="https://pbs.twimg.com/profile_images/1462665715903696896/6UU9EkZF.jpg"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="ankits.info" />
      <meta property="twitter:url" content="https://ankits.info" />
      <meta name="twitter:title" content="Ankit Tailor | Frontend Engineer" />
      <meta
        name="twitter:description"
        content="Frontend Engineer exploring grounds of React and React Native, building NativeBase UI library."
      />
      <meta
        name="twitter:image"
        content="https://pbs.twimg.com/profile_images/1462665715903696896/6UU9EkZF.jpg"
      />
    </Helmet>
  )
}

export default SEO
