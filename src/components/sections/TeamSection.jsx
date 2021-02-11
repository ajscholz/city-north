import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const TeamSection = ({ teamData }) => {
  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div className='bg-gray-900'>
      <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12'>
          <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 className='text-3xl font-extrabold text-white tracking-tight sm:text-4xl'>
              Meet our team
            </h2>
            <p className='text-xl text-gray-300'>
              We think we have the best team around. You don't have to agree,
              and you're allowed to be wrong.
            </p>
          </div>
          <ul className='space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8'>
            {teamData.contentBlocks.map((teamMember) => (
              <TeamMember key={teamMember.id} person={teamMember} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TeamSection

const TeamMember = ({ person }) => (
  <li className='py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left'>
    <div className='space-y-6 xl:space-y-10'>
      <GatsbyImage
        alt=''
        image={person.image.gatsbyImageData}
        className='flex mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56'
      />
      <div className='space-y-2 xl:flex xl:items-center xl:justify-between'>
        <div className='font-medium text-lg leading-6 space-y-1'>
          <h3 className='text-white'>{person.name}</h3>
          <p className='text-cn-dk-blue-400'>{person.position}</p>
        </div>

        <ul className='flex justify-center space-x-5'>
          <li>
            <a
              href='mailto:info@citynorth.church'
              className='text-gray-400 hover:text-gray-300'
            >
              <span className='sr-only'>Twitter</span>
              <svg
                className='w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </li>
)

export const query = graphql`
  fragment TeamMemberFragment on ContentfulPerson {
    id: contentful_id
    name
    position
    image {
      gatsbyImageData(quality: 60, formats: WEBP)
    }
  }
`
