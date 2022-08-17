import logo from "./logo.png";
import React, { Component } from "react";
import "./Dashboard.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./Login";
class Dashboard extends Component {
  componentDidMount() {
    document.title = "Cerebral Inspection";
  }
  handleClick() {
    window.open("/Factorial");
    // window.location.href = "/One";
  }
  render() {
    return (
      <form>
        <div className="header-div">
          <div className="Heading">CEREBRAL INSPECTION</div>
          {/* <BrowserRouter>
            <Routes>
              <Route className="login-btn" path="/login" element={<Login />}>
                Join Our Community
              </Route>
            </Routes>
          </BrowserRouter> */}
          <button onClick={this.handleClick} className="login-btn">Join Our Community</button>
          <header className="DB-header">
            <img src={logo} className="Header-logo" alt="logo" />
            <div className="Description">
              Cerebral Inspection is a Web Application consisting of simple
              questionnaire used to screen Mental Health and Color Blindness of
              a person. It uses a series of Questions and Visual Figures to
              accurately assess the patients health conditions and provide them
              with a Test Reports and an ideal remedy.
            </div>
          </header>
        </div>
        <footer>
          <p>Cerebral Inspection © 2022. All rights Reserved.</p>
        </footer>
      </form>
    );
  }
}
export default Dashboard;
