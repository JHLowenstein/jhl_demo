'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import FeatImage01 from '@/public/images/hair-hero.png'
import FeatImage02 from '@/public/images/fur-hero.png'
import FeatImage03 from '@/public/images/leather-hero.png'

export default function Zigzag() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20 '>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
            <h2 className='h2 ' data-aos='fade-up'>
              PERFECTING THE{' '}
              <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300'>
                ART
              </span>{' '}
              OF COLOR FORMULATIONS
            </h2>
          </div>

          {/* Items */}
          <div className='grid gap-20'>
            {/* 1st item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
                data-aos='fade-up'
              >
                <motion.div
                  className='box'
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Link href='/hair'>
                    <Image
                      className='max-w-full rounded-xl mx-auto md:max-w-none h-auto'
                      src={FeatImage01}
                      width={540}
                      height={405}
                      alt='Hair Model'
                      style={{ pointerEvents: 'none' }}
                    />
                  </Link>
                </motion.div>
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-right'
              >
                <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                  <h3 className='h3  font-semibold mb-2'>
                    <span className='text-pink-300'>HAIR</span> COLOR
                  </h3>
                  <p className='text-xl font-medium text-gray-200'>
                    JHL provides a complete line of raw materials for the hair
                    color manufacturer. Our technical staff is well versed in
                    all phases of the hair color formulator’s requirements.
                    <br />
                  </p>
                  <p className='text-xl mt-2 font-medium text-gray-200'>
                    <Link href='/hair'>
                      {' '}
                      <span className=' text-transparent font-semibold bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                        Learn more
                      </span>{' '}
                    </Link>
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
                <motion.div
                  className='box'
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Link href='/hair'>
                    <Image
                      className='max-w-full rounded-xl mx-auto md:max-w-none h-auto'
                      src={FeatImage02}
                      width={540}
                      height={405}
                      alt='Fur Model'
                      style={{ pointerEvents: 'none' }}
                    />
                  </Link>
                </motion.div>
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-left'
              >
                <div className='md:pl-4 lg:pl-12 xl:pl-16'>
                  <h3 className='h3  font-semibold mb-2'>
                    <span className='text-emerald-300'>FUR</span> COLOR
                  </h3>
                  <p className='text-xl font-medium text-gray-200'>
                    With over 100 years of experience in the chemistry of fur
                    dyeing and processing, JHL is the world leader in fur
                    technology.{' '}
                  </p>
                  <p className='text-xl mt-2 font-medium '>
                    <Link href='/fur'>
                      {' '}
                      <span className='text-transparent bg-clip-text font-semibold  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                        Learn more
                      </span>{' '}
                    </Link>
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
                <motion.div
                  className='box'
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Link href='/hair'>
                    <Image
                      className='max-w-full rounded-xl mx-auto md:max-w-none h-auto'
                      src={FeatImage03}
                      width={540}
                      height={405}
                      alt='Leather Model'
                      style={{ pointerEvents: 'none' }}
                    />
                  </Link>
                </motion.div>
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-right'
              >
                <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                  <h3 className='h3 font-semibold mb-2'>
                    <span className='text-violet-300'>LEATHER</span> COLOR
                  </h3>
                  <p className='text-xl font-medium text-gray-200'>
                    JHL supplies a complete range of chemicals and dyes from the
                    wet blue to finishing stage.{' '}
                  </p>
                  <p className='text-xl mt-2 font-medium'>
                    <Link href='/leather'>
                      {' '}
                      <span className='text-transparent bg-clip-text font-semibold  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                        Learn more
                      </span>{' '}
                    </Link>
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
