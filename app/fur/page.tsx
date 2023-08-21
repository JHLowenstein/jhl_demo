export const metadata = {
  title: 'Features - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/fur/hero-fur'
import FurZigZag from '@/components/fur/furZigZag'
import Connect from '@/components/cta'

export default function Fur() {
  return (
    <section>
      <Hero />
      <FurZigZag />
      <Connect />
    </section>
  )
}
