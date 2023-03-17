import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: null,
  error: null,
};

// export const fetchAllProducts = createAsyncThunk(
//   "products/fetchAllProducts",
//   async ({ rejectWithValue }) => {
//     try {
//       //fetch data using axios
//       const response = await axios.get("http://localhost:5000/api/products");
//       return response?.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default productsSlice.reducer;
