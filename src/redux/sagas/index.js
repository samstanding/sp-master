import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import projectSaga from './projectSaga';
import getProjectsSaga from './fetchProjectSaga';
import editProjectSaga from './editProjectSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    projectSaga(),
    getProjectsSaga(),
    editProjectSaga(),
  ]);
}
