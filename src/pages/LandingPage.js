import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import CONSTANTS from '../constants/';
// import axios from 'axios';
import ProjectCards from '../components/ProjectCard/ProjectCard';
import {fetchProjects} from '../redux/actions/projectActions';


const propTypes = {
  dispatch: PropTypes.func,
  list: PropTypes.shape({projects: null, isLoading: PropTypes.bool}),
  history: PropTypes.shape({ push: PropTypes.func }),
};

const defaultProps = {
  dispatch: () => {},
  list: {projects: null, isLoading: true},
  history: { push: () => {} },
};

const mapStateToProps = state => ({
  list: state.projects.projects,
})

 
class LandingPage extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   projects: [],
    // }
    // this.getProjects=this.getProjects.bind(this);
  }
 
  // getProjects () {
  //   axios.get(`${CONSTANTS.apiBaseUrl}/projects`)
  //   .then(response => {
  //     console.log(response.data);
  //     this.setState({
  //       projects: response.data,
  //     })
  //   }).catch(error => {
  //     console.log('error on projects get: ', error);
  //   }) 
  // }

  componentDidMount() {
    this.props.dispatch(fetchProjects());
  }

  render() {
  

    return (
      <div>
        {/* <ProjectCards list={this.props.list}/> */}
        <p>{JSON.stringify(this.props.list)}</p>
        <ul>
        {this.props.list.map( (project, index) => (
          <li key={index}> {project.title} </li>
        ))}
        </ul>
      </div>
    );
  }
}

LandingPage.propTypes = propTypes;
LandingPage.defaultProps = defaultProps;


export default connect (mapStateToProps) (LandingPage);
