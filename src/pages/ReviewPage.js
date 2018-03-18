import React, { Component } from 'react';


class ReviewPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
            <h1>This is where a user will their project</h1>
            <button>Project Good</button>
            <button>Project Bad</button>
            </div>
        );
    }
}

export default ReviewPage;