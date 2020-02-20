import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import Login from "./components/Login/Index";
import {createStore} from "redux";
import AllReducers from "./reducers";

const store = createStore (AllReducers);


ReactDOM.render(
<Provider store={store}>
  <Login />
</Provider>,
document.getElementById('root'));

serviceWorker.unregister();
