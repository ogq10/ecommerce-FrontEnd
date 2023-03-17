import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Form";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "../redux/features/authSlice";
import styled from "styled-components";
import { BackgroundSU, Bubble } from "../components/Form/styles/Form";
import { saveUserInfo } from "../redux/features/cartSlice";
import "./signup.css";

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

export default function SignUp() {
  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (auth._id) {
      // setSuccess(`Account created successfully! Welcome ${fullName}.`);

      navigate("/");
    }
  }, [auth._id, navigate]);

  const handleSignUp = (e) => {
    e.preventDefault();

    dispatch(registerUser(user));
    dispatch(saveUserInfo(user));
  };

  return (
    <>
      <BackgroundSU>
        <LogoContainer>
          <NavLink to="/">
            <LogoImage
              src="https://ontallme.sirv.com/SpaceGreyCloseUpLogo.png"
              alt="Makadsa Logo"
            />
          </NavLink>
        </LogoContainer>

        <Form.Container>
          <Bubble top>Hello</Bubble>
          <Bubble bottom>مرحباً </Bubble>
          <div className="containersu">
            <Form.Title>Sign Up</Form.Title>

            <div className="formsu" onSubmit={handleSignUp} method="POST">
              <div className="fieldsu">
                <span className="field__label">Full Name*</span>
                <input
                  className="field__inputsu"
                  required
                  label="Full Name*"
                  type="fullName"
                  autoComplete="on"
                  onChange={(e) =>
                    setUser({ ...user, fullName: e.target.value })
                  }
                />
              </div>

              <div className="fieldsu">
                <span className="field__labelsu">E-mail*</span>
                <input
                  className="field__inputsu"
                  required
                  label="E-mail*"
                  type="email"
                  autoComplete="on"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>

              <div className="fieldsu">
                <span className="field__labelsu">Password*</span>
                <input
                  className="field__inputsu"
                  required
                  label="Password*"
                  type="password"
                  autoComplete="on"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>

              <div className="fieldsu">
                <span className="field__labelsu">Confirm Password*</span>
                <input
                  className="field__inputsu"
                  required
                  label="Confirm Password*"
                  type="password"
                  autoComplete="on"
                  onChange={(e) =>
                    setUser({ ...user, confirmPassword: e.target.value })
                  }
                />
              </div>

              <span className="errorsu">
                {auth.registerStatus === "Rejected!" ? (
                  <p classNAme="error_textsu">{auth.registerError}</p>
                ) : null}
              </span>

              <Form.BottomUp>
                <button
                  className="submitsu"
                  onClick={handleSignUp}
                  type="submit"
                >
                  {auth.registerStatus === "Pending..." ? (
                    <p style={{ fontSize: "14px" }}>Registering...</p>
                  ) : (
                    "Sign Up"
                  )}
                </button>
                <Form.Text>
                  Already a member?
                  <Form.Link
                    to="/SignIn"
                    style={{ textDecoration: "underline" }}
                  >
                    Sign In
                  </Form.Link>
                </Form.Text>
              </Form.BottomUp>
            </div>
          </div>
        </Form.Container>
      </BackgroundSU>
    </>
  );
}
