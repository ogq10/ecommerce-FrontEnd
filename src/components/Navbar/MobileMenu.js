import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";

import styled from "styled-components";
import { logoutUser } from "../../redux/features/authSlice";

const MMContainer = styled.div`
  width: 80vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  border-radius: 6px;
  position: absolute;
  top: 0;
  left: 0;
`;

const MMWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 6%;
  border-top: 1px solid #424242;
  position: absolute;
  bottom: 0;
`;

const MMLogWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  position: absolute;
  bottom: 5%;
`;

const LogImg = styled.img`
  width: 30px;
  position: absolute;
  left: 20%;
  bottom: 5%;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(319deg)
    brightness(105%) contrast(101%);
`;
const LogSpan = styled.span`
  position: absolute;
  color: white;
  left: 40%;
  bottom: 20%;
  font-weight: 500;
`;

const AccordionContainer = styled.div`
  border-top: 1px solid #424242;

  color: #f2f6fb;
`;

const DisplayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem 2rem;
  align-content: center;
  align-items: center;
`;
const TitleWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;
const Title = styled.h3``;

const Dropdown = styled.div`
  display: flex;
  width: 100%;
  color: #f2f6fb;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;
const DropDownWrapper = styled.div`
  display: flex;
  padding: 0rem 2rem;
  flex-direction: row;
  align-items: center;
  align-content: center;

  max-width: 100%;
`;
const DropDownIcon = styled.img`
  width: 28px;
  cursor: pointer;

  height: 28px;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(319deg)
    brightness(105%) contrast(101%);
`;
const DropDownTitle = styled.p`
  margin: 1rem 1rem;
`;

const MMMenuWrapper = styled.div`
  bottom: 1.449%;
  position: absolute;
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
`;

export default function MobileMenu() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const index = 0;
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const mmenu = [
    {
      details: [
        {
          title: "Account",
          list: [
            {
              imagesrc: "https://ontallme.sirv.com/icons/wishlist%20(1).png",
              imagedesc: "Wishlist",
              imagelink: "/wishlist",
            },
            {
              imagesrc: " https://ontallme.sirv.com/icons/package.png",
              imagedesc: "Orders",
              imagelink: "google.com",
            },
            {
              imagesrc:
                "https://ontallme.sirv.com/icons/icons8-male-user-32.png",
              imagedesc: "Profile",
              imagelink: "google.com",
            },
          ],
        },
        {
          title: "Connect",
          list: [
            {
              imagesrc:
                "https://ontallme.sirv.com/icons/icons8-instagram-50.png",
              imagedesc: "Instagram",
              imagelink: "google.com",
            },
            {
              imagesrc: "https://ontallme.sirv.com/icons/icons8-youtube-50.png",
              imagedesc: "Youtube",
              imagelink: "google.com",
            },
            {
              imagesrc: "https://ontallme.sirv.com/icons/icons8-tiktok-50.png",
              imagedesc: "Tiktok",
              imagelink: "google.com",
            },
          ],
        },

        {
          title: "Drops",
          list: [
            {
              imagesrc: "https://ontallme.sirv.com/icons/ambitionicon.png",
              imagedesc: "Ambition",
              imagelink: "google.com",
            },
          ],
        },
      ],
    },
  ];
  console.log(mmenu[0].details.map((item) => item.list));

  return (
    <MMContainer>
      <MMMenuWrapper>
        {mmenu[0].details.map((item, index) => (
          <AccordionContainer>
            <DisplayContainer key={index} onClick={() => toggle(index)}>
              <>
                <TitleWrapper>
                  <Title> {item.title}</Title>
                </TitleWrapper>
              </>

              {open === index ? (
                <>
                  {open === index ? (
                    <RiArrowDownSLine style={{ cursor: "pointer" }} />
                  ) : (
                    <RiArrowRightSLine style={{ cursor: "pointer" }} />
                  )}
                </>
              ) : (
                <span>
                  {open === index ? (
                    <RiArrowDownSLine />
                  ) : (
                    <RiArrowRightSLine />
                  )}
                </span>
              )}
            </DisplayContainer>

            {open === index ? (
              <>
                <Dropdown>
                  {item.list.map((l) => (
                    <DropDownWrapper>
                      <NavLink
                        to={l.imagelink}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <DropDownIcon src={l.imagesrc} alt={l.imagedesc} />
                      </NavLink>

                      <NavLink
                        to={l.imagelink}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <DropDownTitle>{l.imagedesc}</DropDownTitle>
                      </NavLink>
                    </DropDownWrapper>
                  ))}
                </Dropdown>
              </>
            ) : null}
          </AccordionContainer>
        ))}
      </MMMenuWrapper>
      <MMWrapper>
        <MMLogWrapper>
          {auth._id ? (
            <>
              <LogImg
                onClick={() => {
                  dispatch(logoutUser(null));
                  toast.warning("You've been logged out!", {
                    position: "bottom-right",
                  });
                }}
                src="https://ontallme.sirv.com/icons/logout-svgrepo-com.svg"
                alt="Logout"
              />
              <LogSpan>Logout</LogSpan>
            </>
          ) : (
            <>
              <>
                <NavLink to="/signin">
                  <LogImg
                    src="https://ontallme.sirv.com/icons/login-svgrepo-com.svg"
                    alt="Login"
                  />
                </NavLink>
                <LogSpan>Login</LogSpan>
              </>
            </>
          )}
        </MMLogWrapper>
      </MMWrapper>
    </MMContainer>
  );
}
