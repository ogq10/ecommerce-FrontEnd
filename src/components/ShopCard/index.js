import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  CardWrapper,
  ImgWrapper,
  Img,
  CardTitle,
  CardPrice,
  Icon,
  InfoWrapper,
  ButtonWrapper,
  TitleWrapper,
  PriceWrapper,
} from "./styles/ShopCard";
import Modal from "./Modal/Modal";
import {
  addToWishlist,

} from "../../redux/features/wishlistSlice";
export default function ShopCard({ product }) {
  const [modalOpen, setModalOpen] = useState(false);
  const auth = useSelector(state => state.auth)

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/signin`;
    navigate(path);
  }



  const { wishlistItems } = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();
  const { filter, description, details, size, ...wishlistProduct } = product;
  const openUp = () => {
    setModalOpen(!modalOpen);
    window.scrollTo(0, 0);
  };

  let storedItem = wishlistItems.find((o) => o._id === product._id);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
    >
      <CardWrapper>
        {auth._id ? (
          <Icon>
            <div onClick={() => dispatch(addToWishlist(wishlistProduct))}>
              <AiOutlineHeart
                className={`icon-${storedItem ? "red" : "white"}`}
              />
            </div>
          </Icon>
        ) : (<Icon>
          <div onClick={routeChange}>

            <AiOutlineHeart
              className={`icon-${storedItem ? "red" : "white"}`}
            />
          </div>

        </Icon>)}


        <InfoWrapper>
          <TitleWrapper>
            <CardTitle>{product.title} </CardTitle>
          </TitleWrapper>
          <PriceWrapper>
            <CardPrice>${product.price}</CardPrice>
          </PriceWrapper>
        </InfoWrapper>

        <ImgWrapper>
          <NavLink to={`/products/${product._id}`}>
            <Img
              src="https://ontallme.sirv.com/test/h-embroidered-t-shirt--072025HA01-worn-5-0-0-800-800_b-removebg-preview.png"
              onMouseOver={(e) => (e.currentTarget.src = product.main_img)}
              onMouseOut={(e) =>
              (e.currentTarget.src =
                "https://ontallme.sirv.com/test/h-embroidered-t-shirt--072025HA01-worn-5-0-0-800-800_b-removebg-preview.png")
              }
            />
          </NavLink>
        </ImgWrapper>

        <ButtonWrapper>
          <>
            <motion.button
              className="quickAddbtn"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => openUp()}
            >
              Quick Add
            </motion.button>
          </>
        </ButtonWrapper>
      </CardWrapper>
      <AnimatePresence
        exitBeforeEnter={true}
        onExitComplete={() => null}
        initial={false}
      >
        {modalOpen && (
          <Modal
            product={product}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// src="https://res.cloudinary.com/drbpdytwx/image/upload/v1656783143/line-removebg-preview_dumrfg.png"
// {product.title}
//       {product.price}
//       <NavLink to={`/products/${product._id}`}>
//         src="https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png"
//         alt={product.title}
//       </NavLink>
//       {/* <select
//         options={product.variants.size.map((size) => ({
//           label: `${size}`,
//           value: size,
//         }))}
//         onChange={onSelectedSizeChange}
//       /> */}
//       onClick={() => handleAddToCart(product)}

{
  /* {buttonSelect ? (
            <PlusButton
              disabled={
                qty <= 0 || qty === undefined || selectedSize === "None"
              }
              onClick={() =>
                handleAddToCart({ ...product, size: selectedSize })
              }
            >
              + Add To Cart
              {/* <BsCartPlus /> */
}

// </PlusButton>
// ) : (
// )}
//         </ButtonWrapper> */}
