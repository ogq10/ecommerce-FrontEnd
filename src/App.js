import { Route, Routes } from "react-router-dom";
import {
  Home,
  Shop,
  SignIn,
  SignUp,
  Cart,
  Order,
  ForgotPassword,
  Wishlist,
  Error,
  AccountOrders,
  AccountProfile
} from "./pages";
import ResetPassword from "./pages/resetPassword";
import SingleProduct from "./pages/singleProduct";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/Shop/:category" element={<Shop />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders/:id" element={<Order />} />
      <Route path="/account/orders" element={<AccountOrders />} />
      <Route path="/*" element={<Error />} />
      <Route path="/account/wishlist" element={<Wishlist />} />
      <Route path="/account/profile" element={<AccountProfile />} />


    </Routes>
  );
}
