import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  height: 140px;
  width: 220px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 5%;
  left: 35%;
  color: #fff;

  @media (max-width: 768px) {
    left: 23%;
    bottom: 1%;
  }
`;

const Card = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  color: #fff;
`;

const Logo = styled.p`
  position: absolute;
  right: 5%;
  top: 0%;
  opacity: 0.8;
  font-size: 20px;
`;

const CardNum = styled.p`
  position: absolute;
  color: #fff;

  left: 5%;
  top: 50%;
  width: 80%;
  opacity: 0.8;
  font-size: 14px;
  text-transform: capitalize;
`;

const CardExp = styled.p`
  position: absolute;
  color: #fff;

  right: 5%;
  top: 52%;
  opacity: 0.6;
  font-size: 12px;
  text-transform: capitalize;
`;

const Img = styled.img`
  width: 45px;
  height: 45px;
  position: absolute;
  right: 5%;
  top: 10%;
  opacity: 0.8;
`;

const AmexImg = styled.img`
  height: 40px;
  width: 69px;
  position: absolute;
  right: 10%;
  object-fit: cover;
  top: 10%;
  opacity: 0.8;
  z-index: 133;
`;

function getLogo(br) {
  if (br === "visa") {
    return (
      <Img
        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
        alt="Visa"
      />
    );
  }

  if (br === "discover") {
    return (
      <Img
        src="https://1000logos.net/wp-content/uploads/2021/05/Discover-logo.png"
        alt="Discover"
      />
    );
  }

  if (br === "mastercard") {
    return (
      <Img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png"
        alt="Mastercard"
      />
    );
  }

  if (br === "amex") {
    return (
      <AmexImg
        src="https://1000logos.net/wp-content/uploads/2016/10/American-Express-logo.png"
        alt="American Express"
      />
    );
  }
}

export default function CreditCard(data) {
  const expYear = data?.data?.card?.exp_year.toString().substring(2, 4);

  const br = data?.data?.card?.brand;

  return (
    <CardWrapper>
      <Card>
        <Logo>{getLogo(br)}</Logo>
        <CardNum>•••• •••• •••• {data?.data?.card?.last4}</CardNum>
       
        <CardExp>
          {data?.data?.card?.exp_month}/{expYear}
        </CardExp>
      </Card>
    </CardWrapper>
  );
}
