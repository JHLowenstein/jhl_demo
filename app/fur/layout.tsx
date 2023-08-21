'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import '@/app/css/style.css'
import FurHeader from '@/components/ui/furHeader'
import Footer from '@/components/ui/footer'

export default function HairLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <FurHeader />
      <main className='grow'>{children}</main>
      <Footer />
    </>
  )
}
