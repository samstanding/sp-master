import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Search from '../components/SearchBar/SearchBar';
import ProjectCards from '../components/ProjectCard/ProjectCard';
import {fetchProjects} from '../redux/actions/projectActions';


const propTypes = {
  dispatch: PropTypes.func,
  list: PropTypes.array,
  history: PropTypes.shape({ push: PropTypes.func }),
};

const defaultProps = {
  dispatch: () => {},
  list: {projects: []},
  history: { push: () => {} },
};

const mapStateToProps = state => ({
  list: state.projects.projects,
})

 
class LandingPage extends Component {
 
 
 
  componentDidMount() {
    this.props.dispatch(fetchProjects());
  }

  render() {
    let content;
    if(this.props.list) {
      content = (
        
        <ProjectCards list={this.props.list}/>
    
      )
    }

    return (
      <div>
        <Search />
        {content}
        </div>
    );
  }
}

LandingPage.propTypes = propTypes;
LandingPage.defaultProps = defaultProps;


export default connect (mapStateToProps) (LandingPage);
