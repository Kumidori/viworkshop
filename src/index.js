import React from 'react';
import ReactDOM from 'react-dom';
import './react-app/index.css';
import registerServiceWorker from './react-app/registerServiceWorker';
import {AppContainer} from "./react-app/AppContainer";
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';

const store = createStore(combineReducers({}), {loading: false, users: []}, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<AppContainer/>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
