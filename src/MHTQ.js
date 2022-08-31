import React, { useState, useEffect } from "react";
import "./MHTQ.css";
export const MHTQ = () => {
  // class MHTQ extends Component {
  //   constructor(props) {
  //     super();
  //     this.state = {
  //       result: 0,
  //     };

  const [data, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost/project/MHTQ.php")
      .then((result) => result.json())
      .then((result) => {
        setItem(result);
        console.log(result);
      });
  }, []);

  // this.state.handleChange1 = () => {
  //   this.setState({ result: this.state.result + 4 });
  //   console.log(this.state.result);
  // };
  // this.state.handleChange2 = () => {
  //   this.setState({ result: this.state.result + 3 });
  //   console.log(this.state.result);
  // };
  // this.state.handleChange3 = () => {
  //   this.setState({ result: this.state.result + 2 });
  //   console.log(this.state.result);
  // };
  // this.state.handleChange4 = () => {
  //   this.setState({ result: this.state.result + 1 });
  //   console.log(this.state.result);
  // };

  return data.map((item) => (
    <div className="Body3">
      <form className="MHTest" id="MHTest">
        <div className="header-Div">
          <h1>Mental Health Test</h1>
          <p>
            Easily access your Psychological Health by choosing the most
            appropiate option.
          </p>
        </div>
        <div className="space"></div>

        <div className="Question">
          <div>
            {item.id}.{item.que}
          </div>
          <div className="Choice">
            <input type="radio" className="question1" value="Very Unlikely" />
            Very Unlikely
          </div>
          <div className="Choice">
            <input type="radio" className="question1" value="Unlikely" />
            Unlikely
          </div>
          <div className="Choice">
            <input type="radio" className="question1" value="Likely" />
            Likely
          </div>
          <div className="Choice">
            <input type="radio" className="question1" value="Very Likely" />
            Very Likely
          </div>
        </div>
        <div className="space"></div>
      </form>

      <div className="space"></div>

      <div>
        <input
          type="button"
          className="Submit_Response"
          value="Submit Response"
          id="Submit"
          onClick="yield()"
        />
      </div>
    </div>
  ));
};

export default MHTQ;

//         onClick={this.handleChange4}
//         onClick={this.handleChange3}
//         onClick={this.handleChange1}
//         onClick={this.handleChange2}
