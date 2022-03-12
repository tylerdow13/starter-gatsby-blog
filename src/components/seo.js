import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ description = '', lang = 'en', meta = [], title, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: image,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >

    <script defer src="/js/plugins/swiper.min.js"></script>
    <script defer src="/js/plugins/mapbox.min.js"></script>
    <script defer src="/js/main.js"></script>

    <link rel="stylesheet" href="/css/plugins/bootstrap.min.css" />
    <link rel="stylesheet" href="/css/plugins/font-awesome.min.css" />
    <link rel="stylesheet" href="/css/plugins/swiper.min.css" />
    <link rel="stylesheet" href="/css/plugins/fancybox.min.css" />
    <link rel="stylesheet" href="/css/plugins/datepicker.css" />
    <link rel="stylesheet" href="/css/plugins/nice-select.css" />
    <link rel="stylesheet" href="/css/plugins/mapbox-style.css" />
    <link rel="stylesheet" href="/css/style.css" />

    </Helmet>
  )
}

export default Seo
