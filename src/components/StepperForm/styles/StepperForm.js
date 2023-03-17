import styled from "styled-components/macro";

export const StepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(17px) saturate(180%);
  -webkit-backdrop-filter: blur(17px) saturate(180%);
  background-color: rgba(197, 225, 224, 0.81);
  flex: 3;
  position: relative;
  height: 86.3vh;
`;

export const DisplayForm = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  height: 100%;
`;
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
`;
export const ResetBtn = styled.button`
  position: absolute;
  bottom: 0;
`;
export const BackBtn = styled.button`
  position: absolute;
  bottom: 10%;
  width: 80px;
  cursor: pointer;
  border: 1px solid rgba(190, 190, 190, 0.5);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 3px;
  border: 1px solid #ffdfba;
  padding: 13px;
  font-size: 18px;
  left: ${(props) => (props.left ? "35%" : "")};
`;
export const InputBtn = styled.button`
  position: absolute;
  bottom: 10%;
  width: 80px;
  cursor: pointer;
  border: 1px solid #73af55;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 3px;
  font-size: 18px;

  right: ${(props) => (props.right ? "35%" : "")};
  padding: 13px;
`;
