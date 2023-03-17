import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  createOrderStatus: "",
  creatOrderError: "",
  order: [],
};

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (cart, { rejectWithValue }) => {
    try {
      const res = await axios.post("https://officialecomm.herokuapp.com/api/orders/", {
        order: cart,
      });

      console.log(" order slice data", res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);


export const createOrderGuest = createAsyncThunk(
  "order/createOrder",
  async (cart, { rejectWithValue }) => {
    try {
      const res = await axios.post("https://officialecomm.herokuapp.com/orders/guest", {
        order: cart,
      });

      console.log(" order slice data", res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOrder.pending, (state) => {
      return { ...state, createOrderStatus: "Pending..." };
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      return {
        ...state,
        order: action.payload,
        createOrderStatus: "Fulfilled...",
      };
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      return {
        ...state,
        createOrderStatus: "Rejected...",
        createOrderError: action.payload.message,
      };
    });
  },
});

export const {} = orderSlice.actions;

export default orderSlice.reducer;
