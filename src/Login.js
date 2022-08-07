import React, { Component } from "react";
import "./Login.css";
class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="box-1">
          <div className="content-holder">
            <h2>Hello!</h2>

            <button className="button-1" onclick="signup()">
              Sign up
            </button>
            <button className="button-2" onclick="login()">
              Login
            </button>
          </div>
        </div>

        <div className="box-2">
          <div className="login-form-container">
            <h1>Login Form</h1>
            <input type="text" placeholder="Username" className="input-field" />
            <div className="space"></div>
            <input
              type="password"
              placeholder="Password"
              className="input-field"
            />
            <div className="space"></div>
            <button className="login-button" type="button">
              Login
            </button>
          </div>
        </div>

        <div className="signup-form-container">
          <h1>Sign Up Form</h1>
          <input type="text" placeholder="Username" className="input-field" />
          <div className="space"></div>
          <input type="email" placeholder="Email" className="input-field" />
          <div className="space"></div>
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <div className="space"></div>
          <button className="signup-button" type="button">
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}
export default Login;
