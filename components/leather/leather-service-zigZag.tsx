'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import Client from '@/public/images/global-client2.png'
import Color from '@/public/images/smz3.png'
import Support from '@/public/images/client-support.png'

export default function ZigZag() {
  return (
    <section className='mt-10'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Section header */}

        <div className='py-12 md:pt-6 md:pb-20'>
          {/* Items */}
          <div className='grid gap-20'>
            {/* 1st item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
                data-aos='fade-up'
              >
                <Image
                  className='max-w-full rounded-xl mx-auto md:max-w-none h-auto'
                  src={Client}
                  width={540}
                  height={405}
                  alt='Client'
                  style={{ pointerEvents: 'none' }}
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-right'
              >
                <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                  <h3 className='h3 mb-3 '>
                    A Commitment to Service, Quality and Value
                  </h3>
                  <p className='text-xl font-medium text-gray-300 mb-4'>
                    <span className='font-semibold text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                      JHL HAS DEDICATED ITSELF
                    </span>{' '}
                    to the individual needs of its customers—from
                    multi-national, world-renowned corporations to small,
                    privately held companies. Attention to detail, direct and
                    immediate access to our technical and customer support
                    personnel and the JHL commitment to personalized service
                    assure you of trend setting, quality dyestuffs on all your
                    products. Quicker turn around, accurate responses to your
                    needs, and “on-time” deliveries allow you to bring your
                    products to market sooner and gain the competitive edge you
                    need to compete in today’s fast-paced environment.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl'
                data-aos='fade-up'
              >
                <Image
                  className='max-w-full rounded-xl mx-auto md:max-w-none h-auto'
                  src={Color}
                  width={540}
                  height={405}
                  alt='materials'
                  style={{ pointerEvents: 'none' }}
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-left'
              >
                <div className='md:pl-4 lg:pl-12 xl:pl-16'>
                  <h3 className='h3 mb-3'>
                    Helping to keep you at the leading edge
                  </h3>
                  <p className='text-xl font-medium text-gray-300 mb-4'>
                    <span className='font-semibold text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                      OUR EXPERT CHEMISTS AND TECHNICAL STAFF,
                    </span>{' '}
                    from around the world, respond quickly and accurately to
                    provide formulation assistance, new color development,
                    consultation, product line enhancement or help in solving
                    complex dyeing issues for special applications. We’ll work
                    with you every step of the way, from color development
                    through product and delivery to ensure the ultimate in
                    product integrity and customer satisfaction. Our laboratory
                    facilities are available to you and your staff to test
                    formulations or to work out a full pilot program. No matter
                    what the situation, we are totally prepared to tailor
                    solutions to our customers’ individual needs.
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
                data-aos='fade-up'
              >
                <Image
                  className='max-w-full rounded-xl mx-auto md:max-w-none h-auto'
                  src={Support}
                  width={540}
                  height={405}
                  alt='Color since 1897'
                  style={{ pointerEvents: 'none' }}
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-right'
              >
                <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                  <h3 className='h3 mb-3'>
                    Specialized Services For Leather Color Formulators{' '}
                  </h3>
                  <p className='text-xl font-medium text-gray-300 mb-4'>
                    {' '}
                    <span className='font-semibold text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                      IN ADDITION TO THE COMPREHENSIVE SERVICE AND SUPPORT
                    </span>{' '}
                    provided to our customers, JHL leather color specialists and
                    formulators also provide valuable insights into navigating
                    rigorous regulatory issues, custom dye synthesis, and
                    proprietary color formulation collaborations exclusively for
                    your company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
