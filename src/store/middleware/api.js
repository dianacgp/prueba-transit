import axios from 'axios'
import {API} from '../action-types'

const BASE_URL = 'https://api.foursquare.com/v2/';


export const apiMiddleware = ({dispatch, getState}) => next => action => {
	if (action.type !== API) {
		return next(action)
	}

	const myState = getState();

	const {payload} = action
	dispatch({ type: payload.PENDING })

	const url = `${BASE_URL}${payload.url}&ll=${myState.places.ll}`;
	console.log('url', url)
	axios.get(url) 
		.then(response => {

			dispatch({ type: payload.SUCCESS, payload: response.data })
		})
		.catch(err => {

			dispatch({ type: payload.FAILURE })
		})
}