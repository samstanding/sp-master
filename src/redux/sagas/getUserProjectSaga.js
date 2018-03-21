import { call, put, takeLatest } from 'redux-saga/effects';
import { PROJECT_ACTIONS } from '../actions/projectActions';
import { USER_ACTIONS } from '../actions/userActions';
import { callUser } from '../requests/userRequests';
import {getUserProject} from '../requests/projectRequests';

function* fetchUserProject (action) {
    try {
        yield put({ type: USER_ACTIONS.REQUEST_START });
         const user = yield call(callUser);
        yield put({
        type: USER_ACTIONS.SET_USER,
        user,
        });
        yield put({
        type: USER_ACTIONS.REQUEST_DONE,
        });
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





// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    yield put({ type: USER_ACTIONS.REQUEST_START });
    const user = yield call(callUser);
    yield put({
      type: USER_ACTIONS.SET_USER,
      user,
    });
    yield put({
      type: USER_ACTIONS.REQUEST_DONE,
    });
  } catch (error) {
    yield put({
      type: USER_ACTIONS.REQUEST_DONE,
    });
    yield put({
      type: USER_ACTIONS.USER_FETCH_FAILED,
      message: error.message,
    });
  }
}