import React, { Component } from "react";
class Demodb extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questionid: "",
            questiondecrpition: "",
            questionchoice1: "",
            questionchoice3: "",
            questionchoice4: "",
            userResponse: ""


        };

    }

    change = () => {
        this.setState({
            ...this.state,
            [e1.target.questionid]: e1.target.value,
        });

        this.setState({
            ...this.state,
            [e1.target.questiondescription]: e1.target.value,
        });

        this.setState({
            ...this.state,
            [e1.target.questionchoice1]: e1.target.value,
        });

        this.setState({
            ...this.state,
            [e1.target.questionchoice2]: e1.target.value,
        });

        this.setState({
            ...this.state,
            [e1.target.questionchoice3]: e1.target.value,
        });

        this.setState({
            ...this.state,
            [e1.target.questionchoice4]: e1.target.value,
        });


        this.setState({
            ...this.state,
            [e1.target.userResponse]: e1.target.value,
        });





    }



    render() {
        return (
            <form>
                <label > question id :

                    <input type="text" name="questionid" />


                </label>
                <br></br>

                <label > question description  :

                    <input type="textarea" name="questiondecrpition" onChange={this.change} />

                </label>
                <br></br>

                <label > question choice 1 :

                    <input type="text" name="questionchoice1" />


                </label>
                <br></br>

                <label > question choice 2 :

                    <input type="text" name="questionchoice2" />

                </label>
                <br></br>

                <label > question choice 3 :

                    <input type="text" name="questionchoice3" />

                </label>
                <br></br>

                <label > question choice 4 :

                    <input type="text" name="questionchoice4" />


                </label>
                <br></br>

                <label > user Response:

                    <input type="text" name="userResponse" />


                </label>
                <input type="submit" value="Submit" />







            </form>
        );
    }
}
export default Demodb;