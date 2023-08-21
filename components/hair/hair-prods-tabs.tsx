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
              <span className=''>HAIR PRODUCTS</span>
            </h2>
            {/* <p
              className='text-xl text-gray-400'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-anchor='[data-aos-id-tabs]'
            >
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit laborum — semper quis lectus nulla.
            </p> */}
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
                  Lowenol Surfactants
                </span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${
                  tab !== 2 && 'opacity-50'
                }`}
                onClick={() => setTab(2)}
              >
                <span className='text-emerald-300 group-hover:text-emerald-400 transition-colors duration-150 ease-in-out'>
                  Bleaching Products
                </span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${
                  tab !== 3 && 'opacity-50'
                }`}
                onClick={() => setTab(3)}
              >
                <span className='text-violet-400 group-hover:text-violet-200 transition-colors duration-150 ease-in-out'>
                  Stabilizing / Chelating Agents
                </span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${
                  tab !== 4 && 'opacity-50'
                }`}
                onClick={() => setTab(4)}
              >
                <span className='text-sky-300 group-hover:text-sky-400 transition-colors duration-150 ease-in-out'>
                  Protein Derivatives / Conditioner
                </span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${
                  tab !== 5 && 'opacity-50'
                }`}
                onClick={() => setTab(5)}
              >
                <span className='text-amber-300 group-hover:text-amber-400 transition-colors duration-150 ease-in-out'>
                  Colors
                </span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${
                  tab !== 6 && 'opacity-50'
                }`}
                onClick={() => setTab(6)}
              >
                <span className='text-pink-300 group-hover:text-pink-400 transition-colors duration-150 ease-in-out'>
                  Shining Colors
                </span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${
                  tab !== 7 && 'opacity-50'
                }`}
                onClick={() => setTab(7)}
              >
                <span className='text-emerald-300 group-hover:text-emerald-700 transition-colors duration-150 ease-in-out'>
                  Viscosity Builders
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
                {/* Lowenol Surfactants*/}
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
                      <h3 className='h3 mb-5'>Lowenol Surfactants</h3>
                      <p className='text-snow-300  my-3'>
                        <span className='font-bold text-pink-400'>
                          LOWENOL C-9685:
                        </span>{' '}
                        <span className='font-semibold '>
                          Nonionic foam stabilizing/dispersing agent/viscosity
                          controlling agent for shampoos and hair colors.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-pink-400'>
                          LOWENOL S-216X:
                        </span>{' '}
                        <span className='font-semibold '>
                          Mildly cationic dye leveling and viscosity controlling
                          agent for oxidation hair color systems (soya based).
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-pink-400'>
                          LOWENOL 1985A, LOWENOL 1985B, LOWENOL T-163, LOWENOL
                          T-163A:
                        </span>{' '}
                        <span className='font-semibold '>
                          Weakly cationic surfactant for semi-permanent hair
                          color systems.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-pink-400'>
                          LOWENOL 6559:
                        </span>{' '}
                        <span className='font-semibold '>
                          Nonionic emulsifying agent used to prepare high,
                          medium, and low-viscosity cream developers and as a
                          base for various hair-care creams.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-pink-400'>
                          LOWENOL COPOLYMER 725:
                        </span>{' '}
                        <span className='font-semibold '>
                          Cationic polyquaternium surfactant used in
                          semi-permanent liquid hair color system.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-pink-400'>
                          LOWENOL COPOLYMER 1097:
                        </span>{' '}
                        <span className='font-semibold '>
                          Cationic polyquarternium surfactant used in
                          semi-permanent cream hair color system.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-pink-400'>
                          LOWENOL EMULSION 80:
                        </span>{' '}
                        <span className='font-semibold '>
                          Emulsifying agent/opacifying agent for cream oxidation
                          hair color system.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-pink-400'>
                          LOWENOL T-163:
                        </span>{' '}
                        <span className='font-semibold '>
                          Weak cationic surfactant for semi-permanent hair color
                          system.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-pink-400'>
                          LOWENOL SOLVENT 4996:
                        </span>{' '}
                        <span className='font-semibold '>
                          Nonionic solvent system specially designed for
                          semi-permanent hair color system.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-pink-400'>
                          LOWENOL EMULSION LAO:
                        </span>{' '}
                        <span className='font-semibold '>
                          Emulsifying agent that masks Ammonia malodor with
                          consistency ideal for professional market.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-pink-400'>
                          LOWENOL EMULSION LAO-NT:
                        </span>{' '}
                        <span className='font-semibold '>
                          Emulsifying agent that masks Ammonia malodor with
                          consistency ideal for retail market.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-pink-400'>
                          LOWENOL EMULSION PEARLESCENT:
                        </span>{' '}
                        <span className='font-semibold '>
                          Emulsifying agent that gives finished cream hair color
                          and cream developer pearlescent appearance.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-pink-400'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      {/* <a
                        className='btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6'
                        href='#0'
                      >
                        <span className='text-sm'>Learn more</span>
                        <svg
                          className='w-3 h-3 fill-current text-purple-400 shrink-0 ml-2'
                          viewBox='0 0 12 12'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M6 5H0v2h6v4l6-5-6-5z' />
                        </svg>
                      </a> */}
                    </div>
                  </article>
                </Transition>

                {/* Bleaching Products */}
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

                {/* Item 3 */}
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
                      <h3 className='h3 mb-5'>Stabilizing/ Cheating Agents</h3>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-400'>
                          KELENES:
                        </span>{' '}
                        <span className='font-semibold '>
                          Amino acid based chelating agents for use in cosmetic
                          products (shampoos, bleaches, coloring, lotions,
                          creams).
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-400'>
                          LOWENOL STABILIZER L-536:
                        </span>{' '}
                        <span className='font-semibold '>
                          Color additive used in hair color system to prevent
                          undesirable surface oxidation, used mainly in light
                          shades.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-400'>
                          LOWENOL STABILIZER D-552:
                        </span>{' '}
                        <span className='font-semibold '>
                          Color additive used in hair color system to prevent
                          undesirable surface oxidation, used mainly in dark
                          shades.
                        </span>
                      </p>
                    </div>
                  </article>
                </Transition>

                {/* Item 4 */}
                <Transition
                  show={tab === 4}
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
                        className='w-full h-full object-cover'
                        src={Chemistry}
                        width={516}
                        height={387}
                        alt='color chemistry'
                        style={{ pointerEvents: 'none' }}
                      />
                    </figure>
                    <div className='relative bg-gray-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto'>
                      <h3 className='h3 mb-5'>
                        Protein Derivatives/ Conditioners
                      </h3>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-sky-400'>
                          LOWENOL HWP:
                        </span>{' '}
                        <span className='font-semibold '>
                          Hydrolyzed protein (liquid) for shampoo and hair color
                          systems.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-sky-400'>
                          LOWENOL CONDITIONER PWW:
                        </span>{' '}
                        <span className='font-semibold '>
                          Conditioning agent for hair color systems.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-sky-400'>
                          LOWENOL COPOLYMER 725:
                        </span>{' '}
                        <span className='font-semibold '>
                          Cationic polyquaternium conditioning agent, and
                          viscosity builder for semi-permanent liquid hair color
                          system.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-sky-400'>
                          LOWENOL COPOLYMER 1097:
                        </span>{' '}
                        <span className='font-semibold '>
                          Cationic polyquaternium conditioning agent, and
                          viscosity builder for semi-permanent cream hair color
                          system.
                        </span>
                      </p>
                    </div>
                  </article>
                </Transition>

                {/* Item 5 */}
                <Transition
                  show={tab === 5}
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
                      <h3 className='h3 mb-5'>Colors</h3>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-amber-400'>
                          LOWALANS:
                        </span>{' '}
                        <span className='font-semibold '>
                          Anionic dyes for semi-permanent and temporary color
                          systems.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-amber-400'>
                          LOWACRYLS:
                        </span>{' '}
                        <span className='font-semibold '>
                          Cationic dyes for semi-permanent and temporary color
                          systems.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-amber-400'>
                          LOWADENES:
                        </span>{' '}
                        <span className='font-semibold '>
                          Disperse dyes for semi-permanent and temporary color
                          systems.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-amber-400'>
                          LOWASOLS:
                        </span>{' '}
                        <span className='font-semibold '>
                          Dyes specially designed for semi-permanent and
                          temporary colors.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-amber-400'>
                          FD&C, EXT. D&C, D&C:
                        </span>{' '}
                        <span className='font-semibold '>
                          U.S. certified colors for food, drug and cosmetic
                          applications.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-amber-400'>
                          HC COLORS:
                        </span>{' '}
                        <span className='font-semibold '>
                          Alkyl/hydroxyalkyl substituted aromatics for
                          semi-permanent hair color systems.
                        </span>
                      </p>
                      <h6 className='h6 font-bold mt-3'>
                        Oxidation Hair Colors
                      </h6>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-amber-400'>
                          RODOLS:
                        </span>{' '}
                        <span className='font-semibold '>
                          Intermediates for use in oxidation color systems.
                        </span>
                      </p>
                    </div>
                  </article>
                </Transition>

                {/* Item 6 */}
                <Transition
                  show={tab === 6}
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
                        className='w-full h-full object-cover'
                        src={Chemistry}
                        width={516}
                        height={387}
                        alt='color chemistry'
                        style={{ pointerEvents: 'none' }}
                      />
                    </figure>
                    <div className='relative bg-gray-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto'>
                      <h3 className='h3 mb-5'>Shining Colors</h3>
                      <p className='text-snow-400  mb-3'>
                        <span className='font-bold text-pink-400'>
                          BRIGHT SEMI-PERMANENT CREAM HAIR COLORS
                        </span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                    </div>
                  </article>
                </Transition>

                {/* Item 7 */}
                <Transition
                  show={tab === 7}
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
                      <h3 className='h3 mb-5'>Viscosity Builders</h3>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-emerald-400'>
                          CELLOW 940:
                        </span>{' '}
                        <span className='font-semibold '>
                          Cellulose based polymer for semi-permanent hair colors
                          and shampoos.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-emerald-400'>
                          LOWENOL COPOLYMER 725:
                        </span>{' '}
                        <span className='font-semibold '>
                          Cationic polyquaternium
                          surfactant/viscosity-increasing agent for
                          semi-permanent liquid hair color system.
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-emerald-400'>
                          LOWENOL COPOLYMER 1097:
                        </span>{' '}
                        <span className='font-semibold '>
                          Cationic polyquaternium
                          surfactant/viscosity-increasing agent for
                          semi-permanent liquid cream color system.
                        </span>
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
