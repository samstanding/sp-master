import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CONSTANTS from '../constants/';
import {triggerPost} from '../redux/actions/projectActions';
import ProjectForm from '../components/ProjectForm/ProjectForm';


import {
  fetchUser,
} from '../redux/actions/userActions';

import { triggerLogout } from '../redux/actions/loginActions';

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


class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: 
      {
        firstName: '',
        lastName: '',
        cohort: '',
        heroku: '',
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
    console.log(this.state);
    console.log(this.props.user.userName);
    
    this.props.dispatch(triggerPost(this.state.project, this.props.user.userName));
  }


  componentDidMount() {
    this.props.dispatch(fetchUser());
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
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
          <ProjectForm handleChangeFor={this.handleChangeFor} project={this.state.project} handleSubmit={this.handleSubmit} />
        {/* // <h2>This is where you'll upload a project</h2>
        // <form onSubmit={this.handleSubmit}>
        // <input placeholder="first name" onChange={this.handleChangeFor('firstName')} name="firstName" value={this.state.project.firstName} />
        // <input placeholder="last name" onChange={this.handleChangeFor('lastName')} name="lastName" value={this.state.project.lastName} />
        // <input placeholder="cohort" onChange={this.handleChangeFor('cohort')} name="cohort" value={this.state.project.cohort}/>
        // <input placeholder="heroku" onChange={this.handleChangeFor('heroku')} name="heroku" value={this.state.project.heroku}/>
        // <input placeholder="github" onChange={this.handleChangeFor('github')} name="github" value={this.state.project.github}/>
        // <input placeholder="title" onChange={this.handleChangeFor('title')} name="title" value={this.state.project.title}/>
        // <input placeholder="description" onChange={this.handleChangeFor('description')} name="description" value={this.state.project.description}/>
        // <input type="submit" value="Submit"/>
        //   </form>  */}
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

