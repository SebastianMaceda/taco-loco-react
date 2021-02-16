import React from 'react'
import { openHoursData } from './data.location'
import { LocationSectionContainer, LocationHoursContainer, LocationHeader, LocationAddressContainer ,LocationAddress, HoursContainer, OpenHoursHeader, OpenHoursContainer, HoursDate, Hours, Date, LocationGoogleMapsContainer, GoogleMapsIframe } from "./elements.location";
const LocationSection = ({src, locationHeader, locationHeaderAddress, locationHeaderCity, locationHeaderPhone, openHoursHeader, reverseThing}) => {
    return (
        <LocationSectionContainer flexFlip={reverseThing}>
            <LocationHoursContainer>
                <LocationAddressContainer>
                    <LocationHeader>{locationHeader}</LocationHeader>
                    <LocationAddress>{locationHeaderAddress}<br/>{locationHeaderCity}<br/>{locationHeaderPhone}</LocationAddress>
                </LocationAddressContainer>
                <HoursContainer>
                    <OpenHoursHeader>{openHoursHeader}</OpenHoursHeader>
                    <OpenHoursContainer>
                        {openHoursData.map(index => {
                            return (
                                <HoursDate key={index}>
                                    <Date>{index.date}</Date>
                                    <Hours>{index.hours}</Hours>
                                </HoursDate>
                            )
                        })}
                    </OpenHoursContainer>
                </HoursContainer>
            </LocationHoursContainer>
            <LocationGoogleMapsContainer>
                <GoogleMapsIframe src={src}></GoogleMapsIframe>
            </LocationGoogleMapsContainer>
        </LocationSectionContainer>
    )
}

export default LocationSection
