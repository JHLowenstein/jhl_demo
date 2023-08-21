export const metadata = {
  title:
    'Leather Services - Jos. H. Lowenstein & Sons - Hair Products, Fur Products & Leather Products - Dye Products and Dyestuff - JHL',
  keywords:
    'Leather Products, Leather Services, 10-minute demipermanent color, 10-minute demi-permanent color, Acid Dye, Bleach Composition for Wig Hair, Bleaching Color, Chelating Agent, Color Styling Gel, Conditioner, Conditioning Agents, Demipermanent Hair Dye, Demi-permanent Hair Dye, Hair Dye Stabilizer, Hair Color Stabilizer, Hair Dye Developer, Hair Color Developer, Hair Bleach, Hair Bleach Powder, Hair Bleach Cream, Hair Color, Hair Color Base, Hair Color Surfactant, Hair Dye, Lowadene, Lowalan, Lowasol, Permanent Hair Dye, Permanent Hair Color, Permanent Cream Hair Color, Powder Hair Color, Semipermanent Hair Dye, Semipermanent Hair Color, Semi-permanent Hair Color, Semipermanent Cream Hair Color, Semi-permanent Cream Hair Color, Semi-permanent Hair Dye, Shining Color, Snowtop, Snow Top, dyestuff mfr, Joseph H. Lowenstein &amp; Sons Inc., Brooklyn, New York, NY, JHL, ny, new york',
  description:
    'Since 1897, Jos. H. Lowenstein &amp; Sons, Inc. has been providing the world of fashion with brilliant, trend-setting colors for the fur, hair and leather industries all over the world. From a modest paint store in Brooklyn, New York to the technologically driven, quality dyestuff manufacturer we are today, JHL has prided itself on providing its customers with state-of-the-art dye products and impeccable personalized service. April 2003 JHL underwent a formal ISO 9001 audit. We passed with flying colors!',
}

import Hero from '@/components/hero-service'

import SVC1 from '@/components/leather/leather-serv-blocks'
import SVC2 from '@/components/leather/leather-service-zigZag'
import Contact from '@/components/cta-contact'
import Images from '@/components/leather/leather-service-images'

export default function Leather() {
  return (
    <section>
      <Hero />
      <Images />
      <SVC1 />
      <SVC2 />
      <Contact />
    </section>
  )
}
