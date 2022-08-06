import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from "./App";
import MHTQ from "./MHTQ";
// import Palindrome from "./Palindrome";
// import Spread from "./SpreadOperator";
// import Ternery from "./TerneryOp";
// import Factorial from "./Factorial";
// import Prime from "./Prime";
// import Loginpage from "./Loginpage";
// import RoutingEg from "./RoutingEg";
// import HH1 from "./HH1";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Spread /> */}
    {/* <Ternery /> */}
    {/* <Factorial /> */}
    {/* <RoutingEg /> */}
    {/* <HH1 /> */}
    {/* <Prime /> */}
    {/* <Loginpage /> */}
    {/* <Palindrome /> */}
    <MHTQ />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
