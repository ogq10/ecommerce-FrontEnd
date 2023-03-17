import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/features/authSlice";
import { registerGuest } from "../../redux/features/guestSlice";
import { addUserToCart } from "../../redux/features/cartSlice";
import Success from "../Success/Success";
import "./styles/simpleLogin.css";

export default function SimpleLogin() {
  const auth = useSelector((state) => state.auth);
  const guest = useSelector((state) => state.guest);

  const dispatch = useDispatch();
  const [yes, setYes] = useState(false);
  console.log(yes);

  useEffect(() => {
    if (yes === true) {
      sessionStorage.setItem("guest", "yes");
    } else {
      sessionStorage.setItem("guest", "no");
    }
  }, [yes]);
  console.log(auth);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSignIn = (e) => {
    e.preventDefault();
    //login function from redux and api calls, we are sending dispatch and user
    dispatch(loginUser(user));
    localStorage.setItem("token");

    dispatch(addUserToCart(auth));
  };

  const handleGuestSignIn = (e) => {
    e.preventDefault();
    dispatch(registerGuest(user));
    dispatch(addUserToCart(guest));
  };

  const isInvalid = user.password === "" || user.email === "";
  return (
    <>
      {auth._id ? (
        <Success />
      ) : (
        <div>
          {yes === false ? (
            <div className="containersl">
              <h1>Login</h1>
              <div class="toggle">
                <input
                  type="checkbox"
                  value={yes}
                  onClick={() => setYes(!yes)}
                />
                <label> </label>
              </div>

              <form onSubmit={handleSignIn} method="POST">
                <div className="fieldsl">
                  <span class="field__labelsl"> E-mail</span>
                  <input
                    className="field__inputsl"
                    label="Email"
                    required
                    value={user.email || ""}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>

                <div className="fieldsl">
                  <span class="field__labelsl"> Password</span>
                  <input
                    className="field__inputsl"
                    label="Password"
                    type="password"
                    required
                    value={user.password || ""}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </div>

                {auth.loginStatus === "Rejected!" ? (
                  <span className="errorsl">{auth.loginError}</span>
                ) : null}

                <button
                  className="submitsl"
                  disabled={isInvalid}
                  onClick={handleSignIn}
                  type="submit"
                >
                  {auth.loginStatus === "Pending..." ? (
                    <p>Logging In...</p>
                  ) : (
                    "Log in"
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="containersl">
              <h1>Guest</h1>
              <div class="toggle">
                <input
                  type="checkbox"
                  value={yes}
                  onClick={() => setYes(!yes)}
                />
                <label> </label>
              </div>

              <form onSubmit={handleSignIn} method="POST">
                <div className="fieldsl">
                  <span class="field__labelsl"> E-mail</span>
                  <input
                    className="field__inputsl"
                    label="Email"
                    required
                    value={user.email || ""}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>

                <button
                  className="submitsl"
                  onClick={handleGuestSignIn}
                  type="submit"
                >
                  {auth.loginStatus === "Pending..." ? (
                    <p>Submitting...</p>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
}
