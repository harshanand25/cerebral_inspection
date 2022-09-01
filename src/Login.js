import React, { Component } from "react";
import axios from "axios";
// import Signup from "./Signup";
import MHTQ from "./MHTQ";
import "./Login.css";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pass: "",
      msg: "aaaa",
      isLoggedIn: false,
    };
    this.handleChangeFields = this.handleChangeFields.bind(this);
  }

  handleLogin = () => {
    const email = this.state.email;
    const pass = this.state.pass;

    const data = {
      email,
      pass,
    };
    axios
      .get("http://localhost/project/login.php", { params: data })
      .then((kalu) => {
        console.log(kalu);
        console.log(kalu.data[0].answer);

        if (kalu.data[0].answer === "valid") {
          this.setState({
            isLoggedIn: true,
          });
        } else {
          alert("not Valid");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  handleChangeFields = (e1) => {
    this.setState({
      ...this.state,
      [e1.target.name]: e1.target.value,
    });
    console.log(this.state, "formField");
  };
  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <MHTQ />
        ) : (
          <div className="Body1">
            <div className="login-body">
              <div className="login-graphic">
                <p className="login-graphic-text">BLAHAHAHAH</p>
              </div>
            </div>
            <div className="login-card">
              <h1>Log In</h1>
              <form>
                <input
                  type="text"
                  id="email"
                  name="email"
                  label="Email Address"
                  placeholder="Email Address"
                  onChange={this.handleChangeFields}
                  required
                />
                <input
                  type="password"
                  id="pass"
                  name="pass"
                  label="Password"
                  placeholder="Password"
                  onChange={this.handleChangeFields}
                  required
                />

                <input
                  type="button"
                  name="login"
                  value="submit"
                  className="login login-submit"
                  onClick={this.handleLogin}
                />
              </form>
              <div className="login-help">
                Don't have an Account Yet?{" "}
                <button className="signup-button">Register here.</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
