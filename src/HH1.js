import React from "react";
import { Link } from "react-router-dom";
// import "./HH1.css";

export const HH1 = () => {
  return (
    <div className="header-div">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <div className="login-btn"> */}
          <li>
            <Link to="/Prime">Join Our Community</Link>
          </li>
          {/* </div> */}
          <li>
            <Link to="/Factorial">Factorial</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default HH1;
