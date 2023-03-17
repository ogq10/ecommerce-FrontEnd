import React from "react";
import { SocialsContainer, IconContainer, Icon } from "./styles/Socials";
import { IoLogoTiktok, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";

export default function Socials() {
  return (
    <SocialsContainer>
      <IconContainer>
        <a style={{ color: "inherit" }} href="https://instagram.com/makadsa">
          <Icon>
            <IoLogoTiktok />
          </Icon>
        </a>

        <Icon>
          <IoLogoFacebook />
        </Icon>
        <Icon>
          <IoLogoInstagram />
        </Icon>
      </IconContainer>
    </SocialsContainer>
  );
}
