import React from 'react'

const FeaturesSection = () => {
  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div className='py-20 bg-cn-dk-blue-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <h2 className='text-base text-cn-dk-blue-600 font-semibold tracking-wide uppercase'>
            Need To Know
          </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            {`Service Time & Location`}
          </p>
          <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
            Want to know more about City North? The best thing to do is come on
            a Sunday. Worst case scenario you think we're weirdos and just don't
            come back.
          </p>
        </div>

        <div className='mt-10'>
          <div className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
            <div className='flex'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center h-12 w-12 rounded-md bg-cn-dk-blue-500 text-white'>
                  {/* <!-- Heroicon name: clo --> */}
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
              </div>
              <div className='ml-4 flex items-center'>
                <div className='text-lg leading-6 font-medium text-gray-900'>
                  Sundays, 10:30am
                </div>
                {/* <dd className='mt-2 text-base text-gray-500'>
                  Sundays, 10:30am
                </dd> */}
              </div>
            </div>

            <div className='flex'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center h-12 w-12 rounded-md bg-cn-dk-blue-500 text-white'>
                  {/* <!-- Heroicon name: outline/scale --> */}
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                </div>
              </div>
              <div className='ml-4 flex items-center'>
                <div className='text-lg leading-6 font-medium text-gray-900'>
                  250 Rainbow Ave, Sunbury, OH 43074
                </div>
                {/* <dd className='mt-2 text-base text-gray-500'>
                  250 Rainbow Ave, Sunbury, OH 43074
                </dd> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
