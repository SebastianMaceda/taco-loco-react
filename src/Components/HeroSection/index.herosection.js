import React from 'react'
import { HeroContainer, HeroOverlay, HeroTextContainer, HeroLogo, HeroSubtext, HeroBtnContainer, HeroBtnOne, HeroBtnTwo } from "./herosection.elements";

const HeroSection = ({heroLogo, heroSubtext, heroBtnOne, heroBtnTwo}) => {
    return (
        <HeroContainer>
            <HeroOverlay>
                <HeroTextContainer>
                    <HeroLogo>{heroLogo}</HeroLogo>
                    <HeroSubtext>{heroSubtext}</HeroSubtext>
                    <HeroBtnContainer>
                        <HeroBtnOne>{heroBtnOne}</HeroBtnOne>
                        <HeroBtnTwo>{heroBtnTwo}</HeroBtnTwo>
                    </HeroBtnContainer>
                </HeroTextContainer>
            </HeroOverlay>
        </HeroContainer>
    )
}

export default HeroSection
