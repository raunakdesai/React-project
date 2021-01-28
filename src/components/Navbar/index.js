import React from 'react'
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,NavLinks,NavItem, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">My Site</NavLogo> 

                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discovery">Discovery</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signin">Sign In</NavLinks>
                    </NavItem>
                     <NavBtn>
                        <NavBtnLink to="signup">Sign Up</NavBtnLink>
                    </NavBtn> 
                </NavMenu>

                </NavbarContainer>

        </Nav>
        </>
    )
}

export default Navbar
