import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import Confetti from "react-dom-confetti";
import { useGetOrdersByIdQuery } from "../redux/RTK/ordersApi";
import { useLocation } from "react-router-dom";
import ConfirmCard from "../components/ConfirmCard";
export const Container = styled.div`
  width: 100vw;
  height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
export const Title = styled.h2`
  justify-content: center;
  align-items: center;
  color: #fff;
  display: flex;
`;

export const SvgContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const config = {
  angle: "220",
  spread: 360,
  startVelocity: "60",
  elementCount: "89",
  dragFriction: "0.13",
  duration: "4050",
  stagger: 3,
  width: "16px",
  height: "16px",
  perspective: "1669px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};
export default function Order() {
  const [active, setActive] = useState(false);

  const location = useLocation();
  const orderNum = location.pathname.split("/")[2];

  const { data } = useGetOrdersByIdQuery(orderNum);
  console.log("single order data", data);
  useEffect(() => {
    setActive(true);
  }, [active]);
  console.log(data);
  return (
    <>
      <Title>Thank You! </Title>
      <Title> Your order has been placed.</Title>
      <SvgContainer>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 130.2 130.2"
        >
          <circle
            class="path circle"
            fill="none"
            stroke="#8CCA97"
            stroke-width="4"
            stroke-miterlimit="10"
            cx="65.1"
            cy="65.1"
            r="62.1"
          />
          <polyline
            class="path check"
            fill="none"
            stroke="#8CCA97"
            stroke-width="4"
            stroke-linecap="round"
            stroke-miterlimit="10"
            points="100.2,40.2 51.5,88.8 29.8,67.5 "
          />
        </svg>
      </SvgContainer>

      <Container>
        <ConfirmCard data={data} />
        <Confetti active={active} config={config} />
      </Container>
    </>
  );
}
