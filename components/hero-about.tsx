import Image from 'next/image'

import HeroImage from '@/public/images/bk-bridge.jpg'
import JHL from '@/public/images/cc1.png'
import moduleName from 'module'

export default function HeroAbout() {
  return (
    <section className='relative'>
      {/* Background image */}
      <div className='absolute inset-0'>
        <Image
          className='w-full h-full object-cover'
          src={HeroImage}
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
      <div className='max-w-6xl mx-auto px-4 sm:px-6 relative mb-20'>
        {/* Hero content */}
        <div className='relative'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 relative'>
            <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
              <div className='max-w-3xl mx-auto text-center'>
                <h1 className='h1 mb-4' data-aos='fade-up'>
                  The story behind{' '}
                  <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                    JHL
                  </span>
                </h1>
                <p
                  className='text-xl font-medium text-gray-300 mb-40 md:mb-8'
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  The journey of how JHL emerged as a leader in color technology
                  since its establishment in 1897 is a testament to dedication,
                  innovation, and continuous pursuit of{' '}
                  <span className='font-semibold text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                    COLOR
                  </span>{' '}
                </p>
                <div
                  className='relative inline-flex flex-col mb-2 md:mb-40'
                  data-aos='fade-up'
                >
                  <Image
                    className='rounded-xl w-full h-full obect-cover mt-10 mb-20 hidden md:block'
                    src={JHL}
                    width={300}
                    height={300}
                    alt='brooklyn bridge'
                    style={{ zIndex: '2', pointerEvents: 'none' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
