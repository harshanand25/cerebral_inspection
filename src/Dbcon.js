import React, { Component } from "react";
import axios from "axios";
import { ReactPropTypes } from "react";
class Dbcon extends Component {
    constructor() {
        super()
        this.state = {
            kalu: []
        }
    };
    componentDidMount() {
        axios.get('http://localhost/r1.php').then
        then(response => { this.setState({ kalu: response.date }) }).catch(era => {
            console.log("failed");
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.kalu.map((ag, key) =>
                        <div key={key + (ag.Name)}>

                            {key},{ag.Name},{ag.age},{ag.sal}
                        </div>
                    )
                }
            </div>

        );
    }
}
export default Dbcon;