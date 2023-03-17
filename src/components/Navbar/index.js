import React, { useEffect, useState } from "react";
import { BiChevronDown, BiChevronUp, BiSearch } from "react-icons/bi";
import { BsBag, BsBoxSeam, BsBookmarkHeart } from "react-icons/bs";
import { AiOutlineProfile } from 'react-icons/ai'
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSignIn, GoSignOut } from 'react-icons/go'
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { TbArrowRightBar } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutUser } from "../../redux/features/authSlice";
import { getTotalAndQuantity } from "../../redux/features/cartSlice";

import {
  NavbarContainer,
  AccountOptionList,
  AccountOption,
  AccountOptionWrapper,
  NavOptionsContainer,
  LogoContainer,
  IconsContainerD,
  NavOption,
  NavOptionsMenu,
  LogoImage,
  IconsMenu,
  Icon,
  Links,
  NumItems,
  ShopIcon,
  IconsContainerM,
  IconsMenuM,
  HamburgerIcon,
  CartIcon,
  IconImg,
  CancelIcon,
  LinkTitle,
} from "./styles/navbar";
import MobileMenu from "./MobileMenu";
import Search from "../Search/Search";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searching, setSearching] = useState(false);

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const cart = useSelector((state) => state.cart);
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalAndQuantity());
  }, [cart.cartItems.length]);
  const toggleOpen = () => {
    setOpen(!open);
  };

  const toggleSearch = () => {
    setSearching(!searching);
  };

  useEffect(() => {
    setShowMenu(false);
    setHamburgerOpen(false);
  }, []);

  const auth = useSelector((state) => state.auth);
  return (
    <>
      <NavbarContainer>
        <NavOptionsContainer>
          <NavOptionsMenu>

            Season
            <ShopIcon>
              <TbArrowRightBar />
            </ShopIcon>
            <NavLink
              style={{
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
              }}
              className="ambitionLink"
              to="/shop/essential"
            >
              <span className="dropName">AMBITION</span>
              <br />
              <span className="dropDate"> 01 '23</span>


            </NavLink>

          </NavOptionsMenu>
        </NavOptionsContainer>

        <LogoContainer>

          <NavLink to="/">
            <LogoImage
              src="https://ontallme.sirv.com/SpaceGreyCloseUpLogo.png"
              alt="Makadsa Logo"
            />
          </NavLink>
        </LogoContainer>


        <IconsContainerD>
          <IconsMenu>
            {open && (
              <AccountOptionWrapper>
                <AccountOptionList>

                  <AccountOption>
                    <Links href="/account/profile">
                      <AiOutlineProfile />
                    </Links>
                    <LinkTitle href="/account/profile">Profile</LinkTitle>

                  </AccountOption>


                  <AccountOption>
                    <Links href="/account/orders">
                      <BsBoxSeam />
                    </Links>
                    <LinkTitle href="/account/orders"> Orders</LinkTitle>

                  </AccountOption>

                  <AccountOption>
                    <Links href="/account/wishlist">
                      <BsBookmarkHeart />
                    </Links>
                    <LinkTitle href="/account/wishlist">Wishlist</LinkTitle>

                  </AccountOption>



                  {auth._id ? (
                    <AccountOption
                      className="withBorder"
                      onClick={() => {
                        dispatch(logoutUser(null));
                        toast.warning("You've been logged out!", {
                          position: "top-left",
                        });
                      }}
                    >
                      <GoSignOut />
                      <LinkTitle>Log out</LinkTitle>

                    </AccountOption>
                  ) : (
                    <>
                      <AccountOption className="withBorder">
                        <Links href="/signin">
                          <GoSignIn />
                        </Links>
                        <LinkTitle>Log in</LinkTitle>
                      </AccountOption>
                    </>
                  )}

                </AccountOptionList>
              </AccountOptionWrapper>
            )}
            <Icon>

              <NavOption onClick={() => toggleSearch()}>
                Search
              </NavOption>
            </Icon>

            <Icon onClick={() => toggleOpen()}>
              <NavOption>Account</NavOption>
            </Icon>

            <Icon>
              <NavLink
                style={{ color: "#f3f6fb", listStyle: "none", textDecoration: "none", fontSize: "inherit" }}
                to="/cart"
              >
                <BsBag />
                <NumItems>{cartTotalQuantity}</NumItems>
              </NavLink>
            </Icon>
          </IconsMenu>
        </IconsContainerD>

        <IconsContainerM>
          <IconsMenuM>
            <CartIcon>
              <NavLink
                style={{ color: "#f3f6fb", listStyle: "none" }}
                to="/cart"
              >
                <BsBag />
              </NavLink>
              <NumItems>{cartTotalQuantity}</NumItems>
            </CartIcon>

            {hamburgerOpen ? (
              <>
                <CancelIcon
                  onClick={() => setHamburgerOpen(!hamburgerOpen)}
                  className="cancel-iconHamburger"
                  src="https://ontallme.sirv.com/icons/cancel_icon.svg"
                />
                <MobileMenu />
              </>
            ) : (
              <>
                <HamburgerIcon onClick={() => setHamburgerOpen(!hamburgerOpen)}>
                  <GiHamburgerMenu />
                </HamburgerIcon>
              </>
            )}
          </IconsMenuM>
        </IconsContainerM>

        {searching ? (<Search setSearching={setSearching} searching={searching} />) : (<></>)}
      </NavbarContainer>
    </>
  );
}
