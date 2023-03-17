import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/features/authSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import styled from "styled-components";
import { BackgroundSI, Bubble } from "../components/Form/styles/Form";
import "./signin.css";

export const LogoContainer = styled.div`
  display: flex;
  height: 110px;
  width: 80px;
  padding: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-text: center;
  margin: auto;
`;
export const LogoImage = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0px;
`;

export default function SignIn() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);
  const handleSignIn = (e) => {
    e.preventDefault();
    //login function from redux and api calls, we are sending dispatch and user
    dispatch(loginUser(user));
  };

  const isInvalid = user.password === "" || user.email === "";

  return (
    <>
      <BackgroundSI>
        <LogoContainer>
          <NavLink to="/">
            <LogoImage
              src="https://ontallme.sirv.com/SpaceGreyCloseUpLogo.png"
              alt="Makadsa Logo"
            />
          </NavLink>
        </LogoContainer>

        <Form.Container>
          <Bubble top>Welcome Back</Bubble>
          <Bubble bottom>أَهَلًا </Bubble>
          <div className="containersi">
            <Form.Title>Sign In</Form.Title>

            <div className="formsi" onSubmit={handleSignIn} method="POST">
              <div className="fieldsi">
                <span className="field__labelsi">E-mail</span>
                <input
                  className="field__inputsi"
                  required
                  label="E-mail*"
                  type="email"
                  autoComplete="on"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>

              <div className="fieldsi">
                <span className="field__labelsi">Password</span>
                <input
                  className="field__inputsi"
                  required
                  label="Password*"
                  type="password"
                  autoComplete="on"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>

              <button
                className="submitsi"
                disabled={isInvalid}
                onClick={handleSignIn}
                type="submit"
              >
                {auth.loginStatus === "Pending..." ? (
                  <p style={{ fontSize: "14px" }}>Logging In...</p>
                ) : (
                  "Log in"
                )}
              </button>

              <span className="errorsi">
                {auth.loginStatus === "Rejected!" ? (
                  <p className="error_textsi">{auth.loginError}</p>
                ) : null}
              </span>
            </div>

            <Form.Bottom>
              <Form.Text>
                <Form.Link to="/SignUp" style={{ textDecoration: "underline" }}>
                  Create account
                </Form.Link>
              </Form.Text>
              <Form.Text>
                <Form.Link to="/forgot-password">Forgot Password?</Form.Link>
              </Form.Text>
            </Form.Bottom>
          </div>
        </Form.Container>
      </BackgroundSI>
    </>
  );
}
