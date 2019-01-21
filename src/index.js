import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import { save, load } from "redux-localstorage-simple"
import rootReducer from './store/reducers'
import App from './components/app';
import * as serviceWorker from './serviceWorker';

const createStoreWithMiddleware 
    = applyMiddleware(
        save() // Saving done here
    )(createStore)
    

const store = createStoreWithMiddleware(
    rootReducer,    
    load() // Loading done here
)   
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'))


serviceWorker.unregister();