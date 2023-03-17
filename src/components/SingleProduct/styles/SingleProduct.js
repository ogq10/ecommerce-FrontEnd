import styled, { css } from "styled-components/macro";

export const StickyContainer = styled.div`
  width: 100vw;
  height: 5vh;
  position: fixed;
  bottom: 0%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background: rgb(52, 49, 50);
  background: radial-gradient(
    circle,
    rgba(52, 49, 50, 1) 37%,
    rgba(255, 255, 255, 0) 68%
  );

  z-index: 111111;
  @media (max-width: 768px) {
    width: 90vw;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #343132;
     
  }
`;

export const CartContainer = styled.div`
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  position: relative;
  margin-left: 10px;

  @media (max-width: 768px) {
    width: 58vw;
  }
`;

export const CheckoutContainer = styled.div`
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  position: relative;
  margin-left: 20px;
  @media (max-width: 768px) {
    margin: 0;
    width: 50vw;
  }
`;



export const Icon = styled.div`
  z-index: 100;
  font-size: 20px;
  color: #f2f6fb;
  display: flex;
  position: absolute;
  left: 15%;

  filter: invert(71%) sepia(60%) saturate(440%) hue-rotate(203deg)
    brightness(102%) contrast(104%);

  @media (max-width: 768px) {
    font-size: 16px;
    left: 18%;
  }
`;
export const AddToCartBtn = styled.button`
  width: 250px;
  height: 50px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;

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
  border: 1px solid #3c3c3c;
  background-color: transparent;
  position: relative;
  text-align: center;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 700;
   
  color: #fff;

  &.disabled {
    color: red;
  }
`;

export const ProceedToCheckout = styled.button`
  position: relative;
  width: 260px;
  height: 50px;
  position: relative;
  text-align: center;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-transform: capitalize;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
  font-weight: 600;
  border: solid 2px transparent;

  background-image: linear-gradient(
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 1)
    ),
    linear-gradient(101deg, #d0bfff, #d7d7d7);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 2000px 1px #333333 inset;
  color: #f2f6fb;
  cursor: pointer;
`;
export const Arrow = styled.div`
  z-index: 100;
  font-size: 20px;
  color: #f2f6fb;
  display: flex;
  position: absolute;
  right: 2%;
`;

export const BreadcrumbWrapper = styled.div`
  display: flex;
  margin: 10rem 2rem;
  text-transform: capitalize;

  @media (max-width: 768px) {
    margin: 10rem 1.2rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-bottom: 180px;
  flex: 1;

  @media (max-width: 768px) {
    margin: 0;
    word-break: break-word;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8rem 2rem;

  flex: 1;

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
    max-width: 98vw;
  }
`;

export const SizeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  @media (max-width: 768px) {
    max-width: 95vw;
  }
`;
export const SizeGuideContainer = styled.div`
  display: flex;
  text-transform: capitalize;
  color: #f2f6fb;
  text-decoration: underline;

  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
  }
`;

export const SizeGuide = styled.p`
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Container = styled.div`
  display: flex;
  text-align: left;
  position: absolute;
  top: 78%;
  width: 100vw;
  padding: 1rem 0rem;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    margin: 28rem 0rem;
    position: absolute;
    top: 20%;
  }
`;

export const TitlePriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  @media (max-width: 768px) {
    width: 95vw;
    justify-content: space-between;
    font-size: 16px;
    word-break: break-word;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #f2f6fb;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
export const Price = styled.h3`
  color: #f2f6fb;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: -14px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Instock = styled.h3`
  text-transform: uppercase;
  color: #e3e3e3;
  font-weight: 600;
  margin-bottom: -2px;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const InstockContainer = styled.div`display: flex;
 
align-items: end;

.specificqty{
  text-transform: capitalize;
  margin: 0rem 1rem;
  font-size: 16px;
  color: #800900;
  @media (max-width: 768px) {
    font-size: 12px;
    margin: 0rem .5rem;
  }
}
`;


export const Description = styled.p`
  line-height: 50px;
  color: #f2f6fb;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 16px;
    word-break: break-word;
    line-height: 35px;
    width: 95vw;
  }
`;
export const IncTax = styled.p`
  font-size: 14px;
  color: #424242;
`;

export const SliderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 66.6vh;
  width: 100vw;
 
 
 
   
`;
export const SliderWrapper = styled.div`
  width: 777px;
  height: 777px;
  margin: auto;
    @media (max-width: 768px) {
    width: 100vw;
    height: 400px;
    
  }
`;
export const SliderImg = styled.img`
  width: 100%;
  height: 100%;
  objectfit: cover;
border-radius: 12px;

`;
