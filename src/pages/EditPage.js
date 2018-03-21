import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProjectForm from '../components/ProjectForm/ProjectForm';
import {fetchUser} from '../redux/actions/userActions';
import { triggerLogout } from '../redux/actions/loginActions';
import {triggerPut} from  '../redux/actions/projectActions';

const propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.shape({ userName: PropTypes.string, isLoading: PropTypes.bool }),
  history: PropTypes.shape({ push: PropTypes.func }),
};

const defaultProps = {
  dispatch: () => {},
  user: { userName: null, isLoading: true },
  history: { push: () => {} },
};

const mapStateToProps = state => ({
  user: state.user,
});


class EditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: 
      {
        appHosted: '',
        appHosted2: '',
        github: '',
        title: '',
        description: '',
      },
      message: '',
    };
    this.logout = this.logout.bind(this);
    this.handleChangeFor=this.handleChangeFor.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChangeFor = propertyName => event => {
    this.setState({
      project: {
        ...this.state.project,
        [propertyName]: event.target.value,
        }
      });
    }
  

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(triggerPut(this.state.project, this.props.user.userName));
    this.props.history.push('/review');

  }


  componentDidMount() {
    this.props.dispatch(fetchUser());
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('login');
    }
  }

  logout() {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >
            Welcome, { this.props.user.userName }!
          </h1>
          <h2>Here's where you can make changes to your project inputs</h2>
          <ProjectForm handleChangeFor={this.handleChangeFor} project={this.state.project} handleSubmit={this.handleSubmit} />
          <button
            onClick={this.logout}
          >
            Log Out
          </button>
        </div>
      );
    }

    return (
      <div>
        { content }
      </div>
    );
  }
}

EditPage.propTypes = propTypes;
EditPage.defaultProps = defaultProps;

export default connect(mapStateToProps)(EditPage);