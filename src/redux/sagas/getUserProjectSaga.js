import { call, put, takeLatest } from 'redux-saga/effects';
import { PROJECT_ACTIONS } from '../actions/projectActions';
import {getUserProject} from '../requests/projectRequests';

function* fetchUserProject (action) {
    try {
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
            type: PROJECT_ACTIONS.GET_USER_PROJECT_DONE,
        });
        yield put ({
            type: PROJECT_ACTIONS.GET_USER_PROJECT_FAILED,
            message: error.message,
        })
    }
}

function* getUserProjectSaga() {
    yield takeLatest(PROJECT_ACTIONS.GET_USER_PROJECT, fetchUserProject);
}

export default getUserProjectSaga;