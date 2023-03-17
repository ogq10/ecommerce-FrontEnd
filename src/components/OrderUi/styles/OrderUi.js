import styled from "styled-components/macro";

export const OrderContainer = styled.div`
 
 display: flex;
  border-radius: 18px;
  flex-direction: column;
  

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

 
 
export const PaymentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

`;
 
export const Img = styled.img`
  width: 45px;
  height: 45px;
  opacity: 0.8;
`;

export const AmexImg = styled.img`
  height: 40px;
  width: 69px;

  object-fit: cover;

  opacity: 0.8;
  z-index: 133;
`;
export const Logo = styled.div`
  opacity: 0.8;
  font-size: 20px;
  margin: 1rem;
`;

export const PaymentInfo = styled.div`
  width: 100%;
  display: flex;
   
  align-items: center;
  align-content: center;
  .last4 {
    text-transform: capitalize;
    color: #fff;
    opacity: 0.963;
  }
`;
