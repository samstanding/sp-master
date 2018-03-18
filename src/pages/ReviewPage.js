import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ReviewPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
            <h1>This is where a user will their project</h1>
            <Link to="/home"> Project Good</Link>
            <Link to ="/user">Project Bad I'd like to go back</Link>
            </div>
        );
    }
}

export default ReviewPage;