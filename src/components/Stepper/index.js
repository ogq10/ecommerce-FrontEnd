import React, { useState } from "react";
import styled from "styled-components";
import SplitForm from "../Stripe/SplitForm";

import { useSelector } from "react-redux";
export default function Stepper(address) {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const [clicked, setClicked] = useState(false);
  console.log(clicked);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null); //if clicked label is already active then close it
    }

    setClicked(index);
  };
  const data = [
    {
      letter: "a",
      label: "Login",
      descriptionFake: "John Doe",
      descriptionReal: `${auth.fullName}  ${auth.email}`,
      form: <div>login</div>,
    },
    {
      letter: "b",
      label: "Shipping & Pay",
      descriptionFake: "123 Maple Street Anytown, PA 17101",
      descriptionReal: "",
      form: <SplitForm />,
    },
  ];

  const Accordion = styled.div`
    padding: 0px 24px;
    height: 75vh;
    display: flex;
    flex-direction: column;
    width: 90%;
  `;
  const AccordionWrapper = styled.div`
    border-radius: 33px;
    padding: 10px 66px;
    position: relative;
    margin: 33px;
    border: 1px solid #676767;
  `;

  const AccordionTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const AccordionTitle = styled.h2`
    font-weight: 300;
    position: relative;
    cursor: pointer;
  `;

  const AccordionButton = styled.span`
    cursor: pointer;
  `;

  const AccordionIcon = styled.p`
    position: absolute;
    left: 2%;
    bottom: 18%;
    color: white;
    text-align: center;
    font-weight: 400;
    background-color: #4b4b4c;
    border-radius: 50%;
    width: 24px;
    height: 24px;
  `;

  const Dropdown = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 200px;
  `;

  const DropdownWrapper = styled.div`
    position: absolute;
    top: 50;
    left: 50;
    padding: 33px;
  `;
  const AccordionLogged = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: -26px;
    padding: 0px 24px;
    font-weight: 600;
  `;

  return (
    <Accordion>
      {data.map((item, index) => {
        return (
          <>
            <AccordionWrapper onClick={() => toggle(index)} key={index}>
              <AccordionIcon>{item.letter}</AccordionIcon>

              <AccordionTitleWrapper>
                <AccordionTitle>{item.label}</AccordionTitle>

                <AccordionButton>
                  {clicked === index ? "" : "change"}
                </AccordionButton>
              </AccordionTitleWrapper>
              <AccordionLogged>
                {auth.length === null ? (
                  <p>{item.descriptionReal}</p>
                ) : (
                  <p>{item.descriptionFake}</p>
                )}
              </AccordionLogged>
            </AccordionWrapper>
            {clicked === index ? (
              <Dropdown>
                <DropdownWrapper>{item.form}</DropdownWrapper>
              </Dropdown>
            ) : null}
          </>
        );
      })}
    </Accordion>
  );
}
