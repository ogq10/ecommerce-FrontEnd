import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { OrderUi } from "../components";
import {
  CartIcon,
  ContainerOrder,
  EmptyText,
  IconContainer,
  PageTitle,

} from "./accountWishlist";

const OrdersPage = styled.div` 
display: flex;
flex-direction: column;
position: absolute;
right: 0;
bottom: 0;
height: 77vh;
width: 92vw;

@media (max-width: 768px) {
  width: 100vw;

}
  
 
`;


export default function Orders() {
  const auth = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);

  console.log(auth._id);
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };
  useEffect(() => {
    async function getOrders() {
      const res = await axios.get(
        `http://localhost:5000/api/users/${auth._id}/orders`
      );
      setOrders(res.data);
    }
    getOrders();
  }, []);

  const AccordionContainer = styled.div`
  border-top: 1px solid #3c3c3c;
  color: #f2f6fb;
  border-bottom: 1px solid #3c3c3c;
  width: 85vw;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: auto;

  
 
`;
  const DisplayContainer = styled.div`
  display: flex;
 
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  
  
   width: 100%;
   @media (max-width: 768px) {
   
    flex-direction: column;
   }

}
    
`;
  const ArrowContainer = styled.div`
 display: flex;
 align-content: flex-end;
 align-items: flex-end;
 flex-direction: column;
 width: 100%;

 @media (max-width: 768px) {
   
 }
 
`;

  const TitleWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media (max-width: 768px) {
    
  
   }
   

`;
  const Title = styled.h2`
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

  const SubTitle = styled.p`
color: #424242;
font-size: 14px;
span{
  color: white;
 
  font-weight: 500;
  margin-left: 4px;
  word-break: break-word;

}
.green{
  background-color: #8CCA97;
  word-break: break-word;
   
}
.red{
  background-color: #F96666;
  word-break: break-word;
}

@media (max-width: 768px) {
  font-size: 12px;

}
 
 
`;

  const Preview = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex: 2;
 
  position: relative;

 
  @media (max-width: 768px) {
   width: 100%;
  
  }
 
`;



  const PreviewInfo = styled.p``;


  const CartItemsContainer = styled.div`

display: flex;

align-content: center;
align-items: center;
text-align: center;
 
width: 100%;
@media (max-width: 768px) {
     
  
 
 }
 

`;
  const ImgContainer = styled.div`
position: relative;
display: flex;
flex-direction: row;
margin: 0.333rem;
 

@media (max-width: 768px) {
     
   

}


`;

  const IC = styled.div`
display: flex;
width: 100%;
justify-content: center;
 


`;

  const Items = styled.img`
width: 100px;
height: 100px;
border-radius: 18px;
background-color: rgba(255, 255, 255, 0.1);
box-shadow: 0 1px 6px rgba(255, 255, 255, 0.069);
display: flex;
object-fit: cover;

@media (max-width: 768px) {
     
  width: 50px;
height:50px;
border-radius: 12px;
}

`;


  const Qty = styled.div`
border-radius: 50%;
width: 18px;
height: 18px;
background-color: #606060;
color: #fff;
position: absolute;
font-size: 14px;
right: 0;
text-align: center;
align-content: center;
display: flex;
justify-content: center;
`;



  const DropDownContainer = styled.div`
display: flex;
flex-direction: column;

align-content: start;
align-items: start;
width: 100%;


 
`;

  const Dropdown = styled.div`
display: flex;
flex-direction: column;
 
width: 100%;
margin: auto;
 
 
`;

  const ItemWrapper = styled.div`
 
  width: 100%;
  display: flex;
  margin: 1rem;
  @media (max-width: 768px) {
     
  margin: 0;
 
    }
  
  `;

  const ItemImgWrapper = styled.div` display: flex;   justify-content: center;
  align-content: center;
  align-items: center;
  flex: 1;
 
   `;
  const ItemImg = styled.img`
  width: 200px;
  border-radius: 22px;
  padding: 1rem;
  height:200px;
  object-fit: cover;

  @media (max-width: 768px) {
     
  width: 70px;

    height:70px;
  }

  `;

  const ItemTitleWrapper = styled.div` display: flex; flex: 1;   justify-content: center;
  align-self: start; `;
  const ItemTitle = styled.h4`
  
  @media (max-width: 768px) {
     
    font-size: 14px;
   }`;

  const ItemDetailsWrapper = styled.div`
  display: flex; 
  flex: 1; 
  
  color: rgba(255,255,255,.7);
  text-transform: capitalize;
  flex-direction: column;
  
  
  @media (max-width: 768px) {
    
    align-self: end;
    font-size: 12px;
   }
  `;
  const ItemQuantity = styled.p`
  
   `;
  const ItemSize = styled.p``;
  const ItemColor = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
 

  background-color: ${(props) => props.hex};

  @media (max-width: 768px) {
     
    width: 15px;
  
      height:15px;
    }
   

  `;


  const ItemPriceWrapper = styled.div`display: flex;
  justify-content: center;
 
   
  

   flex: 1;`;
  const ItemPrice = styled.p`
  padding: .5rem;
  @media (max-width: 768px) {
     
    font-size: 14px;
   }`;


  const PriceTotalsWrapper = styled.div`
  border-top: 1px solid #3c3c3c;
  padding: 1rem 0;
  display: flex;
  margin-left: auto;
 width: 38%;
 

@media (max-width: 768px) {
     
  padding: 0;
 }
  
`;

  const TitlesWrapper = styled.div`display: flex; 
  flex-direction: column; 
  flex: 2;   
  justify-content: space-evenly;  

align-content: center;
 

align-items: flex-start;
@media (max-width: 768px) {
     
  font-size: 14px;
 }
 

 
`

  const NumbersWrapper = styled.div`
  display: flex; 
  flex-direction: column; 
  flex: 1; 
  justify-content: space-evenly;  
align-content: center;
 
align-items: flex-start;
 
 
`;

  const SubTotalTitle = styled.h4` opacity: .6; 
  
  `;

  const ShippingTitle = styled.h4`opacity: .7; `;
  const TaxTitle = styled.h4` opacity: .8; `;
  const PriceTitle = styled.h4` opacity: .9; `;


  const SubTotal = styled.p` font-size: 18px; opacity: .9;
  @media (max-width: 768px) {
     
    font-size: 12px;
   }
  `;
  const Shipping = styled.p`font-size: 18px; opacity: .9;
  
  @media (max-width: 768px) {
     
    font-size: 12px;
   }`;

  const Tax = styled.p` font-size: 18px; opacity: .9; 
  @media (max-width: 768px) {
     
    font-size: 12px;
   }`;

  const Price = styled.p` font-size: 18px; opacity: .9;
  @media (max-width: 768px) {
     
    font-size: 12px;
   } `;

  const ShippingAddressWrapper = styled.div``
  const ShippingAddressTitle = styled.h4``
  const Address = styled.div`
  margin: .88rem;
 font-size: 14px;
 font-weight: 300;
  display: flex;
  white-space: pre;
  text-transform: capitalize;
  padding: .7rem 0rem;
  color: white;
`;


  console.log(orders)
  return (
    <>
      <OrdersPage>


        <PageTitle>
          <Title>Orders<span style={{ fontSize: "16px", color: "#9c9c9c" }}>({orders.length})</span></Title>

        </PageTitle>
        {orders.length === 0 ? (
          <ContainerOrder>
            <IconContainer>
              <CartIcon
                src="https://ontallme.sirv.com/icons/magic-box%20(3).png"
                alt="Created by Seb Cornelius"
              />
              <EmptyText>You have no orders to view.</EmptyText>
            </IconContainer>
          </ContainerOrder>
        ) : (
          <>

            {orders.map((o, index) => (

              <AccordionContainer>

                {open === index ? (
                  <DropDownContainer>
                    <TitleWrapper onClick={() => toggle(index)}>
                      <SubTitle>Order #{o._id} —
                        <span className={o.isDelivered === true ? `green` : `red`}>{o.isDelivered === true ? "Fulfilled" : "Not Delivered"}</span>

                      </SubTitle>
                      <SubTitle>Placed On: <span>{o.createdAt.substring(0, 10)}</span></SubTitle>

                    </TitleWrapper>

                    <ArrowContainer onClick={() => toggle(index)}>
                      {open === index ? (
                        <HiMinus />
                      ) : (
                        ""
                      )}
                    </ArrowContainer>


                    <Dropdown>
                      {o.order.cartItems?.map((cartItem, index) => (
                        <ItemWrapper>
                          <>

                            <ItemImgWrapper>
                              <ItemImg key={index} src={cartItem.main_img} />
                            </ItemImgWrapper>


                            <ItemTitleWrapper>
                              <ItemTitle>{cartItem.title}</ItemTitle>
                            </ItemTitleWrapper>


                            <ItemDetailsWrapper>
                              <ItemQuantity>Quantity: {cartItem.cartQuantity}</ItemQuantity>
                              <ItemSize>Size: {cartItem.size}</ItemSize>
                              <ItemColor hex={cartItem.colorHex}></ItemColor>
                            </ItemDetailsWrapper>


                            <ItemPriceWrapper>
                              <ItemPrice>${cartItem.price}</ItemPrice>
                            </ItemPriceWrapper>
                          </>
                        </ItemWrapper>
                      ))}
                      <PriceTotalsWrapper>
                        <TitlesWrapper>
                          <SubTotalTitle>Subtotal: </SubTotalTitle>
                          <ShippingTitle>Shipping: </ShippingTitle>
                          <TaxTitle>Quantity:</TaxTitle>
                          <PriceTitle>Total:</PriceTitle>

                        </TitlesWrapper>
                        <NumbersWrapper>
                          <SubTotal>${o.order.cartTotalAmount}</SubTotal>
                          <Shipping>FREE</Shipping>
                          <Tax>{o.order.cartTotalQuantity}</Tax>
                          <Price>${o.order.cartTotalAmount}</Price>
                        </NumbersWrapper>

                      </PriceTotalsWrapper>

                      <ShippingAddressWrapper>
                        <ShippingAddressTitle>Shipping Address</ShippingAddressTitle>

                        <Address>
                          {o.order.userInfo.fullName}
                          <br />
                          {o.order.shippingAddress.line1}
                          <br />
                          {o.order.shippingAddress.city},{" "}
                          {o.order.shippingAddress.state}{" "}
                          {o.order.shippingAddress.postal_code}
                        </Address>


                      </ShippingAddressWrapper>
                      <div>
                        <h4>Payment Method</h4>
                        <OrderUi pay={o.order.paymentMethod} />
                      </div>

                    </Dropdown>



                  </DropDownContainer>
                ) : (
                  <DisplayContainer>
                    <TitleWrapper>
                      <SubTitle>Order #{o._id} —
                        <span className={o.isDelivered === true ? `green` : `red`}>{o.isDelivered === true ? "Fulfilled" : "Not Delivered"}</span>

                      </SubTitle>
                      <SubTitle>Placed On: <span>{o.createdAt.substring(0, 10)}</span></SubTitle>

                    </TitleWrapper>

                    {open === index ? (

                      <Preview onClick={() => toggle(index)}>

                        <ArrowContainer onClick={() => toggle(index)}>
                          {open === index ? (
                            <HiMinus />
                          ) : (
                            <HiPlus />
                          )}
                        </ArrowContainer>
                      </Preview>

                    ) : (
                      <Preview onClick={() => toggle(index)}>
                        <PreviewInfo>
                          <CartItemsContainer>

                            <IC>
                              {o.order.cartItems?.map((cartItem) => (
                                <>
                                  <ImgContainer>
                                    <Items src={cartItem.main_img} />
                                    <Qty>{cartItem.cartQuantity}</Qty>
                                  </ImgContainer>
                                </>
                              ))}
                            </IC>
                          </CartItemsContainer>
                        </PreviewInfo>
                        <ArrowContainer onClick={() => toggle(index)}>
                          {open === index ? (
                            <HiMinus className="upArrow" />
                          ) : (
                            <HiPlus className="downArrow" />

                          )}
                        </ArrowContainer>
                      </Preview>
                    )}
                  </DisplayContainer>
                )}

              </AccordionContainer>
            ))}

          </>
        )}
      </OrdersPage>
    </>
  );
}

