'use client'

import Image from 'next/image'

import JHL from '@/public/images/contact-banner.png'

export default function Hero() {
  return (
    <>
      <section className='relative '>
        {/* Background image */}
        <div className='absolute inset-0'>
          <Image
            className='w-full h-full object-cover '
            src={JHL}
            width={1440}
            height={394}
            priority
            alt='About'
            style={{ zIndex: '-10', pointerEvents: 'none' }}
          />
          <div
            className='absolute inset-0 bg-gray-900 opacity-75'
            aria-hidden='true'
          ></div>
        </div>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 relative '>
          {/* Hero content */}
          <div className='relative'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6'>
              <div className='pt-32 pb-12 md:pt-40 md:pb-10'>
                <div className='max-w-3xl mx-auto text-center'>
                  <h1
                    className='h1 mb-4'
                    data-aos='fade-up'
                    data-aos-delay='200'
                  >
                    Contact the{' '}
                    <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                      Team
                    </span>{' '}
                    at JHL
                  </h1>
                  <p
                    className='text-xl font-medium text-white  '
                    data-aos='fade-up'
                    data-aos-delay='200'
                  >
                    We're happy to answer any questions you may have about our{' '}
                    <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                      Color Formulations,
                    </span>{' '}
                    to set up a free consultation with one of our color
                    chemists, or to provide you with any additional information
                    you may need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
