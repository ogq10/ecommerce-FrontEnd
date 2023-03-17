import axios from "axios";
import React, { useEffect, useState } from "react";
import {

  OrderContainer,
  PaymentContainer,

  Img,
  AmexImg,
  Logo,
  PaymentInfo,
  IC,
} from "./styles/OrderUi";

function getLogo(br) {
  if (br === "visa") {
    return (
      <Img
        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
        alt="Visa"
      />
    );
  }

  if (br === "discover") {
    return (
      <Img
        src="https://1000logos.net/wp-content/uploads/2021/05/Discover-logo.png"
        alt="Discover"
      />
    );
  }

  if (br === "mastercard") {
    return (
      <Img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png"
        alt="Mastercard"
      />
    );
  }

  if (br === "amex") {
    return (
      <AmexImg
        src="https://1000logos.net/wp-content/uploads/2016/10/American-Express-logo.png"
        alt="American Express"
      />
    );
  }
}

export default function OrderUi({ car, ship, pay }) {
  const [PIData, setPIData] = useState({});
  useEffect(() => {
    if (pay) {
      async function getPI() {
        const res = await axios.get(
          `http://localhost:5000/api/stripe/payment_methods/${pay}`
        );
        setPIData(res.data.paymentMethodData);
      }
      getPI();
    }
  }, [pay]);
  console.log(PIData);
  const br = PIData?.card?.brand;
  console.log(br);

  return (

    <OrderContainer>
      <PaymentContainer>
        <PaymentInfo>
          <Logo>{getLogo(br)}</Logo>
          <p className="last4">•••• {PIData?.card?.last4}</p>
        </PaymentInfo>
      </PaymentContainer>


    </OrderContainer>
  );
}




