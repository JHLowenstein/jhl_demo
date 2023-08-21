export const metadata = {
  title: 'Leather Products - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/leather/hero-leather'
import Zig from '@/components/leather/leatherZigZag'

import Cta from '@/components/cta'

export default function Leather() {
  return (
    <>
      <Hero />
      <Zig />
      <Cta />
    </>
  )
}
