import styled from "styled-components/macro";

export const CardWrapper = styled.div`
  width: clamp(0%, 666px, 90%);
  height: min(84%, 666px);
  backdrop-filter: blur(17px) saturate(180%);
  -webkit-backdrop-filter: blur(17px) saturate(180%);
  background-color: rgba(197, 225, 224, 0.81);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  color: white;
`;

export const OrderNumTitle = styled.p`
  display: flex;
  text-transform: uppercase;
  color: gray;
  text-align: center;
  justify-content: center;
  font-size: 12px;
  z-index: 222;
  position: absolute;
  right: 1%;
  top: 0%;
`;
