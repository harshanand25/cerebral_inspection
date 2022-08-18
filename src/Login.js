// import bgimage from "./bgimage.jpeg";
import React, { Component } from "react";
import "./Login.css";
import Signup from "./Signup";
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLog: false,
    };
  }

  handleClick = () => {
    this.setState({isLog: true});
    console.log(this.state.isLog);
  };
  render() {
    return (
      <div>
        {this.state.isLog ? (
          <Signup />
        ):(

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
            <button className="signup-button"onClick={this.handleClick}>Register here.</button>
          </div>
        </div>
      </body>
      )}
      </div>
    );
  }
}
export default Login;
