import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  token: localStorage.getItem("token") || "",
  fullName: "",
  email: "",
  _id: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(
        "/api/auth/register",
        {
          fullName: values.fullName,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        }
      );
      localStorage.setItem("token", token.data);
      return token.data; //adds to action.payload
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post("/api/auth/login", {
        email: values.email,
        password: values.password,
      });
      localStorage.setItem("token", token.data);
      return token.data; //adds to action.payload
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    //because we are not using http request, otherwise i need to createasyncthunk and handle state in extra reducers
    loadUser(state) {
      const token = state.token;
      if (token) {
        const user = jwtDecode(token);

        return {
          ...state,
          token,
          fullName: user.fullName,
          email: user.email,
          _id: user._id,
          wishlistItems: user.wishlistItems,
          userLoaded: true,
        };
      }
    },
    logoutUser(state, action) {
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        fullName: "",
        email: "",
        _id: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",

        userLoaded: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      return { ...state, registerStatus: "Pending..." };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        //if we have token, decode token and update state
        return {
          ...state,
          registerStatus: "Fulfilled!",
          token: action.payload,
          fullName: user.fullName,
          email: user.email,
          _id: user._id,
        };
      } else {
        return state;
      }
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerError: action.payload,
        registerStatus: "Rejected!",
      };
    });

    builder.addCase(loginUser.pending, (state) => {
      return { ...state, loginStatus: "Pending..." };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        //if we have token, decode token and update state
        return {
          ...state,
          loginStatus: "Fulfilled!",
          token: action.payload,
          fullName: user.fullName,
          email: user.email,
          _id: user._id,
        };
      } else {
        return state;
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginError: action.payload,
        loginStatus: "Rejected!",
      };
    });
  },
});

export const { loadUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
