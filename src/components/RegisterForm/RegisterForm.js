import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


class RegisterForm extends Component {
    render() {
        return (
          <div>
          <h1>Register User</h1>
          <form onSubmit={this.props.registerUser}>
          <div>
            <TextField 
            
            floatingLabelText="username"
            value={this.props.username}
            onChange={this.props.handleChangeFor('username')}
            />
          </div>
          <div>
            <TextField 
            
            floatingLabelText="password"
            type="password"
            value={this.props.password}
            onChange={this.props.handleChangeFor('password')}
            />
          </div>
          <div>
            <TextField 
            
            floatingLabelText="first name"
            value={this.props.firstName}
            onChange={this.props.handleChangeFor('firstName')}
            />
          </div>
          <div>
            <TextField 
            
            floatingLabelText="last name"
            value={this.props.lastName}
            onChange={this.props.handleChangeFor('lastName')}
            />
          </div>
          <div>
            <TextField 

            floatingLabelText="cohort"
            value={this.props.cohort}
            onChange={this.props.handleChangeFor('cohort')}
            />
          </div>
          <div>
         
          <SelectField 
          floatingLabelText="program"
          value={this.props.program}
          onChange={this.props.handleChangeFor('program')}>
          <MenuItem value={'full stack'} primaryText="Full Stack" />
          <MenuItem value={'user experience'} primaryText="User Experience" />
            </SelectField>

            </div>
          <div>
            <RaisedButton 
              type="submit"
              label="Register"
              primary={true}
            />
            {'         '}
            <Link to="/login">
            <RaisedButton 
            label="cancel"/>
            </Link>
          </div>
        </form>
        </div>
        )
    }
}

export default RegisterForm;