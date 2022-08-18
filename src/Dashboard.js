import logo from "./logo.png";
import React, { Component } from "react";
import "./Dashboard.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./Login";
class Dashboard extends Component {
  componentDidMount() {
    document.title = "Cerebral Inspection";
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
          <button className="login-btn">Join Our Community</button>
          <header className="DB-header">
            <img src={logo} className="Header-logo" alt="logo" />
            <div className="Description">
              Mental health includes our emotional, psychological, and social
              well-being. It affects how we think, feel, and act. It also helps
              determine how we handle stress, relate to others, and make healthy
              choices. Mental health is important at every stage of life, from
              childhood and adolescence through adulthood.
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
