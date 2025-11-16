import React from 'react'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Alert from '../src/components/Alert'
import Navpic from '../src/components/Navpic'
import Had from '../src/components/had'
import Cards from '../src/components/Crards'
import FeaturesGrid from '../src/components/FeaturesGrid'
import MarAbout from '../src/components/MarAbout'
import StatsSection from '../src/components/StatsSection'
import UpcomingEvents from '../src/components/UpcomingEvents'
import AffiliateSubscribe from '../src/components/AffiliateSubscribe'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Alert />
      <Navpic />
      <Had />
      <Cards />
      <FeaturesGrid />
      <MarAbout />
      <StatsSection />
      <UpcomingEvents />
      <AffiliateSubscribe />
      <Footer />
    </div>
  )
}
