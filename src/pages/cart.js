import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { motion, AnimatePresence } from "framer-motion";

import {
  PageTitle,
  Title,
  CartPage,
  Container,
  EmptyText,
  IconContainer,
  CartIcon,
} from "./cartStyles.js";

import SingleCartItem from "../components/SingleCartItem/index.js";
import ShippingForm from "../components/Stripe/ShippingForm/ShippingForm.js";
import SplitForm from "../components/Stripe/SplitForm.js";
import SimpleLogin from "../components/SimpleLogin/index.js";
import "./cart.css";

export default function Cart() {
  const [width, setWidth] = useState(0);

  const cartContainer = useRef();
  const formContainer = useRef();

  useEffect(() => {
    if (cartContainer.current) {
      setWidth(
        cartContainer.current.scrollWidth - cartContainer.current.offsetWidth
      );
    }

    if (formContainer.current) {
      setWidth(
        formContainer.current.scrollWidth - formContainer.current.offsetWidth
      );
    }
  }, [cartContainer, formContainer, width]);

  const cart = useSelector((state) => state.cart);
  return (
    <>
      <PageTitle>
        <Title>Shopping Cart</Title>
        <Breadcrumbs style={{ color: "#f2f6fb" }} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/shop">
            Shop
          </Link>
          <Typography color="inherit">My Shopping Cart</Typography>
        </Breadcrumbs>
      </PageTitle>
      <CartPage>
        {cart.cartItems.length <= 0 ? (
          <Container>
            <IconContainer>
              <EmptyText>your shopping cart is empty.</EmptyText>
              <CartIcon
                src="https://ontallme.sirv.com/icons/noun-shopping-cart-sad-1700378.png"
                alt="Created by Seb Cornelius"
              />
            </IconContainer>
          </Container>
        ) : (
          <>
            <div className="cart">
              <motion.div
                layout
                ref={cartContainer}
                className="cartContainer"
                whileTap={{ cursor: "grabbing" }}
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                  className="inner-cartContainer"
                >
                  {cart.cartItems.map((item) => (
                    <>
                      <AnimatePresence>
                        <SingleCartItem item={item} />
                      </AnimatePresence>
                    </>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div className="formWrapper">
                <SimpleLogin />
                <ShippingForm  />
                <SplitForm />
              </motion.div>
            </div>
          </>
        )}
      </CartPage>
    </>
  );
}
