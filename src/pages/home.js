import React from 'react'
import { AboutSectionData } from '../Components/AboutSection/data.aboutsection'
import AboutSection from '../Components/AboutSection/index.aboutsection'
import { HomeHeroSection } from '../Components/HeroSection/data.herosection'
import HeroSection from '../Components/HeroSection/index.herosection'
import { LocationSectionData } from '../Components/LocationSection/data.location'
import LocationSection from '../Components/LocationSection/index.location'

const Home = () => {
    return (
        <>
         <HeroSection {...HomeHeroSection}/>
         <LocationSection {...LocationSectionData}/>
         <AboutSection {...AboutSectionData}/>
        </>
    )
}

export default Home