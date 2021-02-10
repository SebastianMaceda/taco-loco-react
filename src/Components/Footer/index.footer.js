import React from 'react'
import { Footer, Container, Logo, Header, ContainerBox ,SiteMapListItem, SiteMapLink, LocationDetailsText, HourDate, BottomContainer, CopyText, Text, TextLink, Credit } from "./elements.footer";
import { FooterDataLinks, FooterDataOpenHours } from "./data.footer";

const FooterSection = ({locationAddress, locationCity, locationPhoneNumber}) => {

    const curDate = new Date();
    const curYear = curDate.getFullYear(); 
    const space = " ";
    
    return (
        <Footer>
            <Container>
                <Logo>Taco Loco</Logo>
                <ContainerBox>
                    <Header>Site Map</Header>
                    {FooterDataLinks.map((index, indivLink) => {
                        return (
                            <SiteMapListItem>
                                <SiteMapLink key={indivLink} >{index.link}</SiteMapLink>
                            </SiteMapListItem>
                        )
                    })}
                </ContainerBox>
                <ContainerBox paddingTop={true}>
                    <Header>Location</Header>
                    <LocationDetailsText >
                        {locationAddress} <br/>
                        {locationCity} <br/>
                        {locationPhoneNumber}
                    </LocationDetailsText>
                </ContainerBox>
                <ContainerBox paddingTop={true}>
                    <Header>Open Hours</Header>
                    {FooterDataOpenHours.map(index => {
                        return (
                            <>
                                <HourDate textBold={true} darkText={false}>{index.openDate}</HourDate>
                                <HourDate textBold={false}  darkText={true}>{index.openHour}</HourDate>
                            </>
                        )
                    })}
                </ContainerBox>
            </Container>
            <BottomContainer>
                    <CopyText>
                        <Text alignRight={false} marginRight={false}>© {curYear} Taco Loco. All Rights Reserved.</Text>
                    </CopyText>
                    <Credit>
                        <Text alignRight={true} marginRight={true}>Made By</Text>
                        <TextLink href="https://smaceda.com">smaceda.com</TextLink>
                    </Credit>
            </BottomContainer>
        </Footer>
    )
}

export default FooterSection
