import logo from "./logo.png";
import React, { Component } from "react";
import "./Dashboard.css";
class Dashboard extends Component {
  render() {
    return (
      <div className="header-div">
        <div className="Heading">
          <h1>CEREBRUM INSPECTION</h1>
        </div>
        <button className="login-btn">Login</button>
        <header className="DB-header">
          <img src={logo} className="Header-logo" alt="logo" />
          <p>Dashboard</p>
        </header>
      </div>
    );
  }
}
export default Dashboard;
