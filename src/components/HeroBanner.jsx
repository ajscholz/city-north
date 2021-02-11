import React from 'react'
// import Navbar from './Navbar'
import { graphql, Link } from 'gatsby'
// import { GatsbyImage } from 'gatsby-plugin-image'
import GatsbyImageFocalPoint from './GatsbyImageFocalPoint'

const HeroBanner = ({ banner }) => {
  const { focalPoint } = banner.imageFocalPoint
  const size = banner.image.file.details.image
  const focalPointData = {
    focalPoint: { x: focalPoint.x - size.width * 0.28, y: focalPoint.y },
    size: { w: size.width, h: size.height },
  }
  return (
    <div className='relative bg-white overflow-hidden flex flex-col-reverse lg:block'>
      <div className='mx-8 lg:max-w-7xl lg:mx-auto'>
        <div className='relative -mt-24 sm:-mt-16 md:-mt-12 lg:mt-0 z-10 pt-8 pb-8 px-3 lg:px-0 lg:pt-0 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 shadow-2xl lg:shadow-none rounded-xl lg:rounded-none'>
          <svg
            className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <polygon points='50,0 100,0 50,100 0,100' />
          </svg>

          <div className='h-16 hidden lg:block' />

          {/* <Navbar /> */}

          <main className='mt-0 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 '>
            <div className='sm:text-center lg:text-left'>
              <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                <span className='block text-cn-dk-blue-600'>Your story</span>
                <span className='block '>matters here</span>
              </h1>
              <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className='mt-5 sm:mt-8 flex sm:justify-center mr-auto lg:justify-start'>
                <div className='rounded-md shadow'>
                  <Link
                    to='/visit'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cn-dk-blue-600 hover:bg-cn-dk-blue-700 md:py-4 md:text-lg md:px-10'
                  >
                    Plan A Visit
                  </Link>
                </div>
                {/* <div className='mt-3 sm:mt-0 sm:ml-3'>
                  <a
                    href='#'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-cn-dk-blue-700 bg-cn-dk-blue-100 hover:bg-cn-dk-blue-200 md:py-4 md:text-lg md:px-10'
                  >
                    Live demo
                  </a>
                </div> */}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <GatsbyImageFocalPoint
          image={banner.image.gatsbyImageData}
          alt='Welcome to City North Church'
          loading='eager'
          className='h-112 w-full object-cover md:h-128 lg:w-full lg:h-full'
          focalPointData={focalPointData}
        />
        {/* <img
          className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
          src='https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
          alt=''
        /> */}
      </div>
    </div>
  )
}

export default HeroBanner

export const query = graphql`
  fragment PageBannerFragment on ContentfulPageBanner {
    heroText
    imageFocalPoint {
      focalPoint {
        x
        y
      }
    }
    image {
      gatsbyImageData(formats: WEBP, quality: 90)
      file {
        url
        details {
          image {
            height
            width
          }
        }
      }
    }
  }
`
