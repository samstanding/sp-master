import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import './RegisterForm.css';


class RegisterForm extends Component {
    render() {
        return (
          <div>
          <div className="RegisterHeading">
          <h1>Register User</h1>
          </div>
          <div className="RegisterFormLayout">
          <form onSubmit={this.props.registerUser}>
          <div className="RegisterFormRow">
          <div className="FormItem">
            <TextField 
            
            floatingLabelText="username"
            value={this.props.username}
            onChange={this.props.handleChangeFor('username')}
            />
            </div>
            <div className="FormItem">
            <TextField 
            
            floatingLabelText="password"
            type="password"
            value={this.props.password}
            onChange={this.props.handleChangeFor('password')}
            />
          </div>
          </div>
          <div className="RegisterFormRow">
          <div className="FormItem">
            <TextField 
            
            floatingLabelText="first name"
            value={this.props.firstName}
            onChange={this.props.handleChangeFor('firstName')}
            /> 
            </div>
            <div className="FormItem">
            <TextField 
            
            floatingLabelText="last name"
            value={this.props.lastName}
            onChange={this.props.handleChangeFor('lastName')}
            />
          </div>
          </div>
          <div className="RegisterFormRow">
          <div className="FormItem">
            <TextField 

            floatingLabelText="cohort"
            value={this.props.cohort}
            onChange={this.props.handleChangeFor('cohort')}
            />
            </div>
            <div className="FormItem">
            <RadioButtonGroup 
            value={this.props.program}
            onChange={this.props.handleChangeFor('program')}>
            <RadioButton
            onChange={this.props.handleChangeFor('program')}
            value="Full Stack"
            label="Full Stack"
            checked={this.props.program === 'Full Stack'}/>
            <RadioButton
            onChange={this.props.handleChangeFor('program')}
            value='User Experience'
            label="User Experience"
            checked={this.props.program === 'User Experience'}
            />
            </RadioButtonGroup>
            </div>
            </div>
          <div className="RegisterButtons">
          <div className="RegisterButton">
            <RaisedButton 
              type="submit"
              label="Register"
              primary={true}
            />
            </div>
            {'         '}
            <Link to="/login">
            <RaisedButton 
            label="cancel"/>
            </Link>
          </div>
        </form>
        </div>
        </div>
        )
    }
}

export default RegisterForm;
