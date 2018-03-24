import { call, put, takeLatest } from 'redux-saga/effects';
import { PROJECT_ACTIONS } from '../actions/projectActions';
import {callProject} from '../requests/projectRequests';
import {getUserProject} from '../requests/projectRequests';

function* gatherProject (action) {
    try {
    yield put ({type: PROJECT_ACTIONS.GATHER_PROJECT});
    yield call (callProject, action.payload);
    yield put ({type: PROJECT_ACTIONS.POST_REQUEST_DONE});
    yield put ({type: PROJECT_ACTIONS.GET_USER_PROJECT_START});
    yield put ({type: PROJECT_ACTIONS.POST_REQUEST_DONE});
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
            type: PROJECT_ACTIONS.POST_REQUEST_DONE,
        });
        yield put ({
            type: PROJECT_ACTIONS.POST_PROJECT_FAILED,
            message: error.message,
        })
    }
}

function* projectSaga() {
    yield takeLatest(PROJECT_ACTIONS.POST_PROJECT, gatherProject);
}

export default projectSaga;