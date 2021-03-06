import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: ${({imgStart}) => (imgStart ? 'row' : 'row-reverse')};
`

export const Row1 = styled.div`
    height: 60vh;
    flex: 1;
    background-color: ${({darkBgc}) => (darkBgc ? '#403D39' : '#CCC5B9')};
    @media screen and (max-width: 1100px){
        display: none;
    }
    @media screen and (max-width: 550px) {
        padding: 20px 0 0 0;
    }
`
export const RowImg = styled.img`
    height: 60vh;
    width: 100%;
    object-fit: cover;
    opacity: 90%;
`

export const Row2 = styled.div`
    flex: 1;
    height: 60vh;
    width: 100%;
    background-color: ${({darkBgc}) => (darkBgc ? '#383632' : '#CCC5B9')};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RowTextContainer = styled.div`
    border: ${({darkBorder}) =>  (darkBorder ? '#403D39 1px solid' : '#CCC5B9 1px solid')};
    background-color: ${({darkBgc}) => (darkBgc ? '#403D39' : '#CCC5B9')};
    width: 100%;
    height: 70%;
    position: relative;
    left:  ${({containerAlignment}) => (containerAlignment ? '20%' : '-20%')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1150px) {
        width: 135%;
    }
    @media screen and (max-width: 1100px){
        left: 0;
        width: 90%;
    }
    @media screen and (max-width: 650px){
        width: 100%;
        height: 100%;
        /* background-color: rgba(204, 197, 185, .95); */
    }
`

export const Header = styled.h2`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    text-align: left;
    width: 90%;
    font-family: 'Lato', sans-serif;
    font-size: 32px;
    color: ${({darkHeadText}) => (darkHeadText ? '#252422' : '#F5F5F5')};
    padding-bottom: 10px;

`

export const Text = styled.p`
    flex: 3;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    line-height: 48px;
    width: 90%;
    text-align: left;
    color: ${({darkText}) => (darkText ? '#5E5E5E' : '#CCC5B9')};
    font-size: 24px;
    font-family: 'Lato', sans-serif;
    @media screen and (max-width: 550px) {
        padding: 0 0 20px 0;
    }
` 