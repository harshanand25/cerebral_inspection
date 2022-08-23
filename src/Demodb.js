import React, { Component } from "react";
class Demodb extends Component {
  render() {
    return (
      <form>
        <label>
          {" "}
          question id :
          <input type="text" name="questioid" />
        </label>
        <br></br>

        <label>
          {" "}
          question description :
          <input type="textarea" name="questiondecrpition" />
        </label>
        <br></br>

        <label>
          {" "}
          question choice 1 :
          <input type="text" name="questionchoice1" />
        </label>
        <br></br>

        <label>
          {" "}
          question choice 2 :
          <input type="text" name="questionchoice2" />
        </label>
        <br></br>

        <label>
          {" "}
          question choice 3 :
          <input type="text" name="questionchoice3" />
        </label>
        <br></br>

        <label>
          {" "}
          question choice 4 :
          <input type="text" name="questionchoice4 " />
        </label>
        <br></br>

        <label>
          {" "}
          user Response:
          <input type="text" name="userResponse:" />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Demodb;
