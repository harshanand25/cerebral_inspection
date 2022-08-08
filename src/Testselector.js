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
        <button button className="MHT MHT-continue">
          {/* <h2>Mental Health Test</h2> */}
        </button>
        <button className="CBT CBT-continue">
          {/* <h2>ColorBlindness Test</h2> */}
        </button>
      </form>
    );
  }
}
export default Testselector;
