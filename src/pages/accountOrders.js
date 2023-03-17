import React from 'react'
import { AiOutlineProfile } from 'react-icons/ai';
import { BsBookmarkHeart, BsBoxSeam } from 'react-icons/bs';
import { GoSignOut } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { Navbar } from '../components';
import { logoutUser } from '../redux/features/authSlice';
import Orders from './orders';
export const AccountPage = styled.div`
    display: flex;
    height: 80%;
    bottom: 0;
    position: fixed;
    color: white;
  width: 8vw;

  @media (max-width: 768px) {
    display: none;
  }
  
     
    `;
export const SideMenuContainer = styled.div`
    display: flex;
    align-content: left;
    align-items: left;
     position: relative;
    flex-direction: column;
 width: 100%;

    border-right: 1px solid #fff;
    `;

export const TitleContainer = styled.div`
    margin: 3rem;
    text-transform: capitalize;`;

export const SideMenuTitle = styled.h4`text-transform: uppercase;
    `;

export const SideMenuSubTitle = styled.p``;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 30%; 
    `;

export const SideMenu = styled.ul`
    list-style: none;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

     
    `;

export const Menu = styled.a`
     list-style: none;
     text-decoration: none;
     color: ${(props) => props.current ? "#EADDCD" : "inherit"};
     cursor: pointer;
     margin: 0 10px;
     `;

export const MenuWrapper = styled.div`
display: flex;
color: ${(props) => props.current ? "#EADDCD" : "inherit"};
 
&:hover{
    border-radius: 14px;
    padding: .6rem;
    background-color: gray;
    color: black;
 }
 &.active{
    background-color: blue;
 }
 

`

export const ButtonWrapper = styled.div`
    position: absolute;
     cursor: pointer;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-top: 1px solid #fff;  
    bottom: 0;
    padding: 1.5rem;
     
    font-size: 24px;
    &:hover{

        color: #EC6262;
    }
    `;

export const AuthButtons = styled.button`
     
    border: none;
    background-color: transparent;
    color: #fff;
 
    `;
export const MainContainer = styled.div` 
 
 
`
export default function AccountOrders() {

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


                            <MenuWrapper current>
                                <BsBoxSeam />
                                <Menu href='/account/orders'>
                                    Orders
                                </Menu>
                            </MenuWrapper>



                            <MenuWrapper>
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

            <MainContainer>
                <Orders />
            </MainContainer>
        </>

    )

}
