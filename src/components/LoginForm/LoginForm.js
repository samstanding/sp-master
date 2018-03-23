import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LoginForm extends Component {
    render() {
        return (
<form onSubmit={this.props.login}>
<h1>Login</h1>
<div>
    <TextField 
    floatingLabelText="username"
    value={this.props.username}
    onChange={this.props.handleChangeFor('username')}
    />
</div>
<div>
    <TextField 
    floatingLabelText="password field"
    type="password"
    value={this.props.password}
    onChange={this.props.handleChangeFor('password')}
    />
</div>
<div>
  <RaisedButton
    type="submit"
    primary={true}
    label="Log In"
  />
  {'       '}
  <Link to="/register"> 
  <RaisedButton label="register"/>
  </Link>
</div>
</form>
        )
    }

}

export default LoginForm;