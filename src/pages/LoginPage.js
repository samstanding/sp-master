import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { triggerLogin, formError, clearError } from '../redux/actions/loginActions';
import LoginForm from '../components/LoginForm/LoginForm';

const propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({ push: PropTypes.func }),
};

const defaultProps = {
  dispatch: () => {},
  history: { push: () => {} },
};

const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
    this.login = this.login.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(clearError());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.userName) {
      this.props.history.push('/user');
    }
  }

  login(event) {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.props.dispatch(formError());
    } else {
      this.props.dispatch(triggerLogin(this.state.username, this.state.password));
    }
  }

  handleChangeFor = propertyName => event => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.props.login.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          { this.props.login.message }
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    let content;
    if(this.state) {
      content = <LoginForm login={this.login} handleChangeFor={this.handleChangeFor} state={this.state}/>;
    }
    return (
      <div>
        { this.renderAlert() }
        {content}
      </div>
    );
  }
}

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;

export default connect(mapStateToProps)(LoginPage);
