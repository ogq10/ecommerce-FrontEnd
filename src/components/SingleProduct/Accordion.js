import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";

const AccordionContainer = styled.div`
  border-top: 1px solid #f2f6fb;
   
  color: #f2f6fb;
  cursor: pointer;
   
`;

const DisplayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;

 
`;
const TitleWrapper = styled.div`
  display: flex;
`;
const Title = styled.h3`
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const Preview = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  width: 400px;
  position: relative;

  @media (max-width: 768px) {
    font-size: 12px;
    text-transform: capitalize;
    width: 50vw;
    margin: 0;
  }
`;

const Dropdown = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  font-weight: 400;
  color: #f2f6fb;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

const ArrowContainer = styled.div`
  position: absolute;
  right: 0;
`;

const PreviewInfo = styled.p``;

export default function Accordion({ data }) {
  const [open, setOpen] = useState(false);
  const index = 0;
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  console.log(open);
  return (
    <>
      {data?.details.map((d, index) => (
        <AccordionContainer>
          <DisplayContainer onClick={() => toggle(index)}>
            <TitleWrapper>
              <Title>{d.title}</Title>
            </TitleWrapper>

            {open === index ? (
              <Preview>
                <PreviewInfo style={{ display: "none" }}>
                  {d.preview}
                </PreviewInfo>
                <ArrowContainer  >
                  {open === index ? (
                    <RiArrowDownSLine />
                  ) : (
                    <RiArrowRightSLine />
                  )}
                </ArrowContainer>
              </Preview>
            ) : (
              <Preview>
                <PreviewInfo>{d.preview}</PreviewInfo>
                <ArrowContainer>
                  {open === index ? (
                    <RiArrowDownSLine className="downArrow" />
                  ) : (
                    <RiArrowRightSLine className="rightArrow" />
                  )}
                </ArrowContainer>
              </Preview>
            )}
          </DisplayContainer>
          {open === index ? (
            <Dropdown>
              <p>{d.detail}</p>
            </Dropdown>
          ) : null}
        </AccordionContainer>
      ))}
    </>
  );
}
