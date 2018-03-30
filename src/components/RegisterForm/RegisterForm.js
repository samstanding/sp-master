import React, { Component } from 'react';
import TextField from 'material-ui-next/TextField';
import { Link } from 'react-router-dom';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Button from 'material-ui-next/Button';
import Grid from 'material-ui-next/Grid';
// import './RegisterForm.css';

const styles = theme => ({
  container: {
    display:'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit*2,
    marginRight: theme.spacing.unit*2,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit
}, 
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing.unit *2,
  },
})

class RegisterForm extends Component {
    render() {
        return (
          <Grid className={this.props.root} spacing={16}> 
          <Grid container className={this.props.root} justify="center" item xs={12}>
          <h1>Register User</h1>
          </Grid>
          <div className="RegisterFormLayout">
          <form onSubmit={this.props.registerUser} className={this.props.container}>
          <Grid container className={this.props.control} justify="center" item xs={12} spacing={24}>
          {/* <div className="FormItem"> */}
          <Grid item>
            <TextField 
             id="username"
             label="username"
             placeholder="username"
             className={this.props.textField}
             value={this.props.username}
             onChange={this.props.handleChangeFor('username')}
            />
            </Grid>
            {/* </div> */}
            {/* <div className="FormItem"> */}
            <Grid item>
            <TextField 
            id="password-input"
            type="password"
            label="password"
            placeholder="password"
            className={this.props.textField}
            value={this.props.password}
            onChange={this.props.handleChangeFor('password')}
            />
          {/* </div> */}
          </Grid>
          </Grid>
          <Grid container className={this.props.control} justify="center" item xs={12} spacing={24}>
            <Grid item>
            <TextField 
            id="first name"
            label="first name"
            placeholder="first name"
            value={this.props.firstName}
            onChange={this.props.handleChangeFor('firstName')}
            /> 
            </Grid>
            <Grid item>
            <TextField 
            id="last name"
            label="last name"
            placeholder="last name"
            value={this.props.lastName}
            onChange={this.props.handleChangeFor('lastName')}
            />
          </Grid>
          </Grid>
          <Grid container className={this.props.control} justify="center" item xs={12} spacing={24}>
            <Grid item>
            <TextField 
            id="cohort"
            label="cohort"
            placeholder="last name"
            value={this.props.cohort}
            onChange={this.props.handleChangeFor('cohort')}
            />
            </Grid>
            <Grid item >
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
            </Grid>
            </Grid>
          <div className="RegisterButtons">
          <div className="RegisterButton">
            <Button 
              variant="raised"
              color="primary"
            >
            Register
            </Button>
            </div>
            {'         '}
            <Button
            component={Link} to="/login"
            variant="raised"
            label="cancel"> 
            cancel
            </Button>
          </div>
        </form>
        </div>
        </Grid>
        )
    }
}

export default RegisterForm;
