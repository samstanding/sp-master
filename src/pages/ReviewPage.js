import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchUser } from '../redux/actions/userActions';
// import {fetchUserProject} from '../redux/actions/projectActions';
import { Link } from 'react-router-dom';
// import ReviewCard from '../components/ReviewCard/ReviewCard';

const propTypes = {
    dispatch: PropTypes.func,
    user: PropTypes.shape({ userName: PropTypes.string, isLoading: PropTypes.bool }),
    list: PropTypes.array,
    project: PropTypes.object,
    history: PropTypes.shape({ push: PropTypes.func }),
  };
  
  const defaultProps = {
    dispatch: () => {},
    user: { userName: null, isLoading: true },
    list: {projects: []},
    project: {},
    history: { push: () => {} },
  };
  
  const mapStateToProps = state => ({
    // list: state.projects.projects,
    user: state.user,
  });



class ReviewPage extends Component {
    constructor(props) {
        super(props);

    }
  
    componentDidMount() {
        this.props.dispatch(fetchUser());
        // this.props.dispatch(fetchUserProject());
      }

   

    render() {
        // let content;
        // this.props.list.map((project) => {
        //     if (project.person.username == this.props.user.userName) {
        //         content = (<ProjectCards list={project}/>);
        //     }
        // })
        let content;
        if(this.props.list) {
                    
                    content = (
                        <div>
                        <p>{JSON.stringify(this.props.user)}</p>
                       {/* <ReviewCard project={project}/> */}
                        </div>
                      )
                
    }
        
        return (
            <div>
            <h1>This is where a {this.props.user.userName} will review their project</h1>
            {content}
            <Link to="/home"> Project Good</Link>
            <Link to ="/user">Project Bad I'd like to go back</Link>
            </div>
        );
    
}
}

ReviewPage.propTypes = propTypes;
ReviewPage.defaultProps = defaultProps;

export default connect(mapStateToProps)(ReviewPage);