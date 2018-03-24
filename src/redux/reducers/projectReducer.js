import {combineReducers} from 'redux';
import { PROJECT_ACTIONS } from '../actions/projectActions';

const sendProject = (state = '', action) => {
    switch(action.type) {
        case PROJECT_ACTIONS.POST_PROJECT:
        return action.payload;
        default:
        return state;
    }
};

const isLoading = (state = false, action) => {
    switch(action.type) {
        case PROJECT_ACTIONS.POST_REQUEST_START:
        return true;
        case PROJECT_ACTIONS.POST_REQUEST_DONE:
        return false;
        default: 
        return state;
    }
};

export default combineReducers ({
    sendProject,
    isLoading, 
});