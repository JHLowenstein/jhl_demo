export default function CtaContact() {
  return (
    <section className='my-40'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* CTA box */}
        <div className=' py-10 px-8 md:py-16 md:px-12'>
          <div className='flex flex-col lg:flex-row justify-between items-center'>
            {/* CTA content */}
            <div className='mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-3/4'>
              <h3 className='h3 text-gray-200 font-semibold mb-2'>
                Talk to our{' '}
                <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                  Expert Staff
                </span>{' '}
              </h3>
              <p className='text-gray-200 text-xl'>
                Drop us a line and we will get to you promptly
              </p>
            </div>

            {/* Animated star */}

            {/* CTA button */}
            <div className='w-full lg:w-1/4 flex justify-center lg:justify-end'>
              <a
                className='btn rounded-md text-white font-semibold bg-violet-400 hover:bg-white shadow hover:text-violet-400 hover:border-violet-300'
                href='tel:+17183885410'
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
