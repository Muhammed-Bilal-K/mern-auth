import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { signInSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorShow, setErrorShow] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    const userDetail = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:3000/admin/a_login", { ...userDetail })
      .then((result) => {
        const dataInfo = result?.data?.message;
        console.log(result);
        setErrorShow(dataInfo);
        dispatch(signInSuccess(result.data));
        if (result.data.email == "bilal@gmail.com") {
          navigate("/admin");
        } else if (result.data.message == null) {
          navigate("/");
        }
      });
  };

  return (
    <div>
      <div className="container">
        <div className="frame">
          <div className="nav">
            <ul>
              <li className="signup-inactive">
                <a className="btn">Sign In </a>
              </li>
            </ul>
          </div>
          <div>
            <form
              className="form-signin"
              onSubmit={HandleSubmit}
              name="form"
              style={{ textAlign: "center" }}
            >
              <h6 className="errorMessage">{errorShow ? errorShow : ""}</h6>
              <label htmlFor="email">Email</label>
              <input
                required
                className="form-styling"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                placeholder=""
              />
              <label htmlFor="password">Password</label>
              <input 
                required
                className="form-styling"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                name="password"
                placeholder=""
              />
              <div className="">
                <button className="btn-signup">Sign In</button>
              </div>
              <div className="Direct_SU">
                <p style={{ marginBottom: "12px" }}>Don't have an account</p>
                <Link to="/signup">
                  <h5 className="direct_button">Sign Up</h5>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
