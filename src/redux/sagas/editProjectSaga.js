import { call, put, takeLatest } from 'redux-saga/effects';
import { PROJECT_ACTIONS } from '../actions/projectActions';
import {editProject, getUserProject} from '../requests/projectRequests';


function* gatherEditedProject (action) {
    try {
    yield put ({type: PROJECT_ACTIONS.GATHER_EDITED_PROJECT});
    yield call (editProject, action.payload);
    yield put ({type: PROJECT_ACTIONS.REQUEST_EDIT_DONE});
    yield put ({type: PROJECT_ACTIONS.GET_USER_PROJECT_START});
    const userProject = yield call(getUserProject);
    yield put ({
        type: PROJECT_ACTIONS.GET_USER_PROJECT_SET,
        userProject,
    }); 
    yield put ({
        type: PROJECT_ACTIONS.GET_USER_PROJECT_DONE,
    });
    } catch(error) {
        yield put ({
            type: PROJECT_ACTIONS.REQUEST_EDIT_DONE,
        });
        yield put ({
            type: PROJECT_ACTIONS.EDIT_PROJECT_FAILED,
            message: error.message,
        })
    }
}

function* editProjectSaga() {
    yield takeLatest(PROJECT_ACTIONS.EDIT_PROJECT, gatherEditedProject );
}

export default editProjectSaga;