import styled from "styled-components/macro";
import { size } from "../../../utils/sizes";
import { device } from "../../../utils/sizes";
import { Link as ShopLink } from "react-router-dom";

export const NavbarContainer = styled.div`
   
display: flex;
align-items: center;
width: 100vw;
 
justify-content: space-between;
 
  z-index: 999;
 height: 18vh;
   color: #f3f6fb;
  
`;

export const NavOptionsContainer = styled.div`
 
width: 469px;
 
.dropDate{
  font-size: 12px;
  letter-spacing: .2rem;
  font-weight: 700;
text-align: center;
display: flex;
align-content: center;

}

.dropName{
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 400;
  color: #EADDCD;
}

  
`;

export const NavOptionsMenu = styled.div`
margin: 0 4rem;
  display: flex;
  width: 100%;
  list-style: none;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
 
width: 80px;
height: 130px;
   
  display: flex;
justify-content: center;
align-content: center;
align-items: center;
@media (max-width: 1200px) {
width: 150px;
   
}
@media (max-width: 820px) {
width: 150px;
   
}
`;
export const LogoImage = styled.img`
 
 width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-content: center;
align-items: center;
margin: auto;
 
 
  
`;
export const IconsContainerD = styled.div`
   width: 480px;
    
   display: flex;
   justify-content: space-evenly;
   

`;

export const LogoutButton = styled.button`
  display: flex;
  border: none;
  background: transparent;
  color: white;
  list-style: none;
  text-decoration: none;
  text-transform: capitalize;
  cursor: pointer;
  font-size: 18px;
`;

export const LoginButton = styled.button`
  display: flex;
  border: none;
  background: transparent;
  color: white;
  text-transform: capitalize;
  list-style: none;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
`;


export const ShopIcon = styled.i`
  font-size: 22px;
  color: #adadad;
  margin: 2px;
`;

export const NavOption = styled.li`
  list-style: none;
  position: relative;
  font-size: 18px;
  letter-spacing: 0.69px;
  text-transform: capitalize;

   
 
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  color: #f2f6fb;
  font-size: 18px;
  cursor: pointer;
`;

export const Option = styled.li`
  list-style: none;
`;

export const IconsMenu = styled.ul`
  position: relative;
 
  display: flex;
  justify-content: space-evenly;
 width: 100%;
   @media (max-width: 1200px) {
    display: none;
  }
`;
export const Icon = styled.li`
  font-size: 24px;
   
  list-style: none;
  cursor: pointer;
  position: relative;
  .vscoption {
    position: relative;
  }
`;

export const NumItems = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background-color: #adadad;
  color: #f3f6fb;
  border-radius: 50%;
  width: 18px;
  height: 18px;
`;
export const Link = styled(ShopLink)`
  display: flex;
`;

export const AccountOptionWrapper = styled.div`
    
   position: absolute;

  display: flex;
  flex-direction: column;
  width: 200px;
  top: 120%;
  left: 18%;
  border-radius: 12px;
  list-style: none;
  text-decoration: none;
  font-size: 18px;
  margin: 2rem 0rem;
`;

export const AccountOptionList = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-evenly;
  height: 100px;
  list-style: none;
  text-decoration: none;
`;
export const AccountOption = styled.li`
  text-transform: capitalize;
  list-style: none;
  text-decoration: none;
  display: flex;
  width: 100%;
 
align-items: center;
  .loginImg {
    width: 28px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(319deg)
      brightness(105%) contrast(101%);
  }
  .logoutImg {
    width: 28px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(319deg)
      brightness(105%) contrast(101%);
  }

  &:hover {
    background-color: gray;
    border-radius: 7px;
    padding: 
  }


  &.withBorder{
   
    border-top: 1px solid #424242;
    margin: 1rem 0rem;
    padding: 6px 0;

    
  }
`;

export const IconsContainerM = styled.div`
  z-index: 111222;
  @media (min-width: 760px) {
    display: none;
  }

`;
export const IconsMenuM = styled.div`
  .cancel-iconHamburger {
    width: 28px;
    position: absolute;
    left: 5%;
    cursor: pointer;

    
  }
`;

export const Links = styled.a`
  list-style: none;
  cursor: pointer;
  color: white;
  font-size: 22px;
`;
export const LinkTitle = styled.a`
list-style: none;
color: white;
text-decoration: none;
font-size: 15px;
margin: .3rem;
cursor: pointer;`

export const HamburgerIcon = styled.i`
  position: absolute;
  z-index: 11111;

  left: 5%;
  font-size: 24px;
  cursor: pointer;
  @media (min-width: 760px) {
    display: none;
  }
`;
export const CartIcon = styled.li`
  font-size: 24px;
  list-style: none;
  cursor: pointer;
  position: absolute;
  right: 5%;
  cursor: pointer;
  @media (min-width: 760px) {
    display: none;
  }
`;

export const IconImg = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;
  z-index: 11111;
  
`;

export const CancelIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 11111;
`;
