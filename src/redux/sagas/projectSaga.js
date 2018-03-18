import { call, put, takeLatest } from 'redux-saga/effects';
import { PROJECT_ACTIONS } from '../actions/projectActions';
import {callProject} from '../requests/projectRequests';

function* gatherProject (action) {
    try {
    yield put ({type: PROJECT_ACTIONS.GATHER_PROJECT});
    yield call (callProject, action.payload);
    } catch(error) {
        console.log('error on send project: ', error);
    }
}

function* projectSaga() {
    yield takeLatest(PROJECT_ACTIONS.POST_PROJECT, gatherProject);
}

export default projectSaga;