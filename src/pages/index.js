import React from 'react'
import HeroBanner from '../components/HeroBanner'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  return (
    <>
      <HeroBanner banner={data.page.banner} />
      <h1>Hello World</h1>
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
