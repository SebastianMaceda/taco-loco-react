import React from 'react'
import { ContactFormData } from '../Components/ContactSection/data.contact'
import ContactSection from '../Components/ContactSection/index.contact'
import { ContactHeroSection } from '../Components/HeroSection/data.herosection'
import HeroSection from '../Components/HeroSection/index.herosection'

const Contact = () => {
    return (
        <>
            <HeroSection {...ContactHeroSection}/>
            <ContactSection {...ContactFormData}/>
        </>
    )
}

export default Contact
