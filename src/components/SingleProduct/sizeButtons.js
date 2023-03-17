import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  margin: -24px -36px;

  @media (max-width: 768px) {
    padding: 0;
    margin: 0px -30px;
  }
`;

const Button = styled.button`
  position: relative;
  z-index: 222;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  width: 45px;
  height: 45px;

  margin: 10px 20px;
  @media (max-width: 768px) {
    padding: 0;
    margin: 5px 10px;
  }
  border: 2px solid #3e3e3e;
  text-transform: uppercase;
  color: white;
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

const SizeButtons = ({ data, buttonClick, selectedSize }) => {
 
  const onTrigger = (s, i, c, id) => {
    buttonClick({ size: s, index: i, sizeCount: c, _id: id});
  };


  // console.log("size", selectedSize);
  // console.log(" size button data", data);

  return (
    <ButtonWrapper>
      {data?.size.map((s, i) => {
        return (
          <>
            <Button
              key={i}
              className={s.sizeType === selectedSize ? "active" : ""}
              onClick={() => onTrigger(s.sizeType, i, s.count, s._id)}
            >
              {s.sizeType}
            </Button>
          </>
        );
      })}
    </ButtonWrapper>
  );
};

export default SizeButtons;
