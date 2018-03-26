import {combineReducers} from 'redux';
import { PROJECT_ACTIONS } from '../actions/projectActions';

const putProject = (state = '', action) => {
    switch(action.type) {
        case PROJECT_ACTIONS.EDIT_PROJECT:
        return action.payload;
        default:
        return state;
    }
};

const isLoading = (state = false, action) => {
    switch(action.type) {
        case PROJECT_ACTIONS.REQUEST_EDIT_START:
        return true;
        case PROJECT_ACTIONS.REQUEST_EDIT_DONE:
        return false;
        default:
        return state;
    }
}

export default combineReducers ({
    putProject,
    isLoading,
});