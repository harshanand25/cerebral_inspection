import React, { Component } from "react";
import "./AdminLogin.css";
class AdminLogin extends Component {
  render() {
    return (
      <div>
        <div class="login-card">
          <h1>Log-in</h1>
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
            Don't have an Account Yet? <a href="#">Register here.</a>
          </div>
        </div>
      </div>
    );
  }
}
export default AdminLogin;
