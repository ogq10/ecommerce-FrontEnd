import styled, { css } from "styled-components/macro";

export const Container = styled.div`
 display: flex;
 flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
 
`;

export const ImageWrapper = styled.div`
width: 50vw;
height: 60vh;
position: relative;
 

 @media screen and (max-width: 480px) {
   width: 85%;
  height: 55vh;
}

`;



export const ImageContainer = styled.video`
border-radius: 24px;
 
width: 100%; 
height: 100%;
object-fit: cover;

  
`;
export const Title = styled.h3`
letter-spacing: 3px;
text-transform: uppercase;
color: #EADDCD;

@media screen and (max-width: 480px) {
  font-size: 16px;
}
`;

export const SubTitle = styled.p`
letter-spacing: 1px;
text-transform: uppercase;
color: #EADDCD;
@media screen and (max-width: 480px) {
  font-size: 14px;
}
`;

export const Description = styled.p`
text-transform: capitalize;
line-height: 1.6;
 color: #fff;
 @media screen and (max-width: 480px) {
  font-size: 14px;
  text-align: center;
  line-height: 1.6;
  word-break: break-word;

}
 `;

export const IndexContainer = styled.div`
 display: flex;
 align-content: center;
 align-items: center;
  color: #fff;
 margin: 0 5rem;
 

 @media screen and (max-width: 480px) {
  margin: 0.3rem 3rem;
    
}

 .outOfNum{
  font-weight: 600;
  font-size: 26px;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 20px;
      
  }

 }

 .totalOfNum{
 
  font-size: 16px;
  color: #4c4c4c;
  @media screen and (max-width: 480px) {
    font-size: 12px;
    
  }
  
 }

 .fraction{
  color: #2c2c2c;

 }
`;

export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
 align-content: center;
align-items: center;
width: 12vw;
  justify-content: space-around;
  position: absolute;
  right: 10%;
  bottom: 10%;
   

  @media screen and (max-width: 480px) {
    width: 100vw;
 right: 0;
    bottom: 0;
 
    justify-content: space-evenly;
  
    
  }

`;

export const NavButton = styled.button`
  border: none;
  font-size: 22px;
  color: #f3f6fb;
   position: relative;
 
border: 2px solid #424242;
border-radius: 50%;
width: 26px;
height: 26px;
 
  background-color: transparent;
  &:hover{
    border: 2px solid #000; 
    border-radius: 50%;

  }
  .leftArrow {
    font-size: 22px;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;

    

  
  }
  .rightArrow {
    font-size: 22px;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
  }
  ${(props) =>
    props.right === true
      ? css`
           
        `
      : css`
         
        `}
`;

// export const DotContainer = styled.div`
//   display: flex;
//   z-index: 12313;
//    background-color: red;
//   cursor: pointer;
// `;

// export const Dot = styled.div`
//   width: 11px;
//   height: 11px;
//   background-color: blue;

//   border-radius: 50%;
//   ${(props) =>
//     props.active === true
//       ? css`
//           background-color: #bceae8;
//         `
//       : css`
//           background-color: #f2f6fb;
//         `}
// `;
