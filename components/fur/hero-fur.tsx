import HeroLogo from '@/public/images/favicon.png'
import Image from 'next/image'
import Fur from '@/public/images/fur-hero.png'

export default function Hero() {
  return (
    <section className='relative '>
      {/* Background image */}
      <div className='absolute inset-0'>
        <Image
          className='w-full h-full object-cover'
          src={Fur}
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
      <div className='max-w-6xl mx-auto px-4 sm:px-6 relative mb-10'>
        {/* Hero content */}
        <section className='relative'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <div className='pt-32 pb-12 md:pt-40 md:pb-10'>
              <div className='max-w-3xl mx-auto text-center'>
                {/* Top image */}

                {/* text content*/}
                <h1 className='h1 mb-4' data-aos='fade-up' data-aos-delay='200'>
                  <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                    JHL is Transforming
                  </span>{' '}
                  <br />
                  <span className=''>FUR COLOR</span>
                </h1>
                <p
                  className='text-xl font-semibold text-white mb-10 '
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  the new{' '}
                  <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                    YOU
                  </span>{' '}
                  is born in our color labs{' '}
                </p>
                {/* image */}
                <div
                  className='relative inline-flex flex-col mb-2 md:mb-40'
                  data-aos='fade-up'
                >
                  <Image
                    className='rounded-xl w-full h-full obect-cover mt-10 '
                    src={Fur}
                    width={300}
                    height={300}
                    alt='fur model'
                    style={{ zIndex: '2', pointerEvents: 'none' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
