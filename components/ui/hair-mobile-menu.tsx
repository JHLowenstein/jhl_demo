'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return
      setMobileNavOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className='md:hidden'>
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls='mobile-nav'
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className='sr-only'>Menu</span>
        <svg
          className='w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect y='4' width='24' height='2' rx='1' />
          <rect y='11' width='24' height='2' rx='1' />
          <rect y='18' width='24' height='2' rx='1' />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id='mobile-nav'
        ref={mobileNav}
        className='absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out'
        style={
          mobileNavOpen
            ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0.8 }
        }
      >
        <ul className='bg-gray-800 px-4 py-2'>
          <li className='py-2 my-2 border-b border-gray-700'>
            <Link
              href='/hair'
              className='flex font-medium text-white hover:text-rose-300 py-2'
              onClick={() => setMobileNavOpen(false)}
            >
              HAIR
            </Link>
          </li>

          <li className='py-2 my-2 border-b border-gray-700'>
            <Link
              href='/hair/products'
              className='flex font-medium text-white hover:text-emerald-300 py-2'
              onClick={() => setMobileNavOpen(false)}
            >
              PRODUCTS
            </Link>
          </li>
          <li className='py-2 my-2 border-b border-gray-700'>
            <Link
              href='/hair/services'
              className='flex font-medium text-white hover:text-violet-300 py-2'
              onClick={() => setMobileNavOpen(false)}
            >
              SERVICES
            </Link>
          </li>
          <li className='py-2 my-2 border-b border-gray-700'>
            <Link
              href='/hair/company'
              className='flex font-medium text-white hover:text-sky-300 py-2'
              onClick={() => setMobileNavOpen(false)}
            >
              COMPANY
            </Link>
          </li>
          <li>
            <Link
              href='/hair/contact'
              className='flex font-medium text-white hover:text-amber-300 py-2'
              onClick={() => setMobileNavOpen(false)}
            >
              CONTACT
            </Link>
          </li>
          {/* <li>
            <Link href="/signin" className="flex font-medium font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
              Sign in
            </Link>
          </li>
          <li>
            <Link
              href="/signup"
              className="font-medium w-full inline-flex font-medium items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" onClick={() => setMobileNavOpen(false)}
            >
              Sign up
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}
