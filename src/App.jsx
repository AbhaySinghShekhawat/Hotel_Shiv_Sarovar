import React from 'react'
import { ReactLenis } from "lenis/react";
import Header from './Components/Header'
import Footer from './Components/Footer'
import Hero from './Pages/Hero'
import About from './Pages/About';
import Rooms from './Pages/Rooms'
import Locations from './Pages/Locations';
import InAround from './Pages/InAround'
import StayBox from './Pages/StayBox';

export default function App() {
  return (
    <ReactLenis root>
      <Header />
      <Hero />
      <About />
      <Rooms />
      <Locations />
      <InAround />
      <StayBox />
      <Footer />
    </ReactLenis>
  )
}
