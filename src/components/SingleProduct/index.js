import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { BsArrowRightShort, BsBag } from "react-icons/bs";
import { Breadcrumbs, Typography, Link, Slider } from "@mui/material";

import {
  StickyContainer,
  CartContainer,
  Icon,
  AddToCartBtn,
  CheckoutContainer,
  Arrow,
  ProceedToCheckout,
  BreadcrumbWrapper,
  Seperator,
  InfoContainer,
  TitlePriceContainer,
  TitleContainer,
  Title,
  Price,
  PriceContainer,
  Instock,
  Description,
  IncTax,
  DetailsContainer,
  Container,
  SizeContainer,
  SizeGuideContainer,
  SizeGuide,
  SliderBox,
  SliderWrapper,
  SliderImg,
  InstockContainer,
} from "./styles/SingleProduct";
import { addToCart } from "../../redux/features/cartSlice";
import SizeButtons from "./sizeButtons";
import Accordion from "./Accordion";
import { useGetProductByIdQuery } from "../../redux/RTK/productsApi";
import axios from "axios";

export default function SingleProductUI({ data }) {

  const cart = useSelector((state) => state.cart);


  const [selectedSize, setSelectedSize] = useState("None");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [currIndex, setCurrIndex] = useState(0);
  const [qty, setQty] = useState(0);
  const [product, setProduct] = useState(null);

  const [szCount, setSzCount] = useState(null);

  const [sizeIndex, setSizeIndex] = useState(null);
  const dispatch = useDispatch();

  const setSizeAndSizeIndex = (s) => {
    setSelectedSize(s.size);
    setSelectedIndex(s.index);
    setSzCount(s.sizeCount);
    setSizeIndex(s._id);
  };
  // console.log("THE SELECTED SIZE", selectedSize)
  // console.log(" THE SELECTED INDEX ", selectedIndex)
  console.log('THE COUNT', szCount)
  console.log(" the count index like 0 1 2 ", sizeIndex)


  // console.log(data.size.map(el => el._id === sizeIndex ? Object.assign({}, el, 1) : el))
  // function updateQTY(qty) {

  //   axios
  //     .put("http://localhost:5000/api/products/6302ceea176c8b5edc43c8f1", {
  //       size: 12
  //     })
  //     .then((response) => {
  //       console.log('reposne data', response.data)
  //       // setProduct(response.data);
  //     })
  // }


  console.log(" the product", product)


  const handleAddToCart = (item) => {

    //dispatch our action creator
    dispatch(addToCart(item));
    setSzCount(szCount - 1)


  };

  const [v, setV] = useState([]);

  useEffect(() => {
    setQty(data?.size[selectedIndex]?.count);
    setV(cart.cartItems.map((item) => item.cartQuantity))

  }, [selectedSize, selectedIndex, cart]);


console.log(data?.size[selectedIndex]?.count)
  // console.log("cart", cart.cartItems[1].cartQuantity)

  // console.log("THE QTY AMOUNT >>> ", qty)

  // console.log("SELECTED INDEX >> ", selectedIndex);

  const handleOnChangeSlider = (event, currIndex) => {
    setCurrIndex(currIndex);
  };
  // console.log(" the data >>>>>>>> ", data?.size[selectedIndex]?.count)
  return (
    <>


      <SliderWrapper>
        <SliderImg src={`https://nkeywory.sirv.com/360/${currIndex}.jpeg`} />

        <Slider
          defaultValue={0}
          max={4}
          value={currIndex}
          valueLabelDisplay="auto"
          onChange={handleOnChangeSlider}
        />
      </SliderWrapper>


      <Container>
        <InfoContainer>
          {selectedSize === "None" ? (
            <Instock>Select Size</Instock>
          ) : qty > 0 && qty < 15 && szCount > 0 ? (

            <InstockContainer>

              <Instock style={{ color: "green" }}>In Stock </Instock> <span className="specificqty"> Only {szCount} left in stock</span>
            </InstockContainer>

          ) : (
            <Instock style={{ color: "#D70040" }}>Out of Stock</Instock>
          )}

          <TitlePriceContainer>
            <TitleContainer>
              <Title>{data?.title}</Title>
            </TitleContainer>
            <PriceContainer>
              <Price>${data?.price}</Price>
              <IncTax>Inc. Tax</IncTax>
            </PriceContainer>
          </TitlePriceContainer>
          <Description>{data?.description}</Description>
        </InfoContainer>

        <DetailsContainer>
          <SizeContainer>
            <SizeButtons
              data={data}
              qty={qty}
              buttonClick={setSizeAndSizeIndex}

              selectedSize={selectedSize}
            />
            <SizeGuideContainer>
              <SizeGuide>Size Guide</SizeGuide>
            </SizeGuideContainer>
          </SizeContainer>

          <Accordion data={data} />
        </DetailsContainer>
      </Container>

      <StickyContainer>
        <CartContainer>
          <Icon>
            <BsBag />
          </Icon>


          <AddToCartBtn
            disabled={
              qty <= 0 ||
              szCount == 0 ||
              qty === undefined ||
              selectedSize === "None"
            }
            // onClick={() => handleAddToCart({ ...data, size: selectedSize, countUsed: szCount})}
            onClick={() =>
              handleAddToCart({ ...data, sizeChosen: selectedSize, sizeIndex: selectedIndex, countUsed: szCount, inventoryCount: qty })

            }

          >
            Add to cart
          </AddToCartBtn>
        </CartContainer>
        <CheckoutContainer>
          <Arrow>
            <BsArrowRightShort />
          </Arrow>
          <ProceedToCheckout>Proceed To Checkout</ProceedToCheckout>
        </CheckoutContainer>
      </StickyContainer>
    </>
  );
}

