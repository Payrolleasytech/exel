import React from 'react'
import { HeroSection } from './Hero.about'
import OurStory from './OurStory'
import { ValuesSection } from './OurCoreValues'
import ExpertiseThatDeliversResult from './ExpertiseThatDeliversResult'
import OurMission from './OurMission'
import TheExelDifference from './TheExelDifference'
import ReadyToExperience from './ReadyToExperience'

export default function AboutPage() {
  return (
    <section className={`my-20`}>
      <HeroSection />
      <OurStory />
      <ValuesSection />
      <ExpertiseThatDeliversResult />
      <OurMission />
      <TheExelDifference />
      <ReadyToExperience />
    </section>
  )
}
