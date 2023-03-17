import styled, { css } from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
export const BackgroundSI = styled.div`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background: url("https://ontallme.sirv.com/Images/photo-1565959269841-a4fe0b077a08.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BackgroundSU = styled.div`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background: url("https://images.unsplash.com/photo-1468183654773-77e2f0bb6bf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Base = styled.div`
  display: flex;
  flex-direction: column;

  color: #fff;
`;
export const Label = styled.span`
  color: var(--color-gray);
  font-size: 0.6rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 0.35rem;
  position: absolute;
  left: 0%;
`;
export const Field = styled.label`
  width: 100%;

  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-lighter-gray);
  padding: 0.6rem;
  border-radius: 0.25rem;
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 1px;
  word-wrap: break-word;
`;

export const Error = styled.p`
  color: #ff6961;
  word-wrap: break-word;
  font-weight: 600;
`;

export const Input = styled.input`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-decoration: none;
  position: relative;
  width: 80%;
  position: relative;

  margin: 9px auto;
  font-size: 16px;
  color: white;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: rgba(3, 3, 3, 0.1);
  -webkit-transition: all 2s ease-in-out;
  -moz-transition: all 2s ease-in-out;
  -o-transition: all 2s ease-in-out;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 3px 3px 10px #333;
    background: rgba(3, 3, 3, 0.18);
  }
`;

export const Container = styled.div`
  color: #fff;
  height: 520px;
  width: clamp(0%, 400px, 95%);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 5px;
  background: rgba(3, 3, 3, 0.4);
  backdrop-filter: blur(1196px);

  box-shadow: 1px 1px 50px #000;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;
export const Submit = styled.button`
  background-color: #2c2c2c;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  display: block;
  color: #fff;
  width: 80%;
  border-radius: 0.25rem;
  border: 0;
  cursor: pointer;
  outline: 0;
`;
export const Text = styled.p`
  font-weight: 300;
  line-height: 1;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled(ReactRouterLink)`
  font-weight: 300;
  line-height: 2;
  letter-spacing: 1px;
  padding: 0px 11px;
  color: #f3f6fb;
  text-decoration: none;
`;

export const Bubble = styled.div`
       
position: absolute;
right: 85%;
bottom: 92%;
backdrop-filter: blur(196px);
-webkit-backdrop-filter: blur(996px);
background-color: rgba(242, 246, 251, 0.69);
 
color: #0C0904 ;
font-weight: 500;
font-size: ${(props) => (props.top ? "20px" : "32px")};
line-height: 120px;
 text-align: center;
width: 178px;
height: 120px;

@media (max-width: 768px) {
  width: 30%;
height:23%;
 
font-size: ${(props) => (props.top ? "14px" : "24px")};


}
border-radius: 12px;
padding: 1px;

${(props) =>
  props.top === true
    ? css`
        right: 85%;
        bottom: 92%;
        @media only screen and (max-width: 732px) {
          left: -4%;
        }
      `
    : css`
        top: 93%;
        left: 80%;
        @media only screen and (max-width: 732px) {
          left: 72%;
        }
        padding: 1px;
      `}
&:after {
  content: "";
  position: absolute;
  display: block;
  width: 0;
  z-index: 1;
  border-style: solid;
  border-width: ${(props) => (props.top ? "24px 22px 0 0" : "0 22px 24px 0")};
  border-color: ${(props) =>
    props.top
      ? "rgba(242, 246, 251, 0.69) transparent transparent transparent"
      : "transparent rgba(242, 246, 251, 0.69) transparent transparent"};
  bottom: -24px;
  left: ${(props) => (props.top ? "18%" : "75%")};
  margin-left: -11px;
}
}
`;
export const Bottom = styled.div`
  display: flex;
  width: 80%;
  font-size: 14px;
  position: absolute;
  justify-content: space-between;
  bottom: 20%;
  align-content: center;
  align-items: center;
  left: 10%;
`;

export const BottomUp = styled.div`
  position: absolute;
  bottom: -3%;
  left: 20%;
`;
