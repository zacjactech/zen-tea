import Hero from '@/components/Hero'
import FeaturedCollections from '@/components/FeaturedCollections'
import SeasonalSpecials from '@/components/SeasonalSpecials'
import OurStory from '@/components/OurStory'
import BrewingSteps from '@/components/BrewingSteps'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCollections />
      <SeasonalSpecials />
      <OurStory />
      <BrewingSteps />
    </main>
  )
}