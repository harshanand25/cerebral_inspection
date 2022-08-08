// import logo from "./logo.png";
import React, { Component } from "react";
import "./Testselection.css";
class Testselection extends Component {
  componentDidMount() {
    document.title = "Cerebral Inspection";
  }
  render() {
    return (
      <form>
        <button className="MHT" data-hover="YOOOOO WASSSUPdafdafadfadfadfadffffh hhhhh hhhhhhh hhhhhhhhh hhhhhhhhhhr rrrrrrrrrrrrr rrrrrrrrrrr rrrrrrrrrrrrrrrrrr ">Mental Health Test
        </button>
        <button className="CBT" type="button">
          <h2>ColorBlindness Test</h2>
        </button>
      </form>
    );
  }
}
export default Testselection;
