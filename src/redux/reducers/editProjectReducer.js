import { PROJECT_ACTIONS } from '../actions/projectActions';

const editProject = (state = '', action) => {
    switch(action.type) {
        case PROJECT_ACTIONS.EDIT_PROJECT:
        return action.payload;
        default:
        return state;
    }
};

export default editProject;