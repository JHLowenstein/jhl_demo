import Image from 'next/image'
import Link from 'next/link'
import TargetImage from '@/public/images/hm.png'

export default function CardMain() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 mb-40'>
        <div className='py-6 md:py-6'>
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
                <Image
                  className='mx-auto rounded-xl md:max-w-none'
                  src={TargetImage}
                  width={540}
                  height={520}
                  alt='Features 02'
                />
              </div>

              {/* Content */}
              <div className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'>
                <div className='md:pl-4 lg:pl-12 xl:pl-16'>
                  <div
                    className='font-bold text-xl text-purple-600 mb-2'
                    data-aos='fade-left'
                    data-aos-anchor='[data-aos-id-target]'
                  >
                    <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                      BRIGHT BOLD BEAUTIFUL
                    </span>{' '}
                  </div>
                  <div
                    className='my-6'
                    data-aos='fade-left'
                    data-aos-delay='200'
                    data-aos-anchor='[data-aos-id-target]'
                  >
                    <h5 className='h5 text-lg font-semibold mb-2'>
                      <span className='text-pink-300'>DYE INTERMEDIATES</span>
                    </h5>
                    <p className='text-lg text-gray-400'>
                      For permanent hair color are available, along with
                      specially formulated bases and developers. The base
                      materials for cream and liquid formulations are designed
                      for maximum color deposition along with superior
                      conditioning. Dyestuff and base materials are also
                      available for semi-permanent and specialty systems.
                    </p>
                  </div>
                  <div
                    className='mb-6'
                    data-aos='fade-left'
                    data-aos-delay='400'
                    data-aos-anchor='[data-aos-id-target]'
                  >
                    <h5 className='h5 text-lg font-semibold mb-2'>
                      <span className='text-emerald-300'>Raw Materials</span>
                    </h5>
                    <p className='text-lg text-gray-400'>
                      JHL provides a complete line of raw materials for the hair
                      color manufacturer. Our technical staff is well versed in
                      all phases of the hair color formulator’s requirements.
                    </p>
                  </div>
                  <div
                    className='mb-6'
                    data-aos='fade-left'
                    data-aos-delay='600'
                    data-aos-anchor='[data-aos-id-target]'
                  >
                    <h5 className='h5 text-lg font-semibold mb-2'>
                      <span className='text-violet-300'>Technical Staff</span>
                    </h5>
                    <p className='text-lg text-gray-400'></p>
                    <div data-aos='fade-up' data-aos-delay='400'>
                      {/* <a
                        className='mt-5 btn text-lg text-white font-semibold bg-violet-300 rounded-xl hover:bg-violet-400 w-full mb-10 sm:w-auto '
                        href='/hair'
                      >
                        Services
                      </a> */}
                    </div>
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
