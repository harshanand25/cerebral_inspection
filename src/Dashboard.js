import logo from "./logo.png";
import React, { Component } from "react";
import "./Dashboard.css";
class Dashboard extends Component {
  render() {
    return (
      <form>
        <div className="header-div">
          <div className="Heading">CEREBRUM INSPECTION</div>
          <button className="login-btn">Join Our Community</button>
          <header className="DB-header">
            <img src={logo} className="Header-logo" alt="logo" />
            <p>Dashboard</p>
          </header>
        </div>
        <footer>
          <p>
            Created with <i class="fa fa-heart"></i> by
            <a target="_blank" href="https://florin-pop.com">
              Florin Pop
            </a>
            - Read how I created this and how you can join the challenge
            <a
              target="_blank"
              href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
            >
              here
            </a>
            .
          </p>
        </footer>
      </form>
    );
  }
}
export default Dashboard;
