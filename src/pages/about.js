import React from 'react'
import { AboutPageData } from '../Components/AboutSection/data.aboutsection'
import AboutSection from '../Components/AboutSection/index.aboutsection'
import { AboutHeroSection } from '../Components/HeroSection/data.herosection'
import HeroSection from '../Components/HeroSection/index.herosection'
import { LocationSectionData, LocationSectionDataFlip } from '../Components/LocationSection/data.location'
import LocationSection from '../Components/LocationSection/index.location'
import { ReviewElementsData } from '../Components/Reviews/data.reviews'
import Reviews from '../Components/Reviews/index.reviews'

const AboutPage = () => {
    return (
        <>
            <HeroSection {...AboutHeroSection}/>
            <LocationSection {...LocationSectionData} {...LocationSectionDataFlip}/>
            <AboutSection {...AboutPageData} />
            <Reviews {...ReviewElementsData} />
        </>
    )
}

export default AboutPage
