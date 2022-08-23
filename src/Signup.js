// import React, { Component } from "react";
import axios from "axios";
import { useState } from "react";
import "./Signup.css";
// import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  // let history = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.value]: e.target.value });
    console.log(data);
  };

  const fun = (e) => {
    e.preventDefault();
    const sendData = {
      name: data.name,
      email: data.email,
      pass: data.pass,
    };
    console.log(sendData);
    axios
      .post("https://localhost/project/login_data.php", sendData)
      .then((result) => {
        if (result.data.Status === "Invalid") {
          alert("Invalid User");
        }
        //  else {
        //   history("/login");
        // }
      });
  };

  return (
    <div>
      <div className="register-card">
        <h1>Register</h1>
        <form onSubmit={fun}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            value={data.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={data.email}
          />
          <input
            type="password"
            name="pass"
            placeholder="Password"
            onChange={handleChange}
            value={data.pass}
          />
          <input
            type="submit"
            name="register"
            className="register register-submit"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};
export default Signup;
