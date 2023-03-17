import React from "react";
import { useSelector } from "react-redux";
import "./Success.css";

export default function Success() {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <p class="success">
          You are logged in, <span class="name">{auth?.fullName}</span>
        </p>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 130.2 130.2"
        >
          <circle
            class="path circle"
            fill="none"
            stroke="#8CCA97"
            stroke-width="4"
            stroke-miterlimit="10"
            cx="65.1"
            cy="65.1"
            r="62.1"
          />
          <polyline
            class="path check"
            fill="none"
            stroke="#8CCA97"
            stroke-width="4"
            stroke-linecap="round"
            stroke-miterlimit="10"
            points="100.2,40.2 51.5,88.8 29.8,67.5 "
          />
        </svg>
      </div>
    </>
  );
}
