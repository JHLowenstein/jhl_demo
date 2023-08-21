import Image from 'next/image'
import Cover from '@/public/images/leather-prod-hero.png'

export default function Hero() {
  return (
    <section className='relative'>
      {/* Background image */}
      <div className='absolute inset-0'>
        <Image
          className='w-full h-full object-cover'
          src={Cover}
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

      {/* Hero content */}
      <div className='max-w-6xl mx-auto px-4 sm:px-6 relative'>
        <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='h1 mb-4' data-aos='fade-up' data-aos-delay='200'>
              Explore the <br />
              <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                LEATHER PRODUCTS
              </span>{' '}
              offered at JHL
            </h1>
            <p
              className='text-xl font-semibold text-gray-300 mb-8'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              Our team of expert chemists and technical staff is dedicated to
              delivering exceptional LEATHER COLOR formulation services.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
