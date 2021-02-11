import React from 'react'
import { graphql } from 'gatsby'

import HeroBanner from '../components/HeroBanner'
import SEO from '../components/SEO'

const ConnectPage = ({ data }) => {
  const { seo } = data
  return (
    <>
      <SEO
        title='Connect'
        description='Learn a little more about City North and learn how to take your next steps here.'
        image={seo.banner.image.file.url}
      />
      <HeroBanner banner={data.page.banner} />
    </>
  )
}

export default ConnectPage

export const data = graphql`
  {
    page: contentfulPage(title: { eq: "Connect" }) {
      banner {
        ...PageBannerFragment
      }
    }
    seo: contentfulPage(title: { eq: "Connect" }) {
      ...SeoFragment
    }
  }
`
