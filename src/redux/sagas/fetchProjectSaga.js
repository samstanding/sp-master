import { call, put, takeLatest } from 'redux-saga/effects';
import { PROJECT_ACTIONS } from '../actions/projectActions';
import {getProjects} from '../requests/projectRequests';

function* fetchProjects () {
    try {
        yield put({type: PROJECT_ACTIONS.GET_PROJECTS_START});
        const projects = yield call(getProjects);
        yield put({
            type: PROJECT_ACTIONS.GET_PROJECTS_SET,
            projects,
        });
        yield put ({
            type: PROJECT_ACTIONS.GET_PROJECTS_DONE,
        });
    } catch (error) {
        yield put ({
            type: PROJECT_ACTIONS.GET_PROJECTS_DONE,
        }); 
        yield put ({
            type: PROJECT_ACTIONS.GET_PROJECTS_FAILED,
            message: error.message,
        })
    }
}

function* getProjectsSaga () {
    yield takeLatest(PROJECT_ACTIONS.GET_PROJECTS, fetchProjects);
}

export default getProjectsSaga;