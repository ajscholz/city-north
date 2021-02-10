import React from 'react'
import HeroBanner from '../components/HeroBanner'
import { graphql } from 'gatsby'
import FeaturesSection from '../components/sections/FeaturesSection'
import CallToActionSection from '../components/sections/CallToActionSection'

const IndexPage = ({ data }) => {
  return (
    <>
      <HeroBanner banner={data.page.banner} />
      <FeaturesSection />
      <CallToActionSection />
    </>
  )
}

export default IndexPage

export const data = graphql`
  {
    page: contentfulPage(title: { eq: "Index" }) {
      banner {
        ...PageBannerFragment
      }
    }
  }
`
