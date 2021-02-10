import React from 'react'
import { Container, Logo, Header, SiteMap, SiteMapListItem, SiteMapLink, LocationDetails, LocationDetailsText, OpenHoursDetails } from "./elements.footer";
import { FooterDataLinks, FooterDataLocation } from "./data.footer";

const FooterSection = () => {
    return (
        <Container>
            <Logo>Taco Loco</Logo>
            <SiteMap>
                <Header>Site Map</Header>
                {FooterDataLinks.map((index, indivLink) => {
                    return (
                        <SiteMapListItem>
                            <SiteMapLink key={indivLink} >{index.link}</SiteMapLink>
                        </SiteMapListItem>
                    )
                })}
            </SiteMap>
            <LocationDetails>
                {FooterDataLocation.map(index => {
                    return (
                        <LocationDetailsText key={index} >{index.locationAddress}</LocationDetailsText>
                    )
                })}
            </LocationDetails>
            <OpenHoursDetails>

            </OpenHoursDetails>
        </Container>
    )
}

export default FooterSection
