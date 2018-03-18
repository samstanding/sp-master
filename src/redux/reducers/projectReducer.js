import { PROJECT_ACTIONS } from '../actions/projectActions';

const sendProject = (state = '', action) => {
    switch(action.type) {
        case PROJECT_ACTIONS.POST_PROJECT:
        return action.payload;
        default:
        return state;
    }
};

