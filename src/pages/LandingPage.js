import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar/SearchBar';
// import AppBarHome from '../components/AppBarHome/AppBarHome';
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
});

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResults: [],
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(event) {
    this.setState({searchText: event.target.value});
    this.handleSubmit(event);
  }

  handleSubmit(event) {
    event.preventDefault();
    let updatedList= [];
    this.props.list.filter((project) => {
      if  (JSON.stringify(project).toLowerCase().search(this.state.searchText.toLowerCase()) !== -1) {
        updatedList.push(project);
      }
    });
    this.setState({searchResults: updatedList}); 
    
  }
 
  componentDidMount() {
    this.props.dispatch(fetchProjects());
  }

  render() {
    let content;
    if (this.state.searchResults.length > 0) {
      content = (
        <div>
        {/* <AppBarHome onChange={this.onChange} searchText={this.state.searchText} handleSubmit={this.handleSubmit} /> */}
        <ProjectCards list={this.state.searchResults}/> 
        </div>
      );
    }
    else if (this.props.list) {
      content = (
        <div>
          {/* <AppBarHome onChange={this.onChange} searchText={this.state.searchText} handleSubmit={this.handleSubmit} />
         */}
        <ProjectCards list={this.props.list}/>
        </div>
      );
    }

    return (
      <div>
        <SearchBar onChange={this.onChange} searchText={this.state.searchText} handleSubmit={this.handleSubmit} />
        {content}
        </div>
    );
  }
}

LandingPage.propTypes = propTypes;
LandingPage.defaultProps = defaultProps;


export default connect (mapStateToProps) (LandingPage);
