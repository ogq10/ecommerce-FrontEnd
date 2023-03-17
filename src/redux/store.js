import { configureStore } from "@reduxjs/toolkit";
import productReducer, { fetchAllProducts } from "./features/productSlice";

import { productsApi } from "./RTK/productsApi";
import cartReducer, { getTotalAndQuantity } from "./features/cartSlice";
import wishlistReducer from "./features/wishlistSlice";
import guestReducer from "./features/guestSlice";

import authReducer, { loadUser } from "./features/authSlice";
import verifyForgotPasswordReducer from "./features/verifyForgottenPasswordSlice";
import orderReducer from "./features/orderSlice";
import { ordersApi } from "./RTK/ordersApi";
import { stripeApi } from "./RTK/stripeApi";

//added
import { combineReducers } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

//added
const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["order", "verifyForgotPassword", "guest", "products"],
};

//added
export const rootReducers = combineReducers({
  products: productReducer,
  cart: cartReducer,
  auth: authReducer,
  order: orderReducer,
  guest: guestReducer,
  wishlist: wishlistReducer,
  verifyForgotPassword: verifyForgotPasswordReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [ordersApi.reducerPath]: ordersApi.reducer,
  [stripeApi.reducerPath]: stripeApi.reducer,
});

//added
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  [ordersApi.reducerPath]: ordersApi.reducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApi.middleware),
    devTools: false
  //added
});

// store.dispatch(fetchAllProducts());
store.dispatch(getTotalAndQuantity());
store.dispatch(loadUser(null));

export default store;
