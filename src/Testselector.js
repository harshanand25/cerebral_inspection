// import logo from "./logo.png";
import React, { Component } from "react";
import "./Testselector.css";
class Testselector extends Component {
  componentDidMount() {
    document.title = "Cerebral Inspection";
  }
  render() {
    return (
      <form>
        <div className="header-div">
          <button className="MHT MHT-continue">
            {/* <h2>Mental Health Test</h2> */}
          </button>
          <button className="CBT CBT-continue">
            {/* <h2>ColorBlindness Test</h2> */}
          </button>
        </div>
      </form>
    );
  }
}
export default Testselector;
