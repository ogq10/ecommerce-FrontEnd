import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./globalStyles";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ToastContainer } from "react-toastify";
//added
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

// if (process.env.NODE_ENV === 'production') disableReactDevTools()
let persistor = persistStore(store);

const stripePromise = loadStripe(
  "pk_test_51L2tU3GMNEcDYYZgdpSmsCvNYoqs2wC96WpaiujWFuYH8bTJRSCsYTANutGV4pzcRWLpfR0lVRW5IFsfPDQjGJbQ003K2dmgCy"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <ToastContainer />
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
