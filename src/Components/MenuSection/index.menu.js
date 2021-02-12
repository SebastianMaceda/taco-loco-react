import React from 'react'
import { MainMenuData, KidsMenuData, DrinksMenuData, ExtrasMenuData } from './data.menu'
import { Container, Menu, Header, MenuContainer, MenuItem, FoodType, FoodDesc, FoodPrice } from './elements.menu'

const MenuSection = () => {
    return (
        <Container>
             <Menu darkBgc={false} className="mainMenu">
                <Header darkHeader={true}>Main Menu</Header>
                <MenuContainer oneGrid={false}>
                    {MainMenuData.map(index => {
                        return (
                            <MenuItem darkText={true}>
                                <FoodType>{index.foodType}</FoodType>
                                <FoodDesc>{index.foodDescription}</FoodDesc>
                                <FoodPrice>{index.foodPrice}</FoodPrice>
                            </MenuItem>
                        )
                    })}
                </MenuContainer>
             </Menu>
             <Menu darkBgc={true} className="kidsMenu">
                <Header darkHeader={false}>Kids Menu</Header>
                <MenuContainer oneGrid={true}>
                    {KidsMenuData.map(index => {
                        return (
                            <MenuItem darkText={false}>
                                <FoodType>{index.foodType}</FoodType>
                                <FoodDesc>{index.foodDescription}</FoodDesc>
                                <FoodPrice>{index.foodPrice}</FoodPrice>
                            </MenuItem>
                        )
                    })}
                </MenuContainer>
             </Menu>
             <Menu darkBgc={true} className="drinksMenu">
                <Header darkHeader={false}>Main Menu</Header>
                <MenuContainer oneGrid={false}>
                    {DrinksMenuData.map(index => {
                        return (
                            <MenuItem darkText={false}>
                                <FoodType>{index.foodType}</FoodType>
                                <FoodDesc>{index.foodDescription}</FoodDesc>
                                <FoodPrice>{index.foodPrice}</FoodPrice>
                            </MenuItem>
                        )
                    })}
                </MenuContainer>
             </Menu>
             <Menu darkBgc={false} className="extrasMenu">
                <Header darkHeader={true}>Extras Menu</Header>
                <MenuContainer oneGrid={false}>
                    {ExtrasMenuData.map(index => {
                        return (
                            <MenuItem darkText={true}>
                                <FoodType>{index.foodType}</FoodType>
                                <FoodDesc>{index.foodDescription}</FoodDesc>
                                <FoodPrice>{index.foodPrice}</FoodPrice>
                            </MenuItem>
                        )
                    })}
                </MenuContainer>
             </Menu>
        </Container>
    )
}

export default MenuSection
