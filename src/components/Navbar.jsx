import React, { useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const data = useStaticQuery(graphql`
    {
      img: contentfulAsset(title: { eq: "City North Logo" }) {
        gatsbyImageData(height: 32)
      }
    }
  `)

  return (
    <>
      <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
        <nav
          className='relative flex items-center justify-between sm:h-10 lg:justify-start'
          aria-label='Global'
        >
          <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <Link to='/'>
                <span className='sr-only'>Home</span>
                <GatsbyImage
                  image={data.img.gatsbyImageData}
                  alt='City North Logo'
                  // alt={data.blogPost.author}
                  className='h-8 w-auto sm:h-10'
                  objectFit='contain'
                />
              </Link>
              <div className='-mr-2 flex items-center md:hidden'>
                <button
                  type='button'
                  className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                  id='main-menu'
                  aria-haspopup='true'
                  onClick={() => setMobileOpen(true)}
                >
                  <span className='sr-only'>Open main menu</span>
                  {/* <!-- Heroicon name: outline/menu --> */}
                  <svg
                    className='h-6 w-6'
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
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className='hidden md:block md:ml-10 md:pr-4 md:space-x-8'>
            <Link
              to='/about'
              className='font-medium text-gray-500 hover:text-gray-900'
            >
              About
            </Link>

            <Link
              to='/connect'
              className='font-medium text-gray-500 hover:text-gray-900'
            >
              Connect
            </Link>

            <Link
              to='/messages'
              className='font-medium text-gray-500 hover:text-gray-900'
            >
              Messages
            </Link>

            <Link
              to='/give'
              className='font-medium text-cn-dk-blue-600 hover:text-cn-dk-blue-500'
            >
              Give
            </Link>
          </div>
        </nav>
      </div>
      <MobileMenu open={mobileOpen} setOpen={setMobileOpen} />
    </>
  )
}

export default Navbar
