import React from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui-next/TextField';
import Button from 'material-ui-next/Button';
import './LoginForm.css';


const LoginForm = props => (
  <div className="LoginFormLayout">
    <div className="LoginHeader">
      <h1>Login</h1>
    </div>
    <form onSubmit={props.login} className={props.container}>
      <div>
        <TextField
          id="username"
          label="username"
          placeholder="username"
          className={props.textField}
          value={props.username}
          onChange={props.handleChangeFor('username')}
        />
      </div>
      <div>
        <TextField
          id="password-input"
          type="password"
          label="password"
          placeholder="password"
          className={props.textField}
          value={props.password}
          margin="normal"
          onChange={props.handleChangeFor('password')}
        />
      </div>
      <div>
        <Button
          variant="raised"
          color="primary"
          type="submit"
          label="Log In"
          className={props.button}
        >
        Log In
        </Button>
        {'       '}
        <Button
          component={Link}
          to="/register"
          variant="raised"
          className={props.button}
        >
        Register
        </Button>
      </div>
    </form>
  </div>
);


export default LoginForm;
