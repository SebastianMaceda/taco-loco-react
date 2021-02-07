import React from 'react'
import { HeroContainer, HeroOverlay, HeroTextContainer, HeroLogo, HeroSubtext, HeroBtnContainer, HeroBtnOne, HeroBtnTwo, BottomTextContainer, BottomText, Icon, BottomTextArea, SmallLine } from "./herosection.elements";

const HeroSection = ({heroLogo, heroSubtext, heroBtnOne, heroBtnTwo, iconOne, iconTwo, bottomTextOne, bottomTextTwo}) => {
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
                <BottomTextContainer>
                    <BottomText helloWorld={true}>
                        <Icon>{iconOne}</Icon>
                        <SmallLine/>
                        <BottomTextArea>{bottomTextOne}</BottomTextArea>
                    </BottomText>
                    <BottomText helloWorld={false}>
                        <Icon>{iconTwo}</Icon>
                        <SmallLine/>
                        <BottomTextArea>{bottomTextTwo}</BottomTextArea>
                    </BottomText>
                </BottomTextContainer>
            </HeroOverlay>
        </HeroContainer>
    )
}

export default HeroSection;
