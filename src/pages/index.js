import React from 'react'
import HeroBanner from '../components/HeroBanner'
import { graphql } from 'gatsby'
import FeaturesSection from '../components/sections/FeaturesSection'
import CallToActionSection from '../components/sections/CallToActionSection'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  return (
    <>
      <HeroBanner banner={data.page.banner} />
      <FeaturesSection />
      <CallToActionSection />

      <GenericSection>Stories section</GenericSection>

      <GenericSection>Recent Messages and Series</GenericSection>

      <GenericSection>Quick steps</GenericSection>
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

const GenericSection = ({ children }) => (
  <div className='py-20 flex items-center justify-center text-xl border-b-4 border-gray-300'>
    {children}
  </div>
)
