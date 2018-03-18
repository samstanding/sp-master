import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CONSTANTS from '../constants/';
import axios from 'axios';


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
    // let content = null;

    // if (this.props.user.userName) {
    //   content = (
    //     <div>
    //       <p>
    //         Info Page
    //       </p>
    //     </div>
    //   );
    // }

    return (
      <div>
        <h2>Welcome this our landing page</h2>
        <h3>We have cluster flies and I....</h3>
      </div>
    );
  }
}

LandingPage.propTypes = propTypes;
LandingPage.defaultProps = defaultProps;


export default LandingPage;
