import Image from 'next/image'

import David from '@/public/images/davidL.png'
import Steve from '@/public/images/steve.png'

export default function Team() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20 border-t border-gray-800'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
            <h2 className='h2 mb-4'>
              A Tradition of{' '}
              <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                Leadership
              </span>
            </h2>
          </div>

          {/* Team members */}
          <div
            className='sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3'
            data-aos-id-team
          >
            {/* 1st member */}
            <div
              className='sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3'
              data-aos='fade-up'
              data-aos-anchor='[data-aos-id-team]'
            >
              <div className='flex flex-col items-center'>
                <Image
                  className='rounded-xl mb-4'
                  src={David}
                  width={220}
                  height={220}
                  alt='David Lowenstein'
                  style={{ pointerEvents: 'none' }}
                />
                <h4 className='text-xl font-medium mb-1'>David Lowenstein</h4>
                <div className='text-gray-500 mb-1'>President</div>
                {/* <a
                  className='block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out'
                  href='#0'
                >
                  
                </a> */}
              </div>
            </div>

            {/* 2nd member */}
            <div
              className='sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-anchor='[data-aos-id-team]'
            >
              <div className='flex flex-col items-center'>
                <Image
                  className='rounded-xl mb-4'
                  src={Steve}
                  width={220}
                  height={220}
                  alt='Steve Lowenstein'
                  style={{ pointerEvents: 'none' }}
                />
                <h4 className='text-xl font-medium mb-1'>Steve Lowenstein</h4>
                <div className='text-gray-500 mb-1'>Chairman</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
