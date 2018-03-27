import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Search from '../components/SearchBar/SearchBar';
import ProjectCards from '../components/ProjectCard/ProjectCard';
import {fetchProjects} from '../redux/actions/projectActions';


const propTypes = {
  dispatch: PropTypes.func,
  list: PropTypes.array,
  items: PropTypes.array,
  history: PropTypes.shape({ push: PropTypes.func }),
};

const defaultProps = {
  dispatch: () => {},
  list: {projects: []},
  items: [],
  history: { push: () => {} },
};

const mapStateToProps = state => ({
  list: state.projects.projects,
  items: state.items,
})

// class FilteredList extends Component {
//   constructor(props) {
//     super(props);
//     let updatedList = this.props.list;
//     updatedList = updatedList.filter((item) => {
//       return item.toLowerCase().search(event.target.toLowerCase()) !== 1;
//     })
//     this.setState({items: updatedList});
//   }
//   componentWillMount() {
//     this.setState({items: this.props.list})
//   }

// }

 
class LandingPage extends Component {
  
  search(event) {
    if (this.props.list) {
      let updatedList = this.props.list;
      console.log(updatedList);
      updatedList = updatedList.filter((item) => {
        return item.toLowerCase().search(event.target.toLowerCase()) !== 1;
      })
      this.setState({items: updatedList});
    }
  }
 
  componentWillMount() {
    this.setState({items: this.props.list})
  }
 
  componentDidMount() {
    this.props.dispatch(fetchProjects());
  }

  render() {
    let content;
    if(this.props.list) {
      content = (
        <div>
        <p>{JSON.stringify(this.state.items)}</p>
        <ProjectCards list={this.props.list}/>
        </div>
      )
    }

    return (
      <div>
        {/* <MyAppBar/> */}
        <Search />
        {content}
        </div>
    );
  }
}

LandingPage.propTypes = propTypes;
LandingPage.defaultProps = defaultProps;


export default connect (mapStateToProps) (LandingPage);
