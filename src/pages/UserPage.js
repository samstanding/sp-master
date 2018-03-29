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

//   handleRoute() {
//     if (this.props.list) {
//     this.props.list.map( (project) => {
//       console.log(project.person[0].username);
//       if(project.person[0].username === this.props.user.userName) {
//         this.props.history.push('/edit')
//       }
//      });
//   }
// }

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

UserPage.propTypes = propTypes;
UserPage.defaultProps = defaultProps;

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

