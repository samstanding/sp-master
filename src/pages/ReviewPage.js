import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProjectForm from '../components/ProjectForm/ProjectForm';
import {fetchUser } from '../redux/actions/userActions';
import { Link } from 'react-router-dom';

const propTypes = {
    dispatch: PropTypes.func,
    user: PropTypes.shape({ userName: PropTypes.string, isLoading: PropTypes.bool }),
    history: PropTypes.shape({ push: PropTypes.func }),
  };
  
  const defaultProps = {
    dispatch: () => {},
    user: { userName: null, isLoading: true },
    history: { push: () => {} },
  };
  
  const mapStateToProps = state => ({
    user: state.user,
  });



class ReviewPage extends Component {
    constructor(props) {
        super(props);

    }
  
    componentDidMount() {
        this.props.dispatch(fetchUser());
      }

    render() {
        return (
            <div>
            <h1>This is where a {this.props.user.userName} will review their project</h1>
            <Link to="/home"> Project Good</Link>
            <Link to ="/user">Project Bad I'd like to go back</Link>
            </div>
        );
    }
}

ReviewPage.propTypes = propTypes;
ReviewPage.defaultProps = defaultProps;

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ReviewPage);