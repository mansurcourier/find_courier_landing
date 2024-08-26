import React from 'react'
import {
  Calculator,
  Carousel,
  CourierAdvantages,
  DownloadApp,
  FirstSection,
  SenderAdvantages
} from 'components/mainPage'

const Home = () => (
  <>
    <FirstSection />
    <Carousel />
    <Calculator />
    <SenderAdvantages />
    <CourierAdvantages />
    <DownloadApp />
  </>
)

export default Home
