import React from 'react'
import { MainMenuData } from './data.menu'
import { Container, Menu, Header, MenuContainer, MenuItem, FoodType, FoodDesc, FoodPrice } from './elements.menu'

const MenuSection = () => {
    return (
        <Container>
             <Menu darkBgc={false}>
                <Header darkHeader={true}>Main Menu</Header>
                <MenuContainer oneGrid={false}>
                    {MainMenuData.map(index => {
                        return (
                            <MenuItem>
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
