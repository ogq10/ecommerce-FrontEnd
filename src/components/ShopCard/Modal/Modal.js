import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import SizeButtonsModal from "./sizeButtonsModal";
import { addToCart } from "../../../redux/features/cartSlice";
import { useDispatch } from "react-redux";
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
export default function Modal({ product, modalOpen, setModalOpen }) {
  const [width, setWidth] = useState(0);

  const [selectedSize, setSelectedSize] = useState("None");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();

  const setSizeAndSizeIndex = (s) => {
    setSelectedSize(s.size);
    setSelectedIndex(s.index);
  };

  const handleAddToCart = (product) => {
    //dispatch our action creator
    dispatch(addToCart(product));
  };

  useEffect(() => {
    setQty(product?.size[selectedIndex].count);
  }, [selectedSize]);
  console.log("vallll", qty);

  const carousel = useRef();
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [width]);
  

  return (
    <>
      <Backdrop onClick={() => setModalOpen(!modalOpen)}>
        <motion.div
          className="modal"
          variants={dropIn}
          animate="visible"
          initial="hidden"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            onClick={() => setModalOpen(!modalOpen)}
            className="cancel-icon"
            src="https://ontallme.sirv.com/icons/cancel_icon.svg"
          />
          <h3 className="quickShoptitle">Quick Shop</h3>
          <div className="infoContainer">
            <h3 className="product__title">{product.title}</h3>
            <p className="product__description">{product.description}</p>

            <p className="product__selectSize">Select Size:</p>
            <SizeButtonsModal
              qty={qty}
              buttonClick={setSizeAndSizeIndex}
              selectedSize={selectedSize}
              data={product}
            />
            <p className="product__confirm">Confirm Selection:</p>

            <button
              disabled={
                qty <= 0 || qty === undefined || selectedSize === "None"
              }
              className="addButton"
              onClick={() =>
                handleAddToCart({ ...product, sizeChosen: selectedSize })
              }
            >
              Add To Cart ${product.price}
            </button>
          </div>

          <div ref={carousel} className="slideWrapper">
            <motion.div

              className="carousel"
              layout
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="inner-carousel"
              >
                {product.slide_images.map((image) => (
                  <img className="slideImages" src={image} />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Backdrop>
    </>
  );
}
