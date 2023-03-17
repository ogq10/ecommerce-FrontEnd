import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, verifyForgotPassword } from "../redux/features/authSlice";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BackgroundSI, Bubble } from "../components/Form/styles/Form";
import "./forgotpassword.css";
import { forgotPassword } from "../redux/features/verifyForgottenPasswordSlice";

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

export default function ForgotPassword() {
  const auth = useSelector((state) => state.auth);
  const verifyForgotPassword = useSelector(
    (state) => state.verifyForgotPassword
  );

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
  const handleForgot = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(user));
  };

  const isinvalid = user.email === "";

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

        <div className="containerbox">
          <Bubble top>Welcome Back</Bubble>
          <Bubble bottom>أَهَلًا </Bubble>
          <div className="containerfp">
            <Form.Title>Reset Password</Form.Title>

            <div className="formfp" onSubmit={handleForgot} method="POST">
              <div className="fieldfp">
                <span className="field__labelfp">E-mail</span>
                <input
                  className="field__inputfp"
                  required
                  label="E-mail*"
                  type="email"
                  autoComplete="on"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>

              {verifyForgotPassword.verifyForgotPasswordStatus ===
              "Fulfilled!" ? (
                <div className="linkSent">Link Sent</div>
              ) : (
                <button
                  className="submitfp"
                  disabled={isinvalid}
                  onClick={handleForgot}
                  type="submit"
                >
                  {verifyForgotPassword.verifyForgotPasswordStatus ===
                  "Pending..." ? (
                    <p style={{ fontfpze: "14px" }}>Sending Link...</p>
                  ) : (
                    "Send Link"
                  )}
                </button>
              )}

              <span className="errorfp">
                {verifyForgotPassword.verifyForgotPasswordStatus ===
                "Rejected!" ? (
                  <p className="error_textfp">
                    {verifyForgotPassword.verifyForgotPasswordError}
                  </p>
                ) : null}
              </span>
            </div>

            <Form.Bottom>
              <Form.Text>
                <Form.Link to="/signin" style={{ textDecoration: "underline" }}>
                  Login
                </Form.Link>
              </Form.Text>
              <Form.Text>
                <Form.Link to="/signup">Create account</Form.Link>
              </Form.Text>
            </Form.Bottom>
          </div>
        </div>
      </BackgroundSI>
    </>
  );
}
