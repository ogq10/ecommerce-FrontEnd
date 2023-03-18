import React, { useEffect, useState } from "react";
import { GoPackage } from "react-icons/go";
import { BsTruck } from "react-icons/bs";
import { AiOutlineCreditCard } from "react-icons/ai";
import { CardWrapper, OrderNumTitle } from "./styles/ConfirmCard";
import styled from "styled-components";
import { Stack } from "./stack";
import CreditCard from "./creditcard";
import axios from "axios";

const Wrapper = styled(Stack)`
  background: #1f2937;
  box-shadow: 0 0 20px rgba(240, 240, 240, 0.15);
`;

const Item = styled.div`
  cursor: grab;
  background: #f9fafb;
  z-index: 111;
  width: 180px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(240, 240, 240, 0.25);

  border-radius: 8px;
  transform: ${() => {
    let rotation = Math.random() * (15 - -5) + -10;
    return `rotate(${rotation}deg)`;
  }};
`;

const Img = styled.img`
  object-fit: cover;
  width: 130px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  left: 10%;
  align-items: left;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Icon = styled.i`
  font-size: 32px;
`;

const Address = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  white-space: pre;
  text-align: left;
  text-transform: capitalize;
  align-items: center;
  position: absolute;
  top: 10%;
  color: white;
`;

export default function ConfirmCard({ data }) {
  const [PIData, setPIData] = useState({});

  const pid = data?.order.paymentMethod;
  console.log(pid);
  useEffect(() => {
    if (data) {
      async function getPI() {
        const res = await axios.get(
          `https://makadsaapi.onrender.com/api/stripe/payment_methods/${pid}`
        );
        setPIData(res.data.paymentMethodData);
        console.log("PI DATA", PIData);
      }
      getPI();
    }
  }, [data]);
  return (
    <CardWrapper>
      <OrderNumTitle>Order Num - {data?._id}</OrderNumTitle>
      <IconContainer>
        <Icon>
          <BsTruck />
        </Icon>
        <Icon>
          <GoPackage />
        </Icon>
        <Icon>
          <AiOutlineCreditCard />
        </Icon>
      </IconContainer>
      {data?.order.cartItems.map((it) => (
        <>
          <Wrapper onVote={(it, vote) => (it.props, vote)}>
            <Item whileTap={{ scale: 1.15 }}>
              <Img src={it.main_img} />
            </Item>
          </Wrapper>
        </>
      ))}

      <>
        <Address>
          {data?.order.userInfo.fullName}
          <br />
          {data?.order.shippingAddress.line1}
          <br />
          {data?.order.shippingAddress.city},{" "}
          {data?.order.shippingAddress.state}{" "}
          {data?.order.shippingAddress.postal_code}
        </Address>

        <CreditCard data={PIData} />
      </>
    </CardWrapper>
  );
}
