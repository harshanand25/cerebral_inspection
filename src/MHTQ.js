import React, { Component } from "react";
import "./MHTQ.css";
import axios from "axios";
import Result from "./Result";
class MHTQ extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      result1: 0,
      result2: 0,
      result3: 0,
      result4: 0,
      isLog: false,
      sum: 0,
    };
  }
  componentDidMount() {
    const data = this.state.data;
    const sendData = {
      data,
    };

    axios
      .get("http://localhost/project/MHTQ.php", { params: sendData })
      .then((res) => {
        this.setState({ data: res.data });
        console.log(res);
      });
  }

  hand = (e) => {
    let k = 0;
    // alert(e.item.log);
    k = parseInt(e.target.value);
    /// alert(k);
    this.setState({ sum: this.state.sum + k });
  };

  fun = (e) => {
    //alert("Welcome");
    e.preventDefault();
  };

  show = () => {
    this.setState({ isLog: true });

    console.log(this.state.sum);
  };

  render() {
    return (
      <div>
        {this.state.isLog ? (
          <Result res={this.state.sum} />
        ) : (
          <div>
            <form className="MHTest" id="MHTest" onSubmit={this.fun}>
              {this.state.data.map((item) => (
                <div className="Body3">
                  <div className="header-Div">
                    <h1>Mental Health Test</h1>
                    <p>
                      Easily access your Psychological Health by choosing the
                      most appropiate option.
                    </p>
                  </div>
                  <div className="space"></div>
                  <div className="Question">
                    <div key={item.id}>
                      {item.id}.{item.que}
                    </div>
                    <div className="Choice">
                      <input
                        type="radio"
                        name={"ch" + item.id}
                        className="question1"
                        value="4"
                        onClick={this.hand}
                      />
                      Very Unlikely
                    </div>
                    <div className="Choice">
                      <input
                        type="radio"
                        name={"ch" + item.id}
                        className="question1"
                        value="3"
                        onClick={this.hand}
                      />
                      Unlikely
                    </div>
                    <div className="Choice">
                      <input
                        type="radio"
                        name={"ch" + item.id}
                        className="question1"
                        value="2"
                        onClick={this.hand}
                      />
                      Likely
                    </div>
                    kalu bhalu
                    <div className="Choice">
                      <input
                        type="radio"
                        name={"ch" + item.id}
                        className="question1"
                        value="1"
                        onClick={this.hand}
                      />
                      Very Likely
                    </div>
                  </div>
                  <div className="space"></div>

                  <div className="space"></div>
                </div>
              ))}

              <div>
                <input
                  type="submit"
                  className="Submit_Response"
                  value="Submit Response"
                  id="Submit"
                  // onClick="yield()"
                  // onClick={this.show}
                />
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default MHTQ;
