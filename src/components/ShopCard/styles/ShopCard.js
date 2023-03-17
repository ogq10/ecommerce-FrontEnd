import styled from "styled-components/macro";

export const CardWrapper = styled.div`
  min-height: 40vh;
  max-width: 432px;
  background-color: #2E332F;
color: white;
  border-radius: 2rem;
  position: relative;
  margin: 20px;

  .icon-red {
    fill: #F96666;
  }

  .icon-white {
    fill: white;
  }
`;
export const ImgWrapper = styled.div`
  width: 100%;
  position: absolute;
  height: 26vh;
  
  margin: 1rem 0;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-size: cover;
    object-fit: cover;
  }
`;

export const TitleWrapper = styled.div``;

export const PriceWrapper = styled.div`
  position: absolute;
  top: 10%;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const CardTitle = styled.h3`
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const CardPrice = styled.p`
  display: flex;
`;

export const Icon = styled.div`
  padding: 33px 14px;
  position: absolute;
  right: 0%;
  font-size: 26px;
  cursor: pointer;
`;
export const InfoWrapper = styled.div`
  width: 75%;
  height: 20%;
  padding: 10px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 0%;
  bottom: 0%;
  cursor: pointer;
  .quickAddbtn {
    font-size: 14px;
    
    background: transparent;
    letter-spacing: 1px;
    border: 2.2px solid #fff;
    boxshadow: 0px 0px 3px 0px #3e3e3e;
    border-radius: 3px 0px 2rem 3px;
    padding: 10px;
    width: 140px;
    cursor: pointer;
color: white;
     
  }
`;
