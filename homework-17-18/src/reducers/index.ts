import {combineReducers} from "redux";

import Users from './users';
import Projects from './project';

// @ts-ignore
const AllReducers = combineReducers({
  login: Users,
  project: Projects
});

export default AllReducers;
