// import Factorial from "./Factorial";
// import Prime from "./Prime";
import React, { Component } from "react";
import HH1 from "./HH1";
import { Route, BrowserRouter as Router, Routes,Link } from "react-router-dom";
import { One } from "./One";
import { Two } from "./Two";
import { Home } from "./Home";
// import "./HH1.css";

class RoutingEg extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <HH1 />
          </div>
          <div>
            <Routes>
              <Route path="/Factorial" element={<One />} />
              <Route path="/" element={<Home />} />
              <Route path="/Prime" element={<Two />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
export default RoutingEg;
