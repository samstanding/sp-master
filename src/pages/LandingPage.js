import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CONSTANTS from '../constants/';
import axios from 'axios';
import ProjectCards from '../components/ProjectCard/ProjectCard';


const propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }),
};

const defaultProps = {
  history: { push: () => {} },
};

 
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    }
    this.getProjects=this.getProjects.bind(this);
  }
 
  getProjects () {
    axios.get(`${CONSTANTS.apiBaseUrl}/projects`)
    .then(response => {
      console.log(response.data);
      this.setState({
        projects: response.data,
      })
    }).catch(error => {
      console.log('error on projects get: ', error);
    }) 
  }

  componentDidMount() {
    this.getProjects();
  }

  render() {
  

    return (
      <div>
        <ProjectCards projects={this.state.projects}/>
      </div>
    );
  }
}

LandingPage.propTypes = propTypes;
LandingPage.defaultProps = defaultProps;


export default LandingPage;
