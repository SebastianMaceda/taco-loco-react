import React from 'react'
import { HomeHeroSection } from '../Components/HeroSection/data.herosection'
import HeroSection from '../Components/HeroSection/index.herosection'
import { LocationSectionData } from '../Components/LocationSection/data.location'
import LocationSection from '../Components/LocationSection/index.location'

const Home = () => {
    return (
        <>
         <HeroSection {...HomeHeroSection}/>
         <LocationSection {...LocationSectionData}/>  
        </>
    )
}

export default Home