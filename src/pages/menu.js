import React from 'react'
import { MenuHeroSection } from '../Components/HeroSection/data.herosection'
import HeroSection from '../Components/HeroSection/index.herosection'
import MenuSection from '../Components/MenuSection/index.menu'

const MenuPage = () => {
    return (
        <>
            <HeroSection {...MenuHeroSection}/>
            <MenuSection />
        </>
    )
}

export default MenuPage
