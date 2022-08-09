import React, { Component } from "react";
import "./Login.css";
class Login extends Component {
  render() {
    return (
      <body>  

      <div class="login-body">
        <div class="login-graphic">
          <p class="login-graphic-text">BLAHAHAHAH</p>
        </div>
      </div>

        <div class="login-card">
          <h1>Log In</h1>
          <form>
            <input type="text" name="user" placeholder="Username" />
            <input type="password" name="pass" placeholder="Password" />
            <input
              type="submit"
              name="login"
              className="login login-submit"
              value="login"
              />
          </form>
          <div className="login-help">
            Don't have an Account Yet?{" "}
            <a href="src/Signup.js">Register here.</a>
          </div>
        </div>
    </body>
    );
  }
}
export default Login;
