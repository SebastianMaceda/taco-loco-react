import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: ${({imgStart}) => (imgStart ? `'column'` : `'column-reverse'`)};
`

export const Row1 = styled.div`
    height: 60vh;
    flex: 1;
    background-color: ${({darkBgc}) => (darkBgc ? '#403D39' : '#CCC5B9')};
`
export const RowImg = styled.img`
    height: 60vh;
    width: 100%;
    object-fit: cover;
    opacity: 70%;
`

export const Row2 = styled.div`
    flex: 1;
    height: 60vh;
    width: 100%;
    background-color: ${({darkBgc}) => (darkBgc ? '#403D39' : '#CCC5B9')};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RowTextContainer = styled.div`
    border: ${({darkBorder}) =>  (darkBorder ? '#403D39 1px solid' : '#CCC5B9 1 solid')};
    background-color: ${({darkBgc}) => (darkBgc ? '#403D39' : '#CCC5B9')};
    width: 90%;
    height: 70%;
    position: relative;
    left: -20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Header = styled.h2`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    width: 90%;
    font-family: 'Lato', sans-serif;
    font-size: 32px;
    color: ${({darkHeadText}) => (darkHeadText ? '#252422' : '#F5F5F5')}

`

export const Text = styled.p`
    flex: 4;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 90%;
    text-align: left;
    color: ${({darkText}) => (darkText ? '#5E5E5E' : '#CCC5B9')};
    font-size: 24px;
    font-family: 'Lato', sans-serif;
` 