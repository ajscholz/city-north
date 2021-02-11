import React from 'react'
import { graphql } from 'gatsby'

import HeroBanner from '../components/HeroBanner'
import SEO from '../components/SEO'

const MessagesPage = ({ data }) => {
  const { seo } = data
  return (
    <>
      <SEO
        title='Messages'
        description="Watch or listen to Sunday messages from City North Church. Browse the message archive, or browse by message series. Either way you'll find Biblical, applicable, and life-changing messages from Pastor Andrew Scholz and others."
        image={seo.banner.image.file.url}
      />
      <HeroBanner banner={data.page.banner} />
    </>
  )
}

export default MessagesPage

export const data = graphql`
  {
    page: contentfulPage(title: { eq: "Messages" }) {
      banner {
        ...PageBannerFragment
      }
    }
    seo: contentfulPage(title: { eq: "Messages" }) {
      ...SeoFragment
    }
  }
`
