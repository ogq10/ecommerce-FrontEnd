import React, { useEffect, useState } from "react";
import {
  Container,
  ImageContainer,
  NavButton,
  IndexContainer,
  ButtonContainer,
  Title,
  ImageWrapper,
  SubTitle,
  Description,
  DropButton
} from "./styles/Slider";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine
} from "react-icons/ri";

export default function Slider({ config }) {
  const [imageIndex, setImageIndex] = useState(0);
  let slideInterval;
  let intervalTime = 20000;
  const [autoScroll, setAutoScroll] = useState(true);

  console.log(imageIndex);
  useEffect(() => {
    setImageIndex(0);
  }, []);

  function auto() {
    slideInterval = setInterval(next, intervalTime);
  }
  const next = () => {
    setImageIndex((state) => (state += 1));
    if (imageIndex === config.length - 1) {
      setImageIndex(0);
    }
  };

  const prev = () => {
    setImageIndex((state) => (state -= 1));
    if (imageIndex === 0) {
      setImageIndex(config.length - 1);
    }
  };

  useEffect(() => {
    if (autoScroll) {
      auto();
    }

    return () => clearInterval(slideInterval);
  }, [imageIndex, autoScroll]);

  return (
    <>
      <Container
        onMouseOver={() => setAutoScroll(false)}
        onMouseLeave={() => setAutoScroll(true)}
      >

        <ButtonContainer>

          <NavButton right onClick={prev}>
            <RiArrowLeftSLine className="leftArrow" />
          </NavButton>
          <NavButton onClick={next}>
            <RiArrowRightSLine className="rightArrow" />
          </NavButton>
          <IndexContainer>
            {imageIndex < 10 ? <span className="outOfNum">0</span> : ""}<sup className="outOfNum">{imageIndex + 1}</sup>
            {/* <IndexDivider> /</IndexDivider> */}
            <span className="fraction">/</span>
            {imageIndex < 10 ? <span className="totalOfNum">0</span> : ""}<sub className="totalOfNum">{config.length}</sub>
          </IndexContainer>
        </ButtonContainer>

        <ImageWrapper>

          <ImageContainer autoPlay muted src={config[imageIndex].image} />
        </ImageWrapper>
        <Title>
          {config[imageIndex].title}
        </Title>
        <SubTitle>{config[imageIndex].season}</SubTitle>
        <Description>{config[imageIndex].description}</Description>
      </Container>
    </>
  );
}


{/* <DotContainer>
          {config.map((dot, index) => (
            <>
              <Dot key={dot.image} active={index === imageIndex} />
            </>
          ))}
        </DotContainer> */}