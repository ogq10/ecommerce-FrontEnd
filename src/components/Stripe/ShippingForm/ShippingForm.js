import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAddressToCart } from "../../../redux/features/cartSlice";
import "./ShippingForm.css";

import SplitForm from "../SplitForm";
const mapApiJs = "https://maps.googleapis.com/maps/api/js";
// const apiKey = process.env.PLACES_API_KEY;

//load google map api js

function loadAsyncScript(src) {
  return new Promise((res) => {
    const script = document.createElement("script");
    Object.assign(script, {
      type: "text/javascript",
      async: true,
      src,
    });
    script.addEventListener("load", () => res(script));
    document.head.appendChild(script);
  });
}

export default function ShippingForm() {
  const dispatch = useDispatch();
  const searchInput = useRef(null);
  const [address, setAddress] = useState({});

  const shipAdd = useSelector((state) => state.cart.shippingAddress);
  console.log(shipAdd);
  //load map script after mounted
  useEffect(() => {
    initMapScript().then(() => initAutocomplete());
    extractAddress();
  }, []);

  const initMapScript = () => {
    //if script is already loaded
    if (window.google) {
      return Promise.resolve();
    }
    const src = `${mapApiJs}?key=AIzaSyBvSaDsCHIxGTA9XB5k0XDFkp8--7So3gI&libraries=places`;
    return loadAsyncScript(src);
  };

  useEffect(() => {
    dispatch(addAddressToCart(address));
  }, [dispatch, address]);

  //init autocomplete
  const initAutocomplete = () => {
    if (!searchInput.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      searchInput.current
    );
    autocomplete.setFields(["address_component"]);
    autocomplete.addListener("place_changed", () =>
      onChangeAddress(autocomplete)
    );
  };

  const onChangeAddress = (autocomplete) => {
    const place = autocomplete.getPlace();
    setAddress(extractAddress(place));
  };

  const extractAddress = (place) => {
    const address = {
      line1: "",
      postal_code: "",
      state: "",
      city: "",
      country: "",
    };
    if (!Array.isArray(place?.address_components)) {
      return address;
    }

    place.address_components.forEach((component) => {
      const types = component.types;
      const value = component.short_name;
      const countryval = component.short_name;
      if (types.includes("street_number")) {
        address.line1 = value;
      }

      if (types.includes("route")) {
        address.line1 = address.line1 + " " + value;
      }

      if (types.includes("locality")) {
        address.city = value;
      }

      if (types.includes("administrative_area_level_1")) {
        address.state = value;
      }

      if (types.includes("country")) {
        address.country = countryval;
      }

      if (types.includes("postal_code")) {
        address.postal_code = value;
      }
    });

    // localStorage.setItem("address", JSON.stringify(address));

    return address;
  };

  console.log(address, "the address");
  return (
    <>
      <div className="container">
        <h1>Shipping</h1>
        <p>Please enter your shipping details.</p>
        <div className="form">
          <div className="field">
            <span class="field__label"> Search your address*</span>
            <input
              className="field__input"
              ref={searchInput}
              required
              type="text"
              id="address"
              for="address"
            />
          </div>

          <div class="fields fields--2">

            <div className="field">
              <span class="field__label">Line 1*</span>
              <input
                className="field__input"
                label="Line 1"
                readOnly
                required
                value={address.line1 || ""}
              />
            </div>
            <div className="field">

              <span class="field__label">Line 2</span>
              <input
                placeholder="Optional"
                className="field__input"
                label="Line 2"
                onChange={(e) => setAddress({ ...address, line2: e.target.value })}

              />
            </div>

          </div>

          <label className="field">
            <span className="field__label">City*</span>
            <input
              className="field__input"
              label="City"
              readOnly
              required
              value={address.city || ""}
            />
          </label>

          <div className="fields fields--3">
            <label className="field">
              <span className="field__label"> State* </span>
              <input
                className="field__input"
                label="State"
                readOnly
                required
                value={address.state || ""}
              />
            </label>

            <label className="field">
              <span className="field__label">Country*</span>
              <input
                className="field__input"
                label="Country"
                readOnly
                required
                value={address.country || ""}
              />
            </label>

            <label className="field">
              <span className="field__label">Zip*</span>
              <input
                className="field__input"
                label="Zip"
                readOnly
                required
                value={address.postal_code || ""}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
