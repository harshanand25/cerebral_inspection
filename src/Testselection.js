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
        <div className="header-div">
          <p class="test_desc">Select the test you want to take!</p>
          </div>
        <button className="MHT" data-hover="This is a Mental Health Test!">Mental Health Test
        </button>
        <button className="CBT" data-hover="This is a Color Blindness Test!" type="button">
          ColorBlindness Test
        </button>
      </form>
    );
  }
}
export default Testselection;
