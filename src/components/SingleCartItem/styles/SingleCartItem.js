import styled, { css } from "styled-components/macro";

export const Wrapper = styled.div`
  height: 200px;
  border: 1px solid #f2f6fb;
  
  min-width: 64%;
  border-radius: 22px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  position: relative;
  text-transform: capitalize;
`;

export const ImageAndTitleWrapper = styled.div`
  display: flex;
  height: 240px;
  padding: 10px 0px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  min-height: 100px;
  min-width: 100px;
  overflow-wrap: break-word;
`;
export const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

export const ImageContainer = styled.div`
  padding: 10px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(242, 246, 251, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  width: 100px;
  height: 100px;
  margin: 40px 20px;
`;

export const DetailColor = styled.div`
  font-size: 14px;
  font-weight: 400;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: ${(props) => props.hex};
`;

export const Detail = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;

  &:hover {
    transform: scale(1.2);
    transition: 0.69s ease-in;
  }
`;

export const QuantityWrapper = styled.div`
  display: flex;
  position: relative;
  min-width: 100px;
`;

export const Button = styled.button`
  border: none;

  padding: 8px;
  background-color: transparent;
  color: #f2f6fb;
  font-size: 22px;
  cursor: pointer;
`;

export const NumberBox = styled.span`
  margin-top: 10px;
  border-bottom: 1px solid #f2f6fb;
  font-size: 20px;
  font-weight: 400;
  border-radius: 3px;
  height: 33px;
  padding: 0px 12px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  min-width: 100px;
  margin: 40px;
  justify-content: center;
`;

export const Price = styled.h3`
  font-size: 24px;
  font-weight: 400;
`;
export const Delete = styled.button`
  position: absolute;
  top: 6%;
  right: 2%;
  padding: 9px;
  border: none;
  background-color: transparent;
  color: rgba(242, 246, 251, 0.75);
  font-size: 22px;
  cursor: pointer;

  &:hover {
    color: #ff6961;
  }
`;
