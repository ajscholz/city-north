import React from 'react'
import { graphql } from 'gatsby'

import HeroBanner from '../components/HeroBanner'
import SEO from '../components/SEO'

const VisitPage = ({ data }) => {
  const { seo } = data
  return (
    <>
      <SEO
        title='Visit'
        description="Come to a Sunday morning service to experience what's different about City North. Here you can find everything you need to know to plan a visit and have an incredible time."
        image={seo.banner.image.file.url}
      />
      <HeroBanner banner={data.page.banner} />
    </>
  )
}

export default VisitPage

export const data = graphql`
  {
    page: contentfulPage(title: { eq: "Visit" }) {
      banner {
        ...PageBannerFragment
      }
    }
    seo: contentfulPage(title: { eq: "Visit" }) {
      ...SeoFragment
    }
  }
`
