import React, { useState } from 'react'
import { graphql } from 'gatsby'
// import Question from '../Question'

const FAQ = ({ questions }) => {
  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div className='bg-gray-50'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto divide-y-2 divide-gray-200'>
          <h2 className='text-center text-3xl font-extrabold text-gray-900 sm:text-4xl'>
            Frequently asked questions
          </h2>
          <dl className='mt-6 space-y-6 divide-y divide-gray-200'>
            {questions.map((question) => (
              <Question key={question.id} question={question} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default FAQ

const Question = ({ question }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className='pt-6'>
      <dt className='text-lg'>
        <button
          className='text-left w-full flex justify-between items-start text-gray-400'
          onClick={() => setOpen(!open)}
        >
          <span className='font-medium text-gray-900'>
            {question.titleText}
          </span>
          <span className='ml-6 h-7 flex items-center'>
            <svg
              className={`${
                open ? '-rotate-180' : 'rotate-0'
              } h-6 w-6 transform`}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </span>
        </button>
      </dt>
      <dd
        className={`${
          open ? 'block' : 'hidden'
        } mt-2 pr-12 text-base text-gray-500`}
        dangerouslySetInnerHTML={{
          __html: question.detailText.childMarkdownRemark.html,
        }}
      ></dd>
    </div>
  )
}

export const query = graphql`
  fragment FAQFragment on ContentfulInformation {
    id: contentful_id
    titleText
    detailText {
      childMarkdownRemark {
        html
      }
      detailText
    }
  }
`
