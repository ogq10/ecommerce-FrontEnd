import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: -20%;
  display: flex;
  flex-wrap: wrap;
  height: 102px;
  width: 100px;
`;

const Button = styled.button`
  position: relative;
  z-index: 222;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  margin: 10px 5px 1px 5px;
  border: 2px solid white;
  text-transform: uppercase;
  color: #f2f6fb;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }

  &.active {
    border-radius: 50%;
    color: #f2f6fb;
    border: solid 2px transparent;

    background-image: linear-gradient(
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 1)
    ),
    linear-gradient(101deg, #d0bfff, #d7d7d7);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 2000px 1px #333333 inset;
  }
`;

const SizeButtonsModal = ({ data, buttonClick, selectedSize }) => {
  const onTrigger = (s, i) => {
    buttonClick({ size: s, index: i });
  };
  console.log("size", selectedSize);
  console.log(" size button data", data);

  return (
    <ButtonWrapper>
      {data?.size.map((s, i) => {
        return (
          <>
            <Button
              key={i}
              className={s.sizeType === selectedSize ? "active" : ""}
              onClick={() => onTrigger(s.sizeType, i)}
            >
              {s.sizeType}
            </Button>
          </>
        );
      })}
    </ButtonWrapper>
  );
};

export default SizeButtonsModal;
