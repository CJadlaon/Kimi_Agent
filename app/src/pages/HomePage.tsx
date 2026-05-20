import { Hero } from '@/sections/Hero'
import { SelectedProjects } from '@/sections/SelectedProjects'
import { Studio } from '@/sections/Studio'
import { Services } from '@/sections/Services'
import { Recognition } from '@/sections/Recognition'
import { Footer } from '@/sections/Footer'

export function HomePage() {
  return (
    <main>
      <Hero />
      <SelectedProjects />
      <Studio />
      <Services />
      <Recognition />
      <Footer />
    </main>
  )
}
