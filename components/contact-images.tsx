import Image from 'next/image'

import Mosaic02 from '@/public/images/cc4.png'

export default function TeamImages() {
  return (
    <section className='relative -mt-8'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='max-w-3xl mx-auto'>
          <div className='relative w-full h-0 pb-40 mb-40'>
            <figure
              className='relative mx-auto h-auto'
              style={{ width: '78.13%', maxWidth: '500px' }}
              data-aos='fade-down'
              data-aos-delay='100'
            >
              <Image
                src={Mosaic02}
                width='500'
                height='538'
                alt='Team'
                style={{ pointerEvents: 'none' }}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
