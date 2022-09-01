import React, { Component } from "react";
import "./MHTQ.css";
import axios from "axios";
class MHTQ extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      result: 0,
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

  // const [data, setItem] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost/project/MHTQ.php")
  //     .then((result) => result.json())
  //     .then((result) => {
  //       setItem(result);
  //       console.log(result);
  //     });
  // }, []);

  handleChange1 = () => {
    this.setState({ result: this.state.result + 1 });
    console.log(this.state.result);
  };
  handleChange2 = () => {
    this.setState({ result: this.state.result + 2 });
    console.log(this.state.result);
  };
  handleChange3 = () => {
    this.setState({ result: this.state.result + 3 });
    console.log(this.state.result);
  };
  handleChange4 = () => {
    this.setState({ result: this.state.result + 4 });
    console.log(this.state.result);
  };

  show = () => {
    console.log(this.state.result);
    alert(this.state.result);
  };

  render() {
    return (
      <div>
        {/* {" "} */}
        {this.state.data.map((item) => (
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
                <div key={item.id}>
                  {item.id}.{item.que}
                </div>
                <div className="Choice">
                  <input
                    type="radio"
                    name="choice"
                    className="question1"
                    value="Very Unlikely"
                    onClick={() => this.handleChange4()}
                  />
                  Very Unlikely
                </div>
                <div className="Choice">
                  <input
                    type="radio"
                    name="choice"
                    className="question1"
                    value="Unlikely"
                    onClick={this.handleChange3}
                  />
                  Unlikely
                </div>
                <div className="Choice">
                  <input
                    type="radio"
                    name="choice"
                    className="question1"
                    value="Likely"
                    onClick={this.handleChange2}
                  />
                  Likely
                </div>
                <div className="Choice">
                  <input
                    type="radio"
                    name="choice"
                    className="question1"
                    value="Very Likely"
                    onClick={this.handleChange1}
                  />
                  Very Likely
                </div>
              </div>
              <div className="space"></div>
            </form>
            <div className="space"></div>
          </div>
        ))}
        <div>
          <input
            type="button"
            className="Submit_Response"
            value="Submit Response"
            id="Submit"
            // onClick="yield()"
            onClick={this.show}
          />
        </div>
      </div>
    );
  }
}

export default MHTQ;
