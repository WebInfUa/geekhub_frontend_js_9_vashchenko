import {combineReducers} from "redux";

import Login from './login';
import Projects from './project';

// @ts-ignore
const AllReducers = combineReducers({
  login: Login,
  project: Projects
});

export default AllReducers;
