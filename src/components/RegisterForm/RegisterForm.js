import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import TextField from 'material-ui/TextField';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class RegisterForm extends Component {

    render() {
        return (
          // <MuiThemeProvider>
          <form onSubmit={this.props.registerUser}>
          <h1>Register User</h1>
          <div>
            {/* <TextField 
            hintText="username"
            value={this.props.username}
            onChange={this.props.handleChangeFor('username')}
            /> */}
            <br />
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.props.password}
                onChange={this.props.handleChangeFor('password')}
              />
            </label>
            <label htmlFor="firstName">
              First Name:
              <input
                type="text"
                name="firstName"
                value={this.props.firstName}
                onChange={this.props.handleChangeFor('firstName')}
              />
            </label>
            <label htmlFor="lastName">
              Last Name:
              <input
                type="text"
                name="lastName"
                value={this.props.lastName}
                onChange={this.props.handleChangeFor('lastName')}
              />
            </label>
            <label htmlFor="cohort">
              Cohort:
              <input
                type="text"
                name="cohort"
                value={this.props.cohort}
                onChange={this.props.handleChangeFor('cohort')}
              />
            </label>
            <select value={this.props.program} onChange={this.props.handleChangeFor('program')}>
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
        // </MuiThemeProvider>
        )
    }
}

export default RegisterForm;