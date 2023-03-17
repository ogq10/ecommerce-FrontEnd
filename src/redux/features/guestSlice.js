import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";

const initialState = {
  token: sessionStorage.getItem("token") || "",

  email: "",
  _id: "",
  guestRegister: "",
  guestStatus: "",
  guestError: "",
};

export const registerGuest = createAsyncThunk(
  "guest/registerGuest",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(
        "https://officialecomm.herokuapp.com/api/auth/registerGuest",
        {
          email: values.email,
        }
      );
      sessionStorage.setItem("token", token.data);
      return token.data; //adds to action.payload
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const guestSlice = createSlice({
  name: "guest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerGuest.pending, (state) => {
      return { ...state, guestStatus: "Pending..." };
    });
    builder.addCase(registerGuest.fulfilled, (state, action) => {
      if (action.payload) {
        const guestUser = jwtDecode(action.payload);
        //if we have token, decode token and update state
        return {
          ...state,
          guestStatus: "Fulfilled!",
          token: action.payload,
          email: guestUser.email,
          _id: guestUser._id,
        };
      } else {
        return state;
      }
    });
    builder.addCase(registerGuest.rejected, (state, action) => {
      return {
        ...state,
        guestError: action.payload,
        guestStatus: "Rejected!",
      };
    });
  },
});

// export const {} = guestSlice.actions;
export default guestSlice.reducer;
