import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui-next/TextField';
import Button from 'material-ui-next/Button';
import {withStyles} from 'material-ui-next/styles';
import './LoginForm.css';

const styles = theme => ({
    container: {
        display:'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width:300,
    },
    button: {
        margin: theme.spacing.unit
    }
})

class LoginForm extends Component {
    render() {
      

        return (
        <div className="LoginFormLayout">
        <div className="LoginHeader">
        <h1>Login</h1>
        </div>
        <form onSubmit={this.props.login} className={this.props.container}>
        <div>
        <TextField 
        id="username"
        label="username"
        placeholder="username"
        className={this.props.textField}
        value={this.props.username}
        onChange={this.props.handleChangeFor('username')}
        />
        </div>
        <div>
        <TextField 
        id="password-input"
        type="password"
        label="password"
        placeholder="password"
        className={this.props.textField}
        value={this.props.password}
        margin="normal"
        onChange={this.props.handleChangeFor('password')}
        />
        </div>
        <div>
        <Button
        variant="raised"
        color="primary"
        type="submit"
        label="Log In"
        className={this.props.button}
        >
        Log In
        </Button>
        {'       '}
        
        <Button 
        component={Link} to= "/register"
        variant="raised"
        className={this.props.button}
        >
        Register
        </Button>
        
        </div>
        </form>
        </div>
        )
    }
}

export default LoginForm;