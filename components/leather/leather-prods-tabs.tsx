'use client'

import { useRef, useState, useEffect } from 'react'

import Image from 'next/image'
import { Transition } from '@headlessui/react'
import Chemistry from '@/public/images/chemistry.png'
import HeroImage01 from '@/public/images/hero-image-01.jpg'

export default function Tabs() {
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className=' my-40 md:my-20 md:pt-40  '>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12' data-aos-id-tabs>
            <h2
              className='h2 mb-4'
              data-aos='fade-up'
              data-aos-anchor='[data-aos-id-tabs]'
            >
              <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                BRIGHT BOLD UNIQUE
              </span>{' '}
              <br />
              <span className=''>LEATHER PRODUCTS</span>
            </h2>
          </div>

          {/* Section content */}
          <div>
            {/* Tabs buttons */}
            <div
              className='flex flex-wrap justify-center -m-2'
              data-aos='fade-up'
              data-aos-delay='400'
              data-aos-anchor='[data-aos-id-tabs]'
            >
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${
                  tab !== 1 && 'opacity-50'
                }`}
                onClick={() => setTab(1)}
              >
                <span className='text-pink-300 group-hover:text-pink-400 transition-colors duration-150 ease-in-out'>
                  Lowatan Retanning Agents, Syntans, & Auxiliaries
                </span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${
                  tab !== 2 && 'opacity-50'
                }`}
                onClick={() => setTab(2)}
              >
                <span className='text-emerald-300 group-hover:text-emerald-400 transition-colors duration-150 ease-in-out'>
                  Lowenol Fatliquors
                </span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${
                  tab !== 3 && 'opacity-50'
                }`}
                onClick={() => setTab(3)}
              >
                <span className='text-violet-400 group-hover:text-violet-200 transition-colors duration-150 ease-in-out'>
                  Lowapel Dyes
                </span>
              </button>
            </div>

            {/* Tabs items */}
            <div className='transition-all'>
              <div
                className='relative flex flex-col mt-16'
                data-aos='fade-up'
                ref={tabs}
              >
                {/*  Lowatan Retanning Agents, Syntans, & Auxiliaries*/}
                <Transition
                  show={tab === 1}
                  className='w-full'
                  enter='transition ease-in-out duration-500 transform order-first'
                  enterFrom='opacity-0 scale-98'
                  enterTo='opacity-100 scale-100'
                  leave='transition ease-out duration-300 transform absolute'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-98'
                  beforeEnter={() => heightFix()}
                >
                  <article className='relative max-w-md mx-auto md:max-w-none'>
                    <figure className='md:absolute md:inset-y-0 md:right-0 md:w-1/2'>
                      <Image
                        className='w-full  object-cover'
                        src={Chemistry}
                        width={516}
                        height={387}
                        alt='color chemistry'
                        style={{ pointerEvents: 'none' }}
                      />
                    </figure>
                    <div className='relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl'>
                      <h3 className='h3 '>Lowenol Fatliquors</h3>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL AMO:
                        </span>{' '}
                        <span className='font-semibold '>
                          alkaline based neatsfoot
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL BMO:
                        </span>{' '}
                        <span className='font-semibold '>
                          bisulfited marine oil - highly concentrated
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL BSN:
                        </span>{' '}
                        <span className='font-semibold '>
                          non-yellowing, non-oxydizing oil for whites
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL DMS:
                        </span>{' '}
                        <span className='font-semibold '>
                          sulphated/sulphited marine oil
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL EML:
                        </span>{' '}
                        <span className='font-semibold '>
                          general use synthetic oil
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL NZB:
                        </span>{' '}
                        <span className='font-semibold '>sulfated lanolin</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL WP:
                        </span>{' '}
                        <span className='font-semibold '>
                          waterproofing fatliquor
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL SO-67:
                        </span>{' '}
                        <span className='font-semibold '>
                          synthetic neatsfoot solvent fatliquor
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL CAT:
                        </span>{' '}
                        <span className='font-semibold '>
                          cationic topping oil
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL GHB:
                        </span>{' '}
                        <span className='font-semibold '>
                          natural and synthetic oil
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL SOFT MSW:
                        </span>{' '}
                        <span className='font-semibold '>
                          sulfated oil for very soft leathers
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL TRS:
                        </span>{' '}
                        <span className='font-semibold '>
                          synthetic & natural sulphited/sulphated oil
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL BMD:
                        </span>{' '}
                        <span className='font-semibold '>
                          cationic wax and paraffins
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL BKD:
                        </span>{' '}
                        <span className='font-semibold '>
                          cationic stuffing wax for pull-up
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL LFC:
                        </span>{' '}
                        <span className='font-semibold '>
                          high-quality, low-fog fatliquor
                        </span>
                      </p>
                    </div>
                  </article>
                </Transition>

                {/* Lowenol Fatliquors */}
                <Transition
                  show={tab === 2}
                  className='w-full'
                  enter='transition ease-in-out duration-500 transform order-first'
                  enterFrom='opacity-0 scale-98'
                  enterTo='opacity-100 scale-100'
                  leave='transition ease-out duration-300 transform absolute'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-98'
                  beforeEnter={() => heightFix()}
                >
                  <article className='relative max-w-md mx-auto md:max-w-none'>
                    <figure className='md:absolute md:inset-y-0 md:left-0 md:w-1/2'>
                      <Image
                        className='w-full h-full object-cover '
                        src={Chemistry}
                        width={516}
                        height={387}
                        alt='color chemistry'
                        style={{ pointerEvents: 'none' }}
                      />
                    </figure>
                    <div className='relative bg-gray-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto'>
                      <h3 className='h3 mb-5'>Bleaching Products</h3>
                      <p className='text-snow-400  mb-3'>
                        <span className='font-bold text-emerald-400'>
                          BLEACHING CREAM:
                        </span>{' '}
                        <span className='font-semibold '>
                          Persulfates based anhydrous high lift bleaching
                          system.
                        </span>
                      </p>
                      <p className='text-snow-400  mb-3'>
                        <span className='font-bold text-emerald-400'>
                          BLEACHING COLORS:
                        </span>{' '}
                        <span className='font-semibold '>
                          One-step bleaching and coloring.
                        </span>
                      </p>
                    </div>
                  </article>
                </Transition>

                {/* Lowapel Dyes */}
                <Transition
                  show={tab === 3}
                  className='w-full'
                  enter='transition ease-in-out duration-500 transform order-first'
                  enterFrom='opacity-0 scale-98'
                  enterTo='opacity-100 scale-100'
                  leave='transition ease-out duration-300 transform absolute'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-98'
                  beforeEnter={() => heightFix()}
                >
                  <article className='relative max-w-md mx-auto md:max-w-none'>
                    <figure className='md:absolute md:inset-y-0 md:right-0 md:w-1/2'>
                      <Image
                        className='w-full h-full object-cover'
                        src={Chemistry}
                        width={516}
                        height={387}
                        alt='color chemistry'
                        style={{ pointerEvents: 'none' }}
                      />
                    </figure>
                    <div className='relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl'>
                      <h3 className='h3'>Lowapel</h3>
                      <p className='text-snow-300  my-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Black JET 160 %</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Black EX-1</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Black JP</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Black Magic</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Black SSb</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Black NT 250%</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown HH 150%</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown NGB</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown BNR</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown MFR</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown CB</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown CR</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown NT</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown NR</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown B2C</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown SSN</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Olive Brown N</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Yellow Brown GS</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Yellow GG</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brilliant Red 2B</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Red R</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Blue BB</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Blue 2RN</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Dark Green NH</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Beige ET</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Grey GLN</span>
                      </p>
                    </div>
                  </article>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
