import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeFromWishlist } from "../../redux/features/wishlistSlice";

const WishlistCardWrapper = styled.div`
  width: 444px;
  height: 44rem;
  display: flex;
  flex-direction: column;
  text-align: Center;

  @media (max-width: 768px) {
    width: 313px;
    height: 40rem;
  }
`;

const WishlistImgContainer = styled.div`
  cursor: pointer;
  height: 70%;
`;

const WishlistImg = styled.img`
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 3.9rem;

  width: -webkit-fill-available;
`;

const WishlistTitle = styled.h2``;
const WishlistPrice = styled.p`
  color: #fff;
  opacity: 0.693;
`;

const ColorSpan = styled.span`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: ${(props) => props.colorHex};
  margin: 0.69rem auto;
`;

const RemoveButton = styled.button`
  border: none;
  background-color: transparent;
  margin: auto;
  font-size: 14px;
  color: #fff;
  opacity: 0.963;

  &:hover {
    color: #f96666;
  }
`;

export default function WishlistCard({ wishlist }) {
  const dispatch = useDispatch();

  return (
    <WishlistCardWrapper>
      <WishlistImgContainer>
        <WishlistImg src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1544&q=80" />
      </WishlistImgContainer>
      <WishlistTitle>{wishlist.title}</WishlistTitle>
      <WishlistPrice>${wishlist.price}</WishlistPrice>
      <ColorSpan colorHex={wishlist.colorHex} className="color"></ColorSpan>
      <RemoveButton onClick={() => dispatch(removeFromWishlist(wishlist))}>
        Remove
      </RemoveButton>
    </WishlistCardWrapper>
  );
}
