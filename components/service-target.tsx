'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import Color1897 from '@/public/images/Color1897.png'

export default function Target() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 mb-20'>
        <div className='py-12 md:py-20 '>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
            <h2 className='h2 ' data-aos='fade-up'>
              100+ YEARS IN THE{' '}
              <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300'>
                COLOR
              </span>{' '}
              INDUSTRY
            </h2>
          </div>

          {/* Items */}
          <div className='grid gap-20' data-aos-id-target>
            {/* Item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl'
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-anchor='[data-aos-id-target]'
              >
                <motion.div
                  className='box'
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Link href='/hair'>
                    <Image
                      className='mx-auto rounded-xl md:max-w-none'
                      src={Color1897}
                      width={540}
                      height={520}
                      alt='Features 02'
                    />
                  </Link>
                </motion.div>
              </div>

              {/* Content */}
              <div className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'>
                <div className='md:pl-4 lg:pl-12 xl:pl-16'>
                  <div
                    className='font-bold text-xl text-purple-600 mb-2'
                    data-aos='fade-left'
                    data-aos-anchor='[data-aos-id-target]'
                  >
                    <h3 className='h3 text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '></h3>{' '}
                  </div>
                  <div
                    className='mt-6'
                    data-aos='fade-left'
                    data-aos-delay='200'
                    data-aos-anchor='[data-aos-id-target]'
                  >
                    <h4 className='h4  font-semibold mb-2'>
                      A Tradition of Excellence{' '}
                    </h4>
                    <p className='text-xl font-medium text-gray-200'>
                      <span className='text-pink-300'>Since 1897</span>, Jos. H.
                      Lowenstein & Sons, Inc. has been providing the world of
                      fashion with brilliant, trend-setting colors for the fur,
                      hair and leather industries all over the world. JHL has
                      prided itself on providing its customers with
                      state-of-the-art dye products and impeccable, personalized
                      service.{' '}
                    </p>
                    <p className='text-xl font-medium mt-3'>
                      {' '}
                      <Link href='/company'>
                        {' '}
                        <span className='text-transparent font-semibold bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
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
      </div>
    </section>
  )
}
