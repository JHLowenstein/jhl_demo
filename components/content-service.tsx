import Image from 'next/image'

import Service from '@/public/images/ladyHex.png'
import Chemist from '@/public/images/gtt.png'
import Support from '@/public/images/lab.png'
import React from 'react'

export default function Content() {
  return (
    <section>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 relative'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='py-5 md:py-20'>
            <div className='text-center mx-auto max-w-4xl pb-12 md:pb-16 '></div>
            {/* Section header */}
            <div className='max-w-4xl mx-auto  pb-12 md:pb-16 text-center'>
              {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
              <h2 className='h2' data-aos='fade-up' data-aos-delay='200'>
                Our technical staff is well versed in all phases of the{' '}
                <span className='text-transparent bg-clip-text  bg-gradient-to-r from-rose-600 via-amber-400 to-blue-700 '>
                  Hair Color Formulator’s
                </span>{' '}
                requirements.
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
                  <Image
                    className='max-w-full mx-auto md:max-w-none h-auto'
                    src={Service}
                    width={340}
                    height={205}
                    alt='Services 01'
                  />
                </div>
                {/* Content */}
                <div
                  className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                  data-aos='fade-right'
                >
                  <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                    <h3 className='h3 mb-3 cursor-default text-snow-300'>
                      Service, Quality and Value
                    </h3>
                    <p className='text-snow-400 mb-4 font-bold text-xl'>
                      <span className='text-rose-500'>
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
                      products to market sooner and gain the competitive edge
                      you need to compete in today’s fast-paced environment.
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
                    className='max-w-full mx-auto md:max-w-none h-auto'
                    src={Chemist}
                    width={140}
                    height={55}
                    alt='Service 02'
                  />
                </div>
                {/* Content */}
                <div
                  className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                  data-aos='fade-left'
                >
                  <div className='md:pl-4 lg:pl-12 xl:pl-16'>
                    <h3 className='h3 mb-3 text-snow-300'>
                      Leading Edge Color Technology
                    </h3>
                    <p className='text-snow-400 mb-4 font-bold text-xl'>
                      <span className='text-rose-500'>
                        OUR EXPERT CHEMISTS AND TECHNICAL STAFF,
                      </span>{' '}
                      from around the world, respond quickly and accurately to
                      provide formulation assistance, new color development,
                      consultation, product line enhancement or help in solving
                      complex dyeing issues for special applications. We’ll work
                      with you every step of the way, from color development
                      through product and delivery to ensure the ultimate in
                      product integrity and customer satisfaction. Our
                      laboratory facilities are available to you and your staff
                      to test formulations or to work out a full pilot program.
                      No matter what the situation, we are totally prepared to
                      tailor solutions to our customers’ individual needs.
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
                    className='max-w-full mx-auto md:max-w-none h-auto rounded-xl'
                    src={Support}
                    width={440}
                    height={205}
                    alt='Features 03'
                  />
                </div>
                {/* Content */}
                <div
                  className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                  data-aos='fade-right'
                >
                  <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                    <h3 className='h3 mb-3'>
                      Specialized Services For Hair Formulators
                    </h3>
                    <p className='text-snow-400 mb-4 font-bold text-xl'>
                      <span className='text-rose-500'>
                        IN ADDITION TO THE COMPREHENSIVE SERVICE AND SUPPORT
                      </span>{' '}
                      provided to our customers, JHL hair color specialists and
                      formulators also provide valuable insights into navigating
                      rigorous regulatory issues, custom dye synthesis, and
                      proprietary color formulation collaborations exclusively
                      for your company.
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
