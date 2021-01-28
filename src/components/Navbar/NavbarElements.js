import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
    background: #000;
    height:80px;
   
    display:flex;
    justify-content:center;
    align-item:center;
    font-size:20px;
    position:sticky;
    
    @media screen and (max-width:600px){
        transition:0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:80px;
    width:100%;
    max-width:1200px;
    z-index:1;
    padding:0 25px;
    `;
export const NavLogo = styled(LinkR)`
    color:#fff;
    justify-self:flex-start;
    cursor:pointer;
    font-size:25px;
    display:flex;
    align-item:center;
    text-decoration:none;
    margin-left:24px;
    margin-top: 20px;
    font-weight:700;
`;
export const MobileIcon = styled.div`
display:none;

@media screen and (max-width:768px){
color:#fff;
display:block;
position:absolute;
top:30px;
right:10px;
transform:Translate(-100% 60%);
font-size:18px;
cursor:pointer;
}

`; 
export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;
cursor:pointer;

@media screen and (max-width:768px){
display:none;
}

`;

export const NavItem = styled.li`
height:80px;

`;

export const NavLinks= styled(LinkS)`
 color:#fff;
 display:flex;
 align-item:center;
 text-decoration:none;
 padding:30px 10px;
 height:100%;
 cursor:pointer;

 &:hover {
    transition: all 0.25 ease-in-out;
    color:#01bf71;
    }
`;

export const NavBtn = styled.nav`
display: flex;
align-items:center;
 
@media screen and (max-width:768px){
    display :none;
}
`;

export const NavBtnLink = styled(LinkR)`
border-radius:20px;
background:#01bf71;
color:#000;
padding:10px 10px;
font-size:16px;
outline:none;
cursor:pointer;
transition:all 0.25 ease-in-out;
text-decoration:none; 
margin-left:22px;

&:hover {
transition: all 0.25 ease-in-out;
color:#01bf71;
background:#000;
border:2px solid #01bf71;
}
`;