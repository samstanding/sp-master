import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {triggerPost } from '../redux/actions/projectActions';
import ProjectForm from '../components/ProjectForm/ProjectForm';
import {fetchUser} from '../redux/actions/userActions';
import { triggerLogout } from '../redux/actions/loginActions';

const propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.shape({ userName: PropTypes.string, isLoading: PropTypes.bool }),
  list: PropTypes.array,
  history: PropTypes.shape({ push: PropTypes.func }),
};

const defaultProps = {
  dispatch: () => {},
  user: { userName: null, isLoading: true },
  list: {projects: []},
  history: { push: () => {} },
};

const mapStateToProps = state => ({
  user: state.user,
  list: state.projects.projects,
});


class UserPage extends Component {
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
        projectURL: {},
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
    this.props.dispatch(triggerPost(this.state.project));
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
  }

  render() {
    let content = null;
    if (this.props.user.userName) {
      content = (
        <div>
          <ProjectForm handleChangeFor={this.handleChangeFor} project={this.state.project} handleSubmit={this.handleSubmit} logout={this.logout} />
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

UserPage.propTypes = propTypes;
UserPage.defaultProps = defaultProps;


export default connect(mapStateToProps)(UserPage);

