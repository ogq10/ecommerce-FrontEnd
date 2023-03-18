import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import "./resetPassword.css";
import Form from "../components/Form";
import { LogoContainer, LogoImage } from "./signin";
import jwtDecode from "jwt-decode";
import { SvgContainer, Title } from "./order";
export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const [result, setResult] = useState([]);
  const [resultError, setResultError] = useState("");

  const isInvalid =
    newPassword.password === "" || newPassword.confirmPassword === "";

  const location = useLocation();
  const { id, token } = queryString.parse(location.search);
  const user = jwtDecode(token);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios
      .post(
        `https://makadsaapi.onrender.com/api/auth/reset-password/${id}/${token}`,
        newPassword,
        {
          params: {
            id,
            token,
          },
        }
      )
      .then((response) => setResult(response.data))
      .catch((error) => setResultError(error.response.data));
  };

  return (
    <>
      <div className="containerboxrp">
        <div className="containerrp">
          <form className="formrp" onSubmit={handleSubmit}>
            <LogoContainer>
              <NavLink to="/">
                <LogoImage
                  src="https://ontallme.sirv.com/SpaceGreyCloseUpLogo.png"
                  alt="Makadsa Logo"
                />
              </NavLink>
            </LogoContainer>
            <Form.Title>Reset Password</Form.Title>
            {result.updated === false ? (
              <>
                <div className="fieldrp">
                  <span className="field__labelrp">E-mail</span>
                  <input
                    className="field__inputrp"
                    readOnly
                    required
                    value={user.email}
                  />
                </div>

                <div className="fieldrp">
                  <span className="field__labelrp">Password</span>
                  <input
                    className="field__inputrp"
                    required
                    label="Password*"
                    type="password"
                    autoComplete="on"
                    onChange={(e) =>
                      setNewPassword({
                        ...newPassword,
                        password: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="fieldrp">
                  <span className="field__labelrp">Confirm Password</span>
                  <input
                    className="field__inputrp"
                    required
                    label="Confirm Password*"
                    type="password"
                    autoComplete="on"
                    onChange={(e) =>
                      setNewPassword({
                        ...newPassword,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </div>

                <button className="submitrp" disabled={isInvalid} type="submit">
                  Submit
                </button>

                {resultError && (
                  <span className="errorrp">
                    <p className="error_textrp">{resultError}</p>
                  </span>
                )}
              </>
            ) : (
              <>
                <Title style={{ fontWeight: "500" }}> Complete </Title>
                <SvgContainer>
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
                </SvgContainer>
                {result && (
                  <span>
                    <p className="error_textrp">{result.status}</p>
                  </span>
                )}
                <NavLink to="/signin">
                  <button className="submitrp">Login</button>
                </NavLink>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
