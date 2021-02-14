import React, { useState } from 'react'
import {NavbarData} from './data.navbar'
import { FaBars, FaTimes } from 'react-icons/fa'
import { TopNavbar, Logo, NavbarContainer ,NavbarMenu, NavList, NavLink, CloseMenuBars, MenuBars } from './navbar.elements'
 

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);
    const toggle = () => setSidebar(!sidebar);
    
    return (
        <>
            <TopNavbar>
                <Logo>Taco Loco</Logo>
                <NavbarContainer className={sidebar ? 'active' : ''}>
                    <NavbarMenu>
                        <CloseMenuBars onClick={toggle}>
                            <FaTimes/>
                        </CloseMenuBars>
                        {NavbarData.map(index => {
                            return (
                                <NavList key={index}>
                                    <NavLink to={index.path} onClick={toggle}>{index.title}</NavLink>
                                </NavList>
                            )
                        })}
                    </NavbarMenu>
                </NavbarContainer>
                <MenuBars onClick={toggle}>
                    <FaBars/>
                </MenuBars>
            </TopNavbar>
        </>
    )
}

export default Navbar
