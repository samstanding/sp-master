import React, { Component } from 'react';
import TextField from 'material-ui-next/TextField';
import { Link } from 'react-router-dom';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Button from 'material-ui-next/Button';
import Grid from 'material-ui-next/Grid';

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
    margin: theme.spacing.unit,
    padding: 50,
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
          
          <Grid className={this.props.root}> 
          <Grid container className={this.props.root} justify="center" item xs={11}>
          <h1>Register User</h1>
          </Grid>
          <form onSubmit={this.props.registerUser} className={this.props.container}>          
          <Grid container className={this.props.control} justify="center" item xs={12} >
         
          <Grid item xs={2}>
            <TextField 
             id="username"
             label="username"
             placeholder="username"
             className={this.props.textField}
             value={this.props.username}
             onChange={this.props.handleChangeFor('username')}
            />
            </Grid>
           
            <Grid item xs={2}>
            <TextField 
            id="password-input"
            type="password"
            label="password"
            placeholder="password"
            className={this.props.textField}
            value={this.props.password}
            onChange={this.props.handleChangeFor('password')}
            />
         
          </Grid>
          </Grid>
          <Grid container className={this.props.control} justify="center" item xs={12} >
            <Grid item xs={2}>
            <TextField 
            id="first name"
            label="first name"
            placeholder="first name"
            value={this.props.firstName}
            onChange={this.props.handleChangeFor('firstName')}
            /> 
            </Grid>
            <Grid item xs={2}>
            <TextField 
            id="last name"
            label="last name"
            placeholder="last name"
            value={this.props.lastName}
            onChange={this.props.handleChangeFor('lastName')}
            />
          </Grid>
          </Grid>
          <Grid container className={this.props.control} justify="center" item xs={12} >
            <Grid item xs={2}>
            <TextField 
            id="cohort"
            label="cohort"
            placeholder="last name"
            value={this.props.cohort}
            onChange={this.props.handleChangeFor('cohort')}
            />
            </Grid>
            <Grid item xs={2}>
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
            <br/>
            <Grid container className={this.props.control} justify="center" item xs={12} spacing={40} >
            <Grid item xs={2}>
            <Button 
              variant="raised"
              color="primary"
              type="submit"
            >
            Register
            </Button>
            </Grid>
            <Grid item xs={2}>
            <Button
            component={Link} to="/login"
            variant="raised"
            label="cancel"> 
            cancel
            </Button>
            </Grid>
          </Grid>
          </form>
        </Grid>
        
        )
    }
}

export default RegisterForm;
