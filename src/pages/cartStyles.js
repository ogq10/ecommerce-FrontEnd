import styled from "styled-components/macro";

export const PageTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 23px 16px;
  color: #f2f6fb;
  border-bottom: 1px solid #3e3e3e;
`;
export const Title = styled.h1`
  font-weight: 600;
`;
export const CartPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  color: #f2f6fb;
`;
export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const EmptyText = styled.p`
  text-transform: capitalize;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
`;

export const CartIcon = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  filter: invert(100%) sepia(90%) saturate(0%) hue-rotate(293deg)
    brightness(109%) contrast(101%);
`;
