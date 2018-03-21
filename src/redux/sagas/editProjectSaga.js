import { call, put, takeLatest } from 'redux-saga/effects';
import { PROJECT_ACTIONS } from '../actions/projectActions';
import {editProject} from '../requests/projectRequests';

function* gatherEditedProject (action) {
    try {
    yield put ({type: PROJECT_ACTIONS.GATHER_EDITED_PROJECT});
    yield call (editProject, action.payload);
    } catch(error) {
        console.log('error on send project: ', error);
    }
}

function* editProjectSaga() {
    yield takeLatest(PROJECT_ACTIONS.EDIT_PROJECT, gatherEditedProject );
}

export default editProjectSaga;