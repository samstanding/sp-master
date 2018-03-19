import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import sendProject from './projectReducer';
import projects from './fetchProjectReducer';


const store = combineReducers({
  user,
  login,
  projects,
  sendProject,
});

export default store;
