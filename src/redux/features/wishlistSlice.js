import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  wishlistItems: [],
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const itemIndex = state.wishlistItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.wishlistItems[itemIndex] = action.payload;
      } else {
        const tempProduct = { ...action.payload }; //product we are recieving from action creator when we click add to cart, with an additional property called cart qty
        //instead of passing the product we pass action.payload
        //   state.wishlistItems.push(action.payload);
        state.wishlistItems.push(tempProduct);
      }
    },

    removeFromWishlist(state, action) {
      const filteredItems = state.wishlistItems.filter(
        (item) => item._id !== action.payload._id
      );
      state.wishlistItems = filteredItems;
    },
    clearWishlist(state) {
      state.wishlistItems = [];

      toast.error(" Wishlist Has Been Cleared", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
  extraReducers: {},
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
