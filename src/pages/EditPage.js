import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import axios from 'axios';
// import CONSTANTS from './../constants';
import ProjectForm from '../components/ProjectForm/ProjectForm';
import {triggerPut} from  '../redux/actions/projectActions';



const propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.shape({ userName: PropTypes.string, isLoading: PropTypes.bool }),
  list:PropTypes.array,
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
  list: state.userProject.userProject,
});


class EditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        _id: '',
        title: '',
        description: '',
        appHosted:'',
        github:'',
        projectURL:{},
      },
      message: '',
    };
    // this.logout = this.logout.bind(this);
    this.handleChangeFor=this.handleChangeFor.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    // this.editProject = this.editProject.bind(this);
    // this.getUserProject=this.getUserProject.bind(this);


  }

//   editProject(newProject) {
//     if (this.props.list) {
//      let projectId = this.props.list[0].project[0]._id;
//     axios.put(`${CONSTANTS.apiBaseUrl}/projects/${projectId}`, newProject)
//     .then(response => response)
//     .catch(error => {
//         console.log('error on put', error);
//     }) 
// }
//   }
  

  // getUserProject () {
  //     axios.get(`${CONSTANTS.apiBaseUrl}/projects/userproject`)
  //     .then(response => {
  //         console.log(response.data.project[0]);
  //         this.setState({
  //             project: {
  //                 title: response.data.project[0].title,
  //                 description: response.data.project[0].description,
  //                 appHosted: response.data.project[0].appHosted,
  //                 github: response.data.project[0].github,
  //             },
  //         })
  //       }).catch(error => {console.log(error);});
  // }

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
    console.log(this.state.project);
    this.props.dispatch(triggerPut(this.state.project));
    this.props.history.push('/review');

  }


  componentDidMount() {
    // this.getUserProject();
    if(this.props.list) {
      this.setState({
        project: {
          _id: this.props.list[0].project[0]._id,
          title: this.props.list[0].project[0].title,
          description: this.props.list[0].project[0].description,
          github: this.props.list[0].project[0].github,
          appHosted:this.props.list[0].project[0].appHosted,
          projectURL: this.props.list[0].project[0].projectURL,
        },
      });
    }
    

  }


  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('login');
    }
  }

 

 
  

  render() {
    let content = null;
    if(this.props.list) {
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