import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  verifyForgotPasswordStatus: "",
  verifyForgotPasswordError: "",
  verifyLinkError: "",
  verifyLinkStatus: "",
  response: "",
};


export const forgotPassword = createAsyncThunk(

  "auth/verifyForgotPassword",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://officialecomm.herokuapp.com/api/auth/forgot-password",
        {
          email: values.email,
        }
      );
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const resetProfile = createAsyncThunk(
  "auth/resetProfile",
  async (values, { rejectWithValue }) => {
    try {
      const ttoken = localStorage.getItem("token");
      const response = await axios.put(
        "https://officialecomm.herokuapp.com/api/users/profile",

        {
          email: values.newEmail,
          password: values.password,

        },

        {
          headers: {
            token: `Bearer ${ttoken}`,
          }
        },
      );
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

 
const verifyForgotPasswordSlice = createSlice({
  name: "verifyForgotPassword",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      return {
        ...state,
        verifyForgotPasswordStatus: "Fulfilled!",
        response: action.payload,
      };
    });

    builder.addCase(forgotPassword.pending, (state) => {
      return { ...state, verifyForgotPasswordStatus: "Pending..." };
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      return {
        ...state,
        verifyForgotPasswordError: action.payload,
        verifyForgotPasswordStatus: "Rejected!",
      };
    });
  },
});

export default verifyForgotPasswordSlice.reducer;
