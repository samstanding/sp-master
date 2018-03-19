import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CONSTANTS from '../constants/';

const propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }),
};

const defaultProps = {
  history: { push: () => { } },
};

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      cohort: '',
      program:'',
      message: '',
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  registerUser(event) {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Choose a username and password!',
      });
    } else {
      const request = new Request(`${CONSTANTS.apiBaseUrl}/user/register`, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          cohort: this.state.cohort,
          program: this.state.program,
        }),
      });

      // making the request to the server to post the country
      //this is the same type of function you would do to verify good link
      fetch(request)
        .then((response) => {
          if (response.status === 201) {
            this.props.history.push('/login');
          } else {
            this.setState({
              message: 'Ooops! That didn\'t work. The username might already be taken. Try again!',
            });
          }
        })
        .catch(() => {
          this.setState({
            message: 'Ooops! Something went wrong! Is the server running?',
          });
        });
    }
  }

  // handleInputChange(event) {
  //   const { target } = event;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const { name } = target;

  //   this.setState({
  //     [name]: value,
  //   });
  // }

  handleChangeFor = propertyName => event => {
    this.setState({
        ...this.state,
        [propertyName]: event.target.value,
      });
    }

  renderAlert() {
    if (this.state.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.state.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div>
        {this.renderAlert()}
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChangeFor('password')}
              />
            </label>
            <label htmlFor="firstName">
              First Name:
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChangeFor('firstName')}
              />
            </label>
            <label htmlFor="lastName">
              Last Name:
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChangeFor('lastName')}
              />
            </label>
            <label htmlFor="cohort">
              Cohort:
              <input
                type="text"
                name="cohort"
                value={this.state.cohort}
                onChange={this.handleChangeFor('cohort')}
              />
            </label>
            <select value={this.state.program} onChange={this.handleChangeFor('program')}>
              <option value="Full Stack">Full Stack</option>
              <option value="UX">User Experience</option>
              </select>
          </div>
          <div>
            <input
              type="submit"
              name="submit"
              value="Register"
            />
            <Link to="/login">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

RegisterPage.propTypes = propTypes;
RegisterPage.defaultProps = defaultProps;

export default RegisterPage;

