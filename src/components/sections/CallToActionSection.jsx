import React from 'react'

const CallToActionSection = () => {
  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center lg:justify-between'>
        <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          <span className='block'>Ready to see life change?</span>
          <span className='block text-cn-dk-blue-600'>
            Plan your visit today.
          </span>
        </h2>
        <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
          <div className='inline-flex rounded-md shadow'>
            <a
              href='#'
              className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cn-dk-blue-600 hover:bg-cn-dk-blue-700'
            >
              Plan A Visit
            </a>
          </div>
          {/* <div className='ml-3 inline-flex rounded-md shadow'>
            <a
              href='#'
              className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-cn-dk-blue-600 bg-white hover:bg-indigo-50'
            >
              Learn more
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default CallToActionSection
