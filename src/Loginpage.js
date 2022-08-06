import React, { Component } from "react";
import "./Loginpage.css";
class Loginpage extends Component {
  render() {
    return (
      <form>
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="stylesheet" href="Loginpage.css" />
          <title></title>
        </head>
        <body>
          <br></br>
          <div className="cont">
            <div className="form sign-in">
              <h2>Welcome</h2>
              <label>
                <span>Email</span>
                <input type="email" />
              </label>
              <label>
                <span>Password</span>
                <input type="password" />
              </label>
              <p className="forgot-pass">Forgot password?</p>
              <button type="button" className="submit" /> Sign In
              {/* <button /> */}
            </div>
          </div>
          <div className="sub-cont">
            <div className="img">
              <div className="img__text m--up">
                <h3>Don't have an account? Please Sign up!</h3>
              </div>
              <div className="img__text m--in">
                <h3>If you already has an account, just sign in.</h3>
              </div>
              <div className="img__btn">
                <span className="m--up">Sign Up</span>
                <span className="m--in">Sign In</span>
              </div>
            </div>
            <div className="form sign-up">
              <h2>Create your Account</h2>
              <label>
                <span>Name</span>
                <input type="text" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" />
              </label>
              <label>
                <span>Password</span>
                <input type="password" />
              </label>
              <button type="button" className="submit">
                Sign Up
              </button>
            </div>
          </div>
        </body>
        <script>
          {/* document.querySelector('.img__btn').addEventListener('click',
          function())
          {document.querySelector(".cont").classList.toggle("s--signup")} */}
        </script>
      </form>
    );
  }
}
export default Loginpage;
