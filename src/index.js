
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import {apiMiddleware} from './store/middleware/api'
import rootReducer from './store/reducers'

import Route from './route';
import * as serviceWorker from './serviceWorker';


const store = createStore(rootReducer, applyMiddleware(apiMiddleware))

ReactDOM.render(
	<Provider store={store}>
		<Route />
	</Provider>,
	document.getElementById('root'))


serviceWorker.unregister();
