'use client'
import { SetStateAction, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './leather-mobile-menu'
import Logo from '@/public/images/jhlLogo.png'

import React from 'react'

const leatherHeader: React.FC = ({}) => {
  const [sticky, setSticky] = useState(false)
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar)
  })
  return (
    <header
      className={`header  z-40  w-full items-center bg-transparent ${
        sticky
          ? '!fixed !z-[9999] !bg-black !bg-opacity-90 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20'
          : 'absolute'
      }`}
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='flex items-center justify-between h-20'>
          {/* Site branding */}
          <div className='shrink-0 mr-4'>
            {/* Logo */}
            <Link href='/' className='block' aria-label='JHL Main'>
              {/* <Image
                className='rounded-lg'
                src={Logo}
                width={150}
                height={75}
                alt='logo'
                style={{
                  margin: 'auto',
                  pointerEvents: 'none',
                }}
              /> */}
              <h3 className='h3'>
                <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                  JHL
                </span>{' '}
              </h3>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className='hidden md:flex md:grow flex-1 justify-center'>
            {/* Desktop menu links */}
            <ul className='flex grow text-white text-semibold justify-end flex-wrap items-center'>
              {/* 2nd level: hover */}
              <li>
                <Link
                  href='/leather'
                  className='font-semibold text-md  hover:text-pink-300 flex py-2 px-4 leading-tight'
                >
                  LEATHER
                </Link>
              </li>
              <li>
                <Link
                  href='/leather/products'
                  className='font-semibold text-md  hover:text-emerald-400 flex py-2 px-4 leading-tight'
                >
                  PRODUCTS
                </Link>
              </li>
              <li>
                <Link
                  href='/leather/services'
                  className='font-semibold text-md  hover:text-violet-400 flex py-2 px-4 leading-tight'
                >
                  SERVICES
                </Link>
              </li>

              <li>
                <Link
                  href='/leather/company'
                  className='font-semibold hover:text-sky-200 px-4 py-2 flex items-center transition duration-150 ease-in-out'
                >
                  COMPANY
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='font-semibold hover:text-amber-200 px-4 py-2 flex items-center transition duration-150 ease-in-out'
                >
                  CONTACT
                </Link>
              </li>
            </ul>

            {/* Desktop sign in links */}
            {/* <ul className='flex grow justify-end flex-wrap items-center'>
              <li>
                <Link
                  href='/signin'
                  className='font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out'
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href='/signup'
                  className='btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3'
                >
                  Sign up
                </Link>
              </li>
            </ul> */}
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

export default leatherHeader
