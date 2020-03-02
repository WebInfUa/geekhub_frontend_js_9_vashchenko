import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import User from "./components/User/Index";
import {createStore} from "redux";
import AllReducers from "./reducers";

const store = createStore (AllReducers);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./redux/store/storeConfig";



ReactDOM.render(
<Provider store={store}>
  <User />
</Provider>,
document.getElementById('root'));

serviceWorker.unregister();
