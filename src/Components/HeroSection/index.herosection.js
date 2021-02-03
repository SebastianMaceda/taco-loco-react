import React from 'react'
import { HeroContainer, HeroOverlay, HeroTextContainer, HeroLogo, HeroSubtext, HeroBtnContainer, HeroBtnOne, HeroBtnTwo } from "./herosection.elements";

const HeroSection = ({img}) => {
    return (
        <HeroContainer src={img}>
            <HeroOverlay>
                <HeroTextContainer>
                    <HeroLogo></HeroLogo>
                    <HeroSubtext></HeroSubtext>
                    <HeroBtnContainer>
                        <HeroBtnOne></HeroBtnOne>
                        <HeroBtnTwo></HeroBtnTwo>
                    </HeroBtnContainer>
                </HeroTextContainer>
            </HeroOverlay>
        </HeroContainer>
    )
}

export default HeroSection
