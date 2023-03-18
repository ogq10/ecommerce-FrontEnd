import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

import {
  useStripe,
  useElements,
  CardElement,
  Elements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import { createOrder, createOrderGuest } from "../../redux/features/orderSlice";
import {
  addUserToCart,
  addPItoCart,
  clearCart,
  getTotalAndQuantity,
} from "../../redux/features/cartSlice";
// import { addPaymentToCart, clearCart } from "../../redux/features/cartSlice";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#f2f6fb",
      color: "#f2f6fb",
      fontWeight: "500",

      fontSize: "14px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fff",
      },
      "::placeholder": {
        color: "#fff",
      },
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "#FFC7EE",
    },
  },
};

const CardField = ({ onChange }) => (
  <div>
    <CardElement options={CARD_OPTIONS} onChange={onChange} />
  </div>
);

const Field = ({
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
  label,
}) => (
  <div className="form">
    <div className="field">
      <span className="field__label"> {label} </span>
      <input
        className="field__input"
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

const SubmitButton = ({ processing, error, children, disabled }) => (
  <button
    className={`SubmitButton ${error ? "SubmitButton--error" : ""}`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? "Processing..." : children}
  </button>
);

const ErrorMessage = ({ children }) => (
  <div
    className="ErrorMessage"
    style={{ width: "inherit", margin: "8px", color: "white" }}
    role="alert"
  >
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="red"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="white"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
    {children}
  </div>
);

export default function SplitForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const address = useSelector((state) => state.cart.shippingAddress);
  const auth = useSelector((state) => state.auth);
  const guest = useSelector((state) => state.guest);

  console.log(auth);
  const [client_Secret, setClientSecret] = useState("");

  console.log({ address });
  //added
  var size = Object.keys(address).length;
  const [error, setError] = useState(null);
  const [cardError, setCardError] = useState(null);
  let guestCheckout = sessionStorage.getItem("guest");
  console.log(guestCheckout, "the guest checkout");
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [billingDetails, setBillingDetails] = useState({
    phone: "",
    name: "",
  });
  // const [isSuccess, setIsSuccess] = useState(false);
  console.log(processing);
  useEffect(() => {
    dispatch(getTotalAndQuantity());
  }, [cart.cartItems.length]);

  useEffect(() => {
    if (!client_Secret) navigate("/cart");
  }, [client_Secret]);

  useEffect(() => {
    if (cart.cartItems.length >= 1) {
      async function getClientSecret() {
        const res = await axios.post(
          "https://makadsaapi.onrender.com/api/stripe/create-payment-intent",
          {
            amount: cart.cartTotalAmount.toFixed(2) * 100,
            currency: "USD",
          }
        );

        console.log("THE CLIENT SECRET", res.data);
        setClientSecret(res.data);
        console.log("THE CLIENT SECRET", client_Secret);
      }
      getClientSecret();
    }
  }, []);

  const { createOrderStatus, order } = useSelector((state) => state.order);
  console.log("my order", order._id, createOrderStatus);

  console.log("the cart >>>>>>>>> ", cart);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    if (error) {
      elements.getElement("card").focus();
      return;
    }

    if (cardComplete) {
      setProcessing(true);
    }

    const payload = await stripe.confirmCardPayment(
      client_Secret.clientSecret,
      {
        payment_method: {
          type: "card",
          card: elements.getElement(CardElement),
          billing_details: {
            address,
            name: billingDetails.name,
            phone: billingDetails.phone,
            email: cart.userInfo.email,
          },
        },
        
      }
    );
    if (payload.error) {
      setCardError(payload.error.message);
      setProcessing(false);
    } else {
      setPaymentMethod(payload.paymentIntent.payment_method);
    }

    console.log("Payment Intent >>>>>>> ", payload);
    dispatch(addPItoCart(payload.paymentIntent.payment_method));
    dispatch(addUserToCart(auth));


    // dispatch(addPItoCart(payload.paymentIntent.payment_method));
    // dispatch(createOrder({ user: auth._id, order: cart}));
  };
  useEffect(() => {
    if (guestCheckout === "no") {
      if (paymentMethod && address) {
        dispatch(createOrder({ user: auth._id, order: cart }));
      }
    } else {
      if (paymentMethod && address) {
        dispatch(createOrderGuest({ userInfo: auth._id, order: cart }));
      }
    }
  }, [paymentMethod, address]);

  useEffect(() => {
    if (createOrderStatus === "Fulfilled...") {
      navigate(`/orders/${order._id}`);
      dispatch(clearCart());
      sessionStorage.removeItem("token");
    }
  }, [createOrderStatus]);

  return (
    <div className="container">
      <h1>Payment</h1>

      <p>Please enter your payment details.</p>

      <form onSubmit={handleSubmit}>
        <Field
          label="Name On Card"
          id="name"
          type="text"
          placeholder="Jane Doe"
          required
          autoComplete="name"
          value={billingDetails.name}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, name: e.target.value });
          }}
        />

        <Field
          label="Phone"
          id="phone"
          type="tel"
          placeholder="(941) 555-0123"
          required
          autoComplete="tel"
          value={billingDetails.phone}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, phone: e.target.value });
          }}
        />

        <fieldset className="field">
          <CardField
            onChange={(e) => {
              setError(e.error);
              setCardComplete(e.complete);
            }}
          />
        </fieldset>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        {cardError && <ErrorMessage>{cardError}</ErrorMessage>}
        <SubmitButton
          processing={processing}
          error={error}
          disabled={!stripe || size < 1}
        >
          Pay ${cart.cartTotalAmount}
        </SubmitButton>
      </form>
    </div>
  );
}
