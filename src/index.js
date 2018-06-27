import React from 'react';
import ReactDOM from 'react-dom';
import './react-app/index.css';
import { AppContainer } from "./react-app/AppContainer";
import { Provider } from "react-redux";
import {
	applyMiddleware,
	combineReducers,
	createStore
} from "redux";
import thunk from 'redux-thunk';
import myThunk from './thunk';
import { loading, users } from './reducer';


const store = createStore(
	combineReducers({
		loading,
		users
	}),
	{ loading: false, users: [] },
	applyMiddleware(thunk)
);
store.dispatch(myThunk);

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('root')
);
