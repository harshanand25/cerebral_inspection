import React, {Component} from 'react';
import './CBTQ.css';
import axios from 'axios';

class CBTQ extends Component {
    constructor(props) {
        super();
        this.state = {
            data: [],
            isLog: false,
            sum: 0,
        };
    }

    componentDidMount() {
        const data = this.state.data;
        const sendData = {
            data,
        }
    }
}