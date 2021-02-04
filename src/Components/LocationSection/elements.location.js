import styled from "styled-components";


export const LocationSectionContainer = styled.section`
    /* height: 50vh; */
    width: 100%;
    display: flex;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const LocationHoursContainer = styled.div`
    flex: 1;
    min-height: 50vh;
    background-color: rgba(0, 0, 0, .4);
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
`

export const LocationAddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10%;
    margin: auto;
    background-color: #CCC5B9;
    flex: 1;
    @media screen and (max-width: 768px) {
        padding-top: 20px;
        padding-bottom: 20px;
    }
`

export const LocationHeader = styled.h2`
    font-style: italic;
    font-size: 32px;
    font-weight: 900;
    color: #252422;
`

export const LocationAddress = styled.p`
    font-size: 24px;
    color: #252422;
`

export const HoursContainer = styled.div`
    flex: 2;
    height: 100%;
    width: 100%;
    background-color: #403D39;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10%;
    @media screen and (max-width: 768px) {
        padding-top: 20px;
        padding-bottom: 20px;
    }
`

export const OpenHoursHeader = styled.h2`
    font-size: 32px;
    font-style: italic;
    color: #F5F5F5;
    font-weight: 900;
`

export const OpenHoursContainer = styled.div`
    font-size: 24px;
    width: 90%;
`

export const HoursDate = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    font-weight: 400;
    width: 100%;
`
export const Date = styled.h5`
    font-weight: 400;
    color: #CCC5B9;
    text-align: left;
    padding: 5px 0;
`

export const Hours = styled.h5`
    font-weight: 400;
    color: #CCC5B9;
    text-align: right;
    padding: 5px 0;
    font-style: italic;
`


export const LocationGoogleMapsContainer = styled.div`
    flex: 1;
    min-height: 50vh;
    background-color: #000;
`

export const GoogleMapsIframe = styled.iframe`
    min-height: inherit;
    width: 100%;
    opacity: 90%;
`