import React from 'react'

const FeaturedCardsSection = () => {
  return (
    <section className='relative bg-cn-dk-blue-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='absolute inset-0'>
        <div className='bg-white h-1/3 sm:h-2/3'></div>
      </div>
      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
            From the blog
          </h2>
          <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
            Listen to the most recent message at City North, or browse our
            current message series now.
          </p>
        </div>
        <div className='mt-12 max-w-lg mx-auto lg:mx-16 xl:mx-32 grid gap-10 lg:grid-cols-2 lg:max-w-none'>
          <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div className='flex-shrink-0'>
              <img
                className='h-48 w-full object-cover'
                src='https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=UQ0arCaALn&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
                alt=''
              />
            </div>
            <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
              <div className='flex-1 '>
                <p className='text-sm font-medium text-cn-dk-blue-600'>
                  <a href='#' className='hover:underline'>
                    Message
                  </a>
                </p>
                <a href='#' className='block mt-2'>
                  <p className='text-xl font-semibold text-gray-900'>
                    This week's message
                  </p>
                  <p className='mt-3 text-base text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto accusantium praesentium eius, ut atque fuga
                    culpa, similique sequi cum eos quis dolorum.
                  </p>
                </a>
              </div>
              <div className='mt-6 flex items-center'>
                <div className='flex-shrink-0'>
                  {/* <a href='#'>
                    <span className='sr-only'>Roel Aufderehar</span>
                    <img
                      className='h-10 w-10 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=UQ0arCaALn&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </a> */}
                </div>
                <div className='ml-0'>
                  <p className='text-sm font-medium text-gray-900'>
                    <a href='#' className='hover:underline'>
                      Andrew Scholz
                    </a>
                  </p>
                  <div className='flex space-x-1 text-sm text-gray-500'>
                    <time dateTime='2020-03-16'>Mar 16, 2020</time>
                    <span aria-hidden='true'>&middot;</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div className='flex-shrink-0'>
              <img
                className='h-48 w-full object-cover'
                src='https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=UQ0arCaALn&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
                alt=''
              />
            </div>
            <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
              <div className='flex-1'>
                <p className='text-sm font-medium text-cn-dk-blue-600'>
                  <a href='#' className='hover:underline'>
                    Message Series
                  </a>
                </p>
                <a href='#' className='block mt-2'>
                  <p className='text-xl font-semibold text-gray-900'>
                    How to use search engine optimization to drive sales
                  </p>
                  <p className='mt-3 text-base text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit facilis asperiores porro quaerat doloribus, eveniet
                    dolore. Adipisci tempora aut inventore optio animi., tempore
                    temporibus quo laudantium.
                  </p>
                </a>
              </div>
              <div className='mt-6 flex items-center'>
                {/* <div className='flex-shrink-0'>
                  <a href='#'>
                    <span className='sr-only'>Brenna Goyette</span>
                    <img
                      className='h-10 w-10 rounded-full'
                      src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixqx=UQ0arCaALn&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </a>
                </div> */}
                <div className='ml-0'>
                  <p className='text-sm font-medium text-gray-900'>
                    <a href='#' className='hover:underline'>
                      Brenna Goyette
                    </a>
                  </p>
                  <div className='flex space-x-1 text-sm text-gray-500'>
                    <time dateTime='2020-03-10'>Mar 10, 2020</time>
                    <span aria-hidden='true'>&middot;</span>
                    <span>4 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCardsSection
