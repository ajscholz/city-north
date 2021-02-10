import React from 'react'
import { Transition } from '@headlessui/react'

const MobileMenu = ({ open, setOpen }) => {
  return (
    <Transition
      show={open}
      enter='duration-150 ease-out'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='duration-100 ease-in'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
    >
      <div className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
        <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
          <div className='px-5 pt-4 flex items-center justify-between'>
            <div>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                alt=''
              />
            </div>
            <div className='-mr-2'>
              <button
                type='button'
                onClick={() => setOpen(false)}
                className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              >
                <span className='sr-only'>Close main menu</span>
                {/* <!-- Heroicon name: outline/x --> */}
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
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='main-menu'
          >
            <div className='px-2 pt-2 pb-3 space-y-1' role='none'>
              <a
                href='#'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                role='menuitem'
              >
                Product
              </a>

              <a
                href='#'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                role='menuitem'
              >
                Features
              </a>

              <a
                href='#'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                role='menuitem'
              >
                Marketplace
              </a>

              <a
                href='#'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                role='menuitem'
              >
                Company
              </a>
            </div>
            <div role='none'>
              <a
                href='#'
                className='block w-full px-5 py-3 text-center font-medium text-cn-dk-blue-600 bg-gray-50 hover:bg-gray-100'
                role='menuitem'
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default MobileMenu
