import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui-next/Grid';
import CONSTANTS from '../constants/';
import RegisterForm from '../components/RegisterForm/RegisterForm';

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
      
    };

    this.registerUser = this.registerUser.bind(this);
  }

  componentDidMount() {
    this.setState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        cohort: '',
        program:'',
        message: '',
    })
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

  handleChangeFor = propertyName => event => {
    this.setState({
        ...this.state,
        [propertyName]: event.target.value,
      });
    }

  renderAlert() {
    if (this.state.message !== '') {
      return (
        <Grid container justify="center" item xs={11}>
        <h2
          className="alert"
          role="alert"
        >
          {this.state.message}
        </h2>
        </Grid>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div>
        {this.renderAlert()}
        <RegisterForm handleChangeFor={this.handleChangeFor} state={this.state} registerUser={this.registerUser} />
      </div>
    );
  }
}

RegisterPage.propTypes = propTypes;
RegisterPage.defaultProps = defaultProps;

export default RegisterPage;

