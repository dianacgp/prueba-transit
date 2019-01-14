import * as actions from '../action-types'

import { Record, List } from 'immutable';

const InitialState = Record({
  form_disabled: false,
  form_error: false,

  routes: new List(),
  routes_refreshing: false,
  routes_loaded: false,
  routes_error: false,

  route: null


});
const initialState = new InitialState();
let result =  [];

export const routes = (state = initialState, action) => {
	if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
	switch (action.type) {

    case actions.SET_ROUTES: 
  
      return state.merge({
        routes: action.payload,
      });

    case actions.SET_ROUTE: 
    
      return state.merge({
        route: action.payload,
      });
		default: 
			return state
	}
}