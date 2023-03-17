import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./bag.css";
import styled from "styled-components/macro";

import {
  addToCart,
  decreaseCart,
  getTotalAndQuantity,
} from "../../redux/features/cartSlice";

import { NavLink } from "react-router-dom";
export default function SingleCartItem({ item }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("cart item", item);
  useEffect(() => {
    dispatch(getTotalAndQuantity());
  }, [cart, dispatch]);

  const handleDecreaseFromCart = (item) => {
    dispatch(decreaseCart(item));
  };
  const handleIncreaseCart = (item) => {
    dispatch(addToCart(item));
  };

  const ColorSpan = styled.span`
 
    position: relative;
    width: 50%;
    height: 100%;
    background-color: ${(props) => props.colorHex};
      
  }
  `;

  return (
    <div layout="true">
      <div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout="true"
        className="bag"
      >
        <p className="card-price">
          <span className="thespan">{item.title}</span> <br /> ${item.price}
        </p>
        <div className="bagbg">
          <img
            className="rope"
            src="https://res.cloudinary.com/drbpdytwx/image/upload/v1656783143/line-removebg-preview_dumrfg.png"
            alt="rope"
          />

          <NavLink to={`/products/${item._id}`}>
            <img
              className="cart_image"
              src="https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png"
              alt={item.title}
            />
          </NavLink>
          <span className="line-through"></span>
          <div className="value-button">
            <button
              className="decrease"
              type="button"
              onClick={() => handleDecreaseFromCart(item)}
            >
              -
            </button>
            {item.cartQuantity > item.inventoryCount ? (<span className="number">{item.cartQuantity}</span>) : (<span className="number">{item.cartQuantity}</span>)}

            <button
              className="increase"
              type="button"
              onClick={() => handleIncreaseCart(item)}
            >
              +
            </button>
          </div>

          <div className="detail-button">
            <span className="size">{item.sizeChosen}</span>
            <ColorSpan colorHex={item.colorHex} className="color"></ColorSpan>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <select
        options={product.variants.size.map((size) => ({
          label: `${size}`,
          value: size,
        }))}
        onChange={onSelectedSizeChange}
      /> */
}

{
  /* <ButtonGroup
        variant="text"
        size="small"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          color: "#f2f6fb",
        }}
      >
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            color: "#f2f6fb",
            fontSize: "24px",
          }}
        >
          <AiOutlineHeart />
        </Button>
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            color: "#f2f6fb",
            fontSize: "24px",
          }}
        >
          <NavLink
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              color: "#f2f6fb",
              fontSize: "24px",
            }}
            to={`/products/${product._id}`}
          >
            <AiOutlineInfoCircle />
          </NavLink>
        </Button>

        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            color: "#f2f6fb",
            fontSize: "24px",
          }}
        >
          <IoAddCircleOutline onClick={() => handleAddToCart(product)} />
        </Button>
      </ButtonGroup> */
}
