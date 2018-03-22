import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {fetchUser } from '../redux/actions/userActions';
import {fetchProjects} from '../redux/actions/projectActions';

import ReviewCard from '../components/ReviewCard/ReviewCard';

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
    list: state.projects.projects,
    user: state.user,
  });



class ReviewPage extends Component {
    constructor(props) {
        super(props);

    }
  
    componentDidMount() {
        this.props.dispatch(fetchUser());
        // this.props.dispatch(fetchUserProject());
        this.props.dispatch(fetchProjects());
      }

   

    render() {
        let content;
        if(this.props.list) {
        this.props.list.map((project) => {
            if (project.person[0].username === this.props.user.userName) {
                content = (<ReviewCard project={project}/>);
            }
        })    
                
    }
        
        return (
            <MuiThemeProvider>
            <div>
            <h1>Great! Here's a preview of your solo project. Everything look alright?</h1>
            {content}
            <Link to="/home">
            <RaisedButton label="Look's great! Submit!" />
            </Link>
            {'    '}
            <Link to ="/edit">
            <RaisedButton label="Nope! I need to make a change" />
            </Link>
            </div>
            </MuiThemeProvider>
        );
    
}
}

ReviewPage.propTypes = propTypes;
ReviewPage.defaultProps = defaultProps;

export default connect(mapStateToProps)(ReviewPage);