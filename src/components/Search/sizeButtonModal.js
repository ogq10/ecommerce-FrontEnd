import { useState } from "react";
import styled from "styled-components";


const ButtonWrapper = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: .5rem;
 
  height: 10px;
`

const Button = styled.div`
 
text-align: center;
align-content: center;
align-items: center;
display: flex;
justify-content: center;
border-radius: 50%;
   width: 28px;
  height: 28px;

  margin: 0 .3rem;
  border: 2px solid white;
  text-transform: uppercase;
  color: #f2f6fb;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }

  &.active {
    border-radius: 50%;
    color: #f2f6fb;
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
  

  .type{
     
font-size: 16px;
  }
`;

const SizeButtonsModal = ({ data, buttonClick, selectedSize }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);



    const onTrigger = (s, i) => {
        buttonClick({ size: s, index: i });
    };


    return (
        <ButtonWrapper>
            {data?.size.map((s, i) => {
                return (
                    <>
                        <Button
                            key={i}
                            className={s.sizeType === selectedSize ? "active" : ""}

                        >
                            <p className="type">{s.sizeType}</p>
                        </Button>

                    </>
                );
            })}
        </ButtonWrapper>
    );
};

export default SizeButtonsModal;
