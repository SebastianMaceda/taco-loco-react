import styled from "styled-components";

export const Container = styled.section`
    background-color: #ccc5b9;
`

export const Menu = styled.div`
    background-color: ${({darkBgc}) => (darkBgc ? '#403D39' : 'none')};
`

export const Header = styled.h2`
    color: ${({darkHeader}) => (darkHeader ? '#252422' : '#F5F5F5')};
    width: 100%;
    border-bottom: ${({darkHeader}) => (darkHeader ? '#252422' : '#F5F5F5')} 3px solid;
    padding: 5px 0;
`

export const MenuContainer = styled.ul`
    display: grid;
    grid-template-columns: auto auto;
`

export const MenuItem = styled.li`
    list-style: none;
    display: grid;
    grid-template-areas: 
    'type type type price'
    'desc desc desc price';
    min-height: 70px;
    &:nth-child(1, 4, 5){
        background-color: rgba(0,0,0,1);
    }
`

export const FoodType = styled.h3`
    grid-area: type;
`

export const FoodDesc = styled.p`
    grid-area: desc;
    width: 25ch;
`

export const FoodPrice = styled.p`
    grid-area: price;
    margin: auto;
`