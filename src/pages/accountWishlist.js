import React from "react";
import { Navbar, WishlistCard } from "../components";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineProfile } from 'react-icons/ai';
import { BsBookmarkHeart, BsBoxSeam } from 'react-icons/bs';
import { GoSignOut } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { logoutUser } from '../redux/features/authSlice';
import {
  AccountPage,
  SideMenuContainer,
  TitleContainer,
  SideMenuTitle,
  SideMenuSubTitle,
  MenuContainer,
  SideMenu,
  Menu,
  MenuWrapper,
  ButtonWrapper,
  AuthButtons,
  MainContainer
} from './accountOrders';

export const WishPage = styled.div`
width: 92vw;
   position: absolute;
   right: 0;
      
  .gridContainer {
   width: 90%;
    
  }
  .gridWrapper {

    width: 100%;
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(3, 1fr);
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .gridWrapper {
      grid-template-columns: repeat(1 , 1fr);
    }
    .gridContainer{
      position: relative;

    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .gridWrapper {
      grid-template-columns: repeat(1, 1fr);
    }
    .gridContainer{
      position: relative;
      
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .gridWrapper {
      grid-template-columns: repeat(1, 1fr);
    }
    .gridContainer{
      position: relative;
      
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .gridWrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1500px) {
    .gridWrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const PageTitle = styled.div`
display: flex;
  
justify-content: center;
flex-direction: column;
align-content: left;
align-items: left;
margin: 0 5rem;
   color: #f2f6fb;

   @media (max-width: 768px) {
    margin: 0 1.5rem;
   }
 
 `;
export const Title = styled.h1`
  font-size: 32px;
letter-spacing: 1px;
text-transform: uppercase;
 
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  
`;

export const Container = styled.div`
   
 width: 70vw;
  
 height: 60vh;
 position: absolute;
 bottom: 0;
 
  overflow: hidden;
  
`;
export const ContainerOrder = styled.div`
   
 
position: absolute;
bottom: 0;
left: 0;
margin: auto;
  width: 95vw;
  height: 60vh;

  @media (max-width: 768px) {
  
  }
`;


export const EmptyText = styled.p`
  text-transform: capitalize;
  

  color: #fff;
  opacity: 0.963;

  @media (max-width: 768px) {
    bottom: 33%;
  }
`;

export const IconContainer = styled.div`
   display: flex;
   flex-direction: column;

justify-content: center;
align-content: center;
align-items: center;
margin: auto; 
 

   
`;

export const CartIcon = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
 
  filter: invert(100%) sepia(90%) saturate(0%) hue-rotate(293deg)
    brightness(109%) contrast(101%);
  opacity: 0.963;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const HeartIcon = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: auto;
 

 width: 140px;
  filter: invert(100%) sepia(90%) saturate(0%) hue-rotate(293deg)
    brightness(109%) contrast(101%);
  opacity: 0.963;
  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const ToggleContainer = styled.div`
 width: 98vw;
  
 display: flex;
 justify-content: center;
 margin: 4rem 0rem;
  
 
`;

export default function Wishlist() {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  var size = Object.keys(wishlistItems).length;

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <>

      <Navbar />
      <AccountPage>

        <SideMenuContainer>

          <TitleContainer>

            <SideMenuTitle>
              Account
            </SideMenuTitle>
            <SideMenuSubTitle>
              {auth?.fullName}
            </SideMenuSubTitle>
          </TitleContainer>

          <MenuContainer>

            <SideMenu>

              <MenuWrapper>
                <AiOutlineProfile />
                <Menu href='/account/profile'>
                  Profile
                </Menu>
              </MenuWrapper>


              <MenuWrapper>
                <BsBoxSeam />
                <Menu href='/account/orders'>
                  Orders
                </Menu>
              </MenuWrapper>



              <MenuWrapper current>
                <BsBookmarkHeart />
                <Menu href='/account/wishlist'>
                  Wishlist
                </Menu>
              </MenuWrapper>

            </SideMenu>
          </MenuContainer>

          {auth._id ? (
            <ButtonWrapper>

              <GoSignOut />
              <AuthButtons onClick={() => {
                dispatch(logoutUser(null));
                toast.warning("You've been logged out!", {
                  position: "top-left",
                });
              }}>
                Log out
              </AuthButtons>
            </ButtonWrapper>
          ) : (

            <Navigate to="/signin" />
          )}

        </SideMenuContainer>

      </AccountPage>

      <div>
        <WishPage>
          <ToggleContainer>

          </ToggleContainer>
          {size === 0 ? (
            <Container>
              <IconContainer>
                <HeartIcon
                  src="https://ontallme.sirv.com/icons/broken-heart.png"
                  alt="Created by Seb Cornelius"
                />
                <EmptyText>your wishlist is empty.</EmptyText>
              </IconContainer>
            </Container>
          ) : (
            <motion.div className="gridContainer">
              <motion.div className="gridWrapper" layout>
                {wishlistItems?.map((wishlist) => {
                  return (
                    <>
                      <AnimatePresence>
                        <WishlistCard wishlist={wishlist} />
                      </AnimatePresence>
                    </>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </WishPage>
      </div>


    </>
  );
}
