import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar/SearchBar';
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
    
  }

  handleChangeFor = propertyName => event => {
    this.setState({
        ...this.state.searchText,
        [propertyName]: event.target.value,
        });
    }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.searchText);
    let updatedList= [];
    this.props.list.filter((project) => {
      console.log(project.description);
      if  (project.description.toLowerCase().search(this.state.searchText.toLowerCase()) !== -1) {
        updatedList.push(project);
      }
    });
    this.setState({searchResults: updatedList}); 
    console.log(this.state.searchResults);
    
  }
 
  componentDidMount() {
    this.props.dispatch(fetchProjects());
  }

  render() {
    let content;
    if(this.props.list) {
      content = (
        <div>
        <SearchBar onChange={this.onChange} searchText={this.state.searchText} handleSubmit={this.handleSubmit} />
        <ProjectCards list={this.props.list}/>
        </div>
      )
    }

    return (
      <div>
        
        {content}
        </div>
    );
  }
}

LandingPage.propTypes = propTypes;
LandingPage.defaultProps = defaultProps;


export default connect (mapStateToProps) (LandingPage);
