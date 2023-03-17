import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  userInfo: {},
  cartItems: [],
  // localStorage.getItem("cartItems")
  //   ? JSON.parse(localStorage.getItem("cartItems"))
  //   : [],
  shippingAddress: {},
  // localStorage.getItem("address")
  //   ? JSON.parse(localStorage.getItem("address"))
  //   : {},
  paymentMethod: {},
  // localStorage.getItem("payment")
  //   ? JSON.parse(localStorage.getItem("payment"))
  //   : {},

  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addUserToCart(state, action) {
      state.userInfo = action.payload;
    },
    addAddressToCart(state, action) {
      state.shippingAddress = action.payload;
    },
    addPItoCart(state, action) {
      state.paymentMethod = action.payload;
    },
    addToCart(state, action) {
      console.log(" the payload ", action.payload)


      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item._id === action.payload._id && item.sizeChosen === action.payload.sizeChosen
      );
      console.log("the item index", itemIndex)
      // console.log(action.payload.size[action.payload.sizeIndex].count -= state.cartItems[itemIndex].cartQuantity)

      // console.log(state.cartItems[itemIndex].size[action.payload.sizeIndex].count, 'CART CTTTTTTTTTT')

      if (itemIndex >= 0) {

        // if (state.cartItems[itemIndex].size[action.payload.sizeIndex].count < state.cartItems[itemIndex].cartQuantity) {

        state.cartItems[itemIndex].cartQuantity += 1;

        console.log("cartQty", state.cartItems[itemIndex].cartQuantity)
        toast(` ➕ Increased ${action.payload.title} Quantity By 1`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        if (state.cartItems[itemIndex].cartQuantity > state.cartItems[itemIndex].inventoryCount) {
          state.cartItems[itemIndex].cartQuantity = state.cartItems[itemIndex].inventoryCount;
        }

      } else {

        const tempProduct = { ...action.payload, cartQuantity: 1 }; //product we are recieving from action creator when we click add to cart, with an additional property called cart qty
        //instead of passing the product we pass action.payload
        //   state.cartItems.push(action.payload);
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.title} added to cart`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

      }


      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item._id === action.payload._id && item.sizeChosen === action.payload.sizeChosen
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;


        toast(`Decreased ${action.payload.title} Quantity By 1`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (state.cartItems[itemIndex].cartQuantity <= 1) {
        const filteredItems = state.cartItems.filter(
          (cartItem) =>
            cartItem._id === action.payload._id &&
            cartItem.sizeChosen !== action.payload.sizeChosen
        );
        state.cartItems = filteredItems;
        // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        toast(`${action.payload.title} Removed From Cart`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const filteredItems = state.cartItems.filter(
        (cartItem) =>
          cartItem._id === action.payload._id &&
          cartItem.sizeChosen !== action.payload.sizeChosen
      );
      state.cartItems = filteredItems;
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`${action.payload.title} Removed From Cart`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    },
    clearCart(state) {
      state.cartItems = [];
      state.paymentMethod = {};
      state.shippingAddress = {};
      toast.error("Cart Has Been Cleared", {
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
    getTotalAndQuantity(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
  extraReducers: {},
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotalAndQuantity,
  saveShippingAddress,
  saveUserInfo,
  addPaymentToCart,
  addAddressToCart,
  addUserToCart,
  addPItoCart,
} = cartSlice.actions;

export default cartSlice.reducer;
