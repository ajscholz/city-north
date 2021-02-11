import React from 'react'
import { graphql } from 'gatsby'

import HeroBanner from '../components/HeroBanner'
import SEO from '../components/SEO'

const AboutPage = ({ data }) => {
  const { seo } = data
  return (
    <>
      <SEO
        title='About'
        description="Here's some about stuff"
        image={seo.banner.image.file.url}
      />
      <HeroBanner banner={data.page.banner} />
    </>
  )
}

export default AboutPage

export const data = graphql`
  {
    page: contentfulPage(title: { eq: "About" }) {
      banner {
        ...PageBannerFragment
      }
    }
    seo: contentfulPage(title: { eq: "About" }) {
      ...SeoFragment
    }
  }
`
