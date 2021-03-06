
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import App from './component/App';
import reducers from './reducers';
import "./App.css";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDom.render((
	<Provider store= {store}>
		<App />
	</Provider>
	),document.querySelector('#root'));