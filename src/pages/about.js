import React from 'react'
import { graphql } from 'gatsby'

import HeroBanner from '../components/HeroBanner'
import SEO from '../components/SEO'
import TeamSection from '../components/sections/TeamSection'
import FAQ from '../components/sections/FAQ'

const AboutPage = ({ data }) => {
  const {
    seo,
    page: { banner, sections },
  } = data
  const teamData = sections.find((section) => section.title === 'Our Team')
  const questionsData = sections.find(
    (section) => section.title === 'Common Questions'
  )
  return (
    <>
      <SEO
        title='About'
        description="Here's some about stuff"
        image={seo.banner.image.file.url}
      />
      <HeroBanner banner={banner} />
      <TeamSection teamData={teamData} />
      <FAQ questions={questionsData.contentBlocks} />
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
      sections {
        title
        contentBlocks {
          ... on ContentfulPerson {
            ...TeamMemberFragment
          }
          ... on ContentfulInformation {
            ...FAQFragment
          }
        }
      }
    }
    seo: contentfulPage(title: { eq: "About" }) {
      ...SeoFragment
    }
  }
`
