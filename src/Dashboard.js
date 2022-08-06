import logo from "./logo.png";
import React, { Component } from "react";
import "./Dashboard.css";
class Dashboard extends Component {
  render() {
    return (
      <div className="header-div">
        <header className="DB-header">
          <img src={logo} className="Header-logo" alt="logo" />
          <p>Dashboard</p>
        </header>
      </div>
    );
  }
}
export default Dashboard;
