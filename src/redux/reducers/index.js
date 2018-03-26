import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import sendProject from './projectReducer';
import projects from './fetchProjectReducer';
import userProject from './getUserProjectReducer';
import putProject from './editProjectReducer';


const store = combineReducers({
  user,
  login,
  projects,
  sendProject,
  userProject,
  putProject,
});

export default store;
