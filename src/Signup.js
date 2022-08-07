import React, { Component } from "react";
import "./Signup.css";
class Signup extends Component {
  render() {
    return (
      <div>
        <div class="register-card">
          <h1>Register</h1>
          <form>
            <input type="text" name="name" placeholder="Your Name" />
            <input type="text" name="Email" placeholder="Email" />
            <input type="password" name="pass" placeholder="Password" />
            <input
              type="password"
              name="pass2"
              placeholder="Confirm Password"
            />
            <input
              type="submit"
              name="register"
              className="register register-submit"
              value="Register"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default Signup;
