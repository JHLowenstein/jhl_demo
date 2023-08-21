'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

import Call from '@/public/images/CALL.png'
import Email from '@/public/images/EMAIL.png'

interface ContactMethod {
  icon: React.ReactNode
  contact: string
  title: string
}

const contactMethods: ContactMethod[] = [
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
        />
      </svg>
    ),
    contact: '420 Morgan Avenue, Brooklyn, New York 11222',
    title: 'JHL Head Quarters',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
        />
      </svg>
    ),
    contact: '+1 (718) 388 5410',
    title: 'Phone',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
        />
      </svg>
    ),
    contact: 'info@jhlowenstein.com',
    title: 'Email',
  },
]

const ContactSection: React.FC = () => {
  return (
    <>
      <section className='relative'>
        <div className='max-w-8xl mx-auto px-4 sm:px-6 relative'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <div className='py-5 md:py-5 font-semibold'>
              {/* Section header */}
              <div className='max-w-3xl mx-auto text-center pb-12 md:pb-16 mt-40'>
                <h2 className='h2 mb-4'>
                  Connect with our{' '}
                  <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                    Expert Staff
                  </span>{' '}
                  for all Color Inquiries
                </h2>
                <p className='text-xl text-gray-400'>
                  Feel free to connect with our team of experts, who are
                  well-versed in all aspects of color inquiries, ready to
                  provide you with comprehensive information and guidance.
                </p>
              </div>
              <section className='mt-20'>
                <div className='max-w-6xl mx-auto px-4 sm:px-6 md:mb-20'>
                  <div className=''>
                    {/*  */}
                    <div className='max-w-sm mx-auto grid gap-8 lg:grid-cols-2  items-start lg:max-w-none'>
                      {/* Hair Box */}
                      <div
                        className='flex flex-col h-full px-3 pb-6bg-white-800 rounded-xl'
                        data-aos='fade-up'
                      >
                        <motion.div
                          className='box'
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href='tel:+17183885410'>
                            <Image
                              className='rounded-lg transition duration-700 ease-out'
                              src={Call}
                              width={300}
                              height={200}
                              alt='hair model'
                              style={{
                                margin: 'auto',
                                pointerEvents: 'none',
                                zIndex: '12',
                              }}
                            />
                          </Link>
                        </motion.div>
                      </div>

                      {/* Fur Box */}
                      <div
                        className='flex flex-col h-full px-3 pb-6 bg-white-800 rounded-xl'
                        data-aos='fade-up'
                      >
                        <motion.div
                          className='box'
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href='mailto:info@jhlowenstein.com'>
                            <Image
                              className='rounded-lg'
                              src={Email}
                              width={300}
                              height={200}
                              alt='fur model'
                              style={{
                                margin: 'auto',
                                pointerEvents: 'none',
                              }}
                            />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <ul
                className='md:ml-5 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24 mb-40'
                data-aos='fade-up'
              >
                {contactMethods.map((item, idx) => (
                  <li key={idx}>
                    <h4 className='text-snow-400 font-semibold text-center text-lg font-bold'>
                      {item.title}
                    </h4>
                    <div className='mt-3 flex font-semibold items-center gap-x-3'>
                      <div className='flex-none text-center text-snow-400 text-xl font-bold'>
                        {item.icon}
                      </div>
                      {item.title === 'Phone' ? (
                        <a
                          className='font-semibold'
                          href={`tel:${item.contact}`}
                        >
                          {item.contact}
                        </a>
                      ) : (
                        <a
                          className='font-semibold'
                          href={`mailto:${item.contact}`}
                          target='blank'
                        >
                          {item.contact}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactSection
