import {combineReducers} from 'redux';
import {PROJECT_ACTIONS} from '../actions/projectActions';

const projects = (state = null, action) => {
    switch(action.type) {
        case PROJECT_ACTIONS.GET_PROJECTS_SET:
        return action.projects || state;
        default: 
        return state;
    }
}

const isLoading = (state = false, action) => {
    switch (action.type) {
        case PROJECT_ACTIONS.GET_PROJECTS_START:
        return true;
        case PROJECT_ACTIONS.GET_PROJECTS_DONE:
        return false;
        default: 
        return state;
    }
};

export default combineReducers ({
    projects,
    isLoading,
});