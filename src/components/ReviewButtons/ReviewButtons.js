import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';


class ReviewButtons extends Component {
    render() {
        return (
            <div className="Buttons">
            <div className="SubmitButton">
            <Link to="/home">
            <RaisedButton label="Look's great. Submit!" primary={true} />
            </Link>
            </div>
            <div className="BackButton">
            <Link to ="/edit">
            <RaisedButton label="Nope! I need to make a change" secondary={true} />
            </Link>
            </div>
            </div>
        )
    }
}

export default ReviewButtons;