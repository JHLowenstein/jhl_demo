export const metadata = {
  title:
    'Hair - Jos. H. Lowenstein & Sons - Leather Products, Hair Products & Fur Products - Dye Products and Dyestuff - JHL',
  keywords:
    'Hair products, Fur products, Leather products, Joseph H. Lowenstein &amp; Sons, Leather Fashion, leather, fatliquor, Leather Dye, leather color, leather agents, Leather Tanning, wet blue, leather tannage, Lowanil, Lowapel, lowatan, Lowenol, Fatliquors, Retan, Retanning Agent, Tanning Agent, JHL, Joseph Lowenstein &amp; Sons, Inc., hair products, fur, dye products, dyestuff, tanning leather, dyes benzidine-free, Fur Color, Hair Color, Dye Stuff, Syntans and Auxiliaries, Fur Products, fur, Jos. H. Lowenstein &amp; Sons, Fur Color, acid dyeing, fox, mink, sable, fine furs, Doubleface Dye, Fur Enzymes, fur enzymes agents, Fur Reinforcing, Lowacene, Rodol, leather, Retan, wet blue, Leather Products, JHL, World Leader Fur Technology, hair products, dyeing products, bleaching products, leading supplier to the worlds fur dressers and dyers, Blending &amp; Brush Dyeing, dye products, reinforcing/uptoning in tanning, soaking and degreasing agents, dyestuff, dyes, Hair Color, Hair dyes, color laboratories, enzymes, oil &amp; greases, tanning, retanning auxiliaries, oxidation reinforcing dyes, leather bleaches, finishing chemicals, metallic toners, reinforcing auxiliaries, joseph lowenstein &amp; sons, Brooklyn, New York, NY, JHL, international dyestuff manufacturer, fur dressers, Hair Products, 10-minute demipermanent color, 10-minute demi-permanent color, Acid Dye, Bleach Composition for Wig Hair, Bleaching Color, Chelating Agent, Color Styling Gel, Conditioner, Conditioning Agents, Demipermanent Hair Dye, Demi-permanent Hair Dye, Hair Dye Stabilizer, Hair Color Stabilizer, Hair Dye Developer, Hair Color Developer, Hair Bleach, Hair Bleach Powder, Hair Bleach Cream, Hair Color, Hair Color Base, Hair Color Surfactant, Hair Dye, Lowadene, Lowalan, Lowasol, Permanent Hair Dye, Permanent Hair Color, Permanent Cream Hair Color, Powder Hair Color, Semipermanent Hair Dye, Semipermanent Hair Color, Semi-permanent Hair Color, Semipermanent Cream Hair Color, Semi-permanent Cream Hair Color, Semi-permanent Hair Dye, Shining Color, Snowtop, Snow Top, dyestuff mfr, Joseph H. Lowenstein &amp; Sons Inc., Brooklyn, New York, NY, JHL, ny, new york',
  description:
    'Since 1897, Jos. H. Lowenstein & Sons, Inc. has been providing the world of fashion with brilliant, trend-setting colors for the fur, hair and leather industries all over the world. From a modest paint store in Brooklyn, New York to the technologically driven, quality dyestuff manufacturer we are today, JHL has prided itself on providing its customers with state-of-the-art dye products and impeccable personalized service. April 2003 JHL underwent a formal ISO 9001 audit. We passed with flying colors!',
}

import Hero from '@/components/hair/hero-hair-prod'

import ProdTabs from '@/components/hair/hair-prods-tabs'
import Mosaic from '@/components/hair/hair-prod-mosaic'
import Particles from '@/components/particles'

export default function Hair() {
  return (
    <section>
      <Hero />
      <Mosaic />

      <ProdTabs />
    </section>
  )
}
