import * as actions from '../action-types'

import { Record, List } from 'immutable';

const InitialState = Record({
  form_disabled: false,
  form_error: false,

  routes: new List(),

  shapes: new List(),

  trips: new List(),

  route: null,
  
  coordinates: null


});
const initialState = new InitialState();

export const routes = (state = initialState, action) => {
	if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
	switch (action.type) {

    case actions.SET_ROUTES: 

      return state.merge({
        routes: action.payload,
      });

    case actions.SET_SHAPES: 

      return state.merge({
        shapes: action.payload,
      });

    case actions.SET_TRIPS: 

      return state.merge({
        trips: action.payload,
      });

    case actions.SET_ROUTE: 
    
      return state.merge({
        route: action.payload.route,
        coordinates: action.payload.coordinates
      });

		default: 
			return state
	}
}