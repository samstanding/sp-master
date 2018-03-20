import {combineReducers} from 'redux';
import {PROJECT_ACTIONS} from '../actions/projectActions';

const userProject = (state= null, action) => {
    switch(action.type) {
        case PROJECT_ACTIONS.GET_USER_PROJECT_SET:
        console.log(action.userProject);
        return action.userProject || state;
        default:
        return state;
    }
}

const isLoading = (state = false, action) => {
    switch(action.type) {
        case PROJECT_ACTIONS.GET_USER_PROJECT_START:
        return true;
        case PROJECT_ACTIONS.GET_USER_PROJECT_DONE:
        return false;
        default: 
        return state;
    }
}

export default combineReducers ({
    userProject,
    isLoading
})