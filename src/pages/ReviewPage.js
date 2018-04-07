import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from 'material-ui-next/Grid';
import ReviewCard from '../components/ReviewCard/ReviewCard';
import ReviewButtons from '../components/ReviewButtons/ReviewButtons';

const propTypes = {
    dispatch: PropTypes.func,
   
    list: PropTypes.array,
    history: PropTypes.shape({ push: PropTypes.func }),
  };
  
  const defaultProps = {
    dispatch: () => {},
    user: { userName: null, isLoading: true },
    list: {userProject: [] },
    history: { push: () => {} },
  };
  
  const mapStateToProps = state => ({
    list: state.userProject.userProject,
   
  });



class ReviewPage extends Component {

    render() {
        let content;
        if(this.props.list) {
        content = (
            <div>
            <ReviewCard list={this.props.list}/>
            </div>
        ); 
            
    }

        return (
            <div>
            <Grid container justify="center" item xs={12}> 
            <h1>Great! Here's a preview of your solo project. Everything look alright?</h1>
            </Grid>
            {content}
            </div>
        );
    
}
}

ReviewPage.propTypes = propTypes;
ReviewPage.defaultProps = defaultProps;

export default connect(mapStateToProps)(ReviewPage);