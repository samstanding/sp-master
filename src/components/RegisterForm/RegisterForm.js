import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class RegisterForm extends Component {

    render() {
        return (
          <MuiThemeProvider>
          <form onSubmit={this.props.registerUser}>
          <h1>Register User</h1>
          <div>
            <TextField 
            floatingLabelText="username"
            hintText="username"
            value={this.props.username}
            onChange={this.props.handleChangeFor('username')}
            />
          </div>
          <div>
            <TextField 
            floatingLabelText="password"
            hintText="password"
            type="password"
            value={this.props.password}
            onChange={this.props.handleChangeFor('password')}
            />
          </div>
          <div>
            <TextField 
            floatingLabelText="first name"
            hintText="first name"
            value={this.props.firstName}
            onChange={this.props.handleChangeFor('firstName')}
            />
          </div>
          <div>
            <TextField 
            floatingLabelText="last name"
            hintText="last name"
            value={this.props.lastName}
            onChange={this.props.handleChangeFor('lastName')}
            />
          </div>
          <div>
            <TextField 
            floatingLabelText="cohort"
            hintText="cohort"
            value={this.props.cohort}
            onChange={this.props.handleChangeFor('cohort')}
            />
          </div>
            <select value={this.props.program} onChange={this.props.handleChangeFor('program')}>
              <option value="Full Stack">Full Stack</option>
              <option value="UX">User Experience</option>
              </select>
          <div>
            <input
              type="submit"
              name="submit"
              value="Register"
            />
            <Link to="/login">Cancel</Link>
          </div>
        </form>
         </MuiThemeProvider>
        )
    }
}

export default RegisterForm;