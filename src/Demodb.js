import React, { Component } from "react";
class Demodb extends Component {
    render() {
        return (
            <form>
                <label > question id :

                    <input type="text" name="questio id" />
                    <input type="submit" value="Submit" />

                </label>
                <br></br>

                <label > question description  :

                    <input type="textarea" name="question decrpition" />
                    <input type="submit" value="Submit" />

                </label>
                <br></br>

                <label > question choice 1 : 

                    <input type="text" name="question choice 1" />
                    <input type="submit" value="Submit" />

                </label>
                <br></br>

                <label > question choice 2 : 

                    <input type="text" name="question choice 2" />
                    <input type="submit" value="Submit" />

                </label>
                <br></br>

                <label > question choice 3 : 

                    <input type="text" name="question choice 1" />
                    <input type="submit" value="Submit" />

                </label>
                <br></br>

                <label > question choice 4 : 

                    <input type="text" name="question choice 4 " />
                    <input type="submit" value="Submit" />

                </label>
                <br></br>

                <label > user Response:

                    <input type="text" name="user Response:" />
                    <input type="submit" value="Submit" />

                </label>








            </form>
        );
    }
}
export default Demodb;