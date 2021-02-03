import React from 'react'
import { HomeHeroSection } from '../Components/HeroSection/data.herosection'
import HeroSection from '../Components/HeroSection/index.herosection'

const Home = () => {
    return (
        <>
         <HeroSection {...HomeHeroSection}/>   
        </>
    )
}

export default Home