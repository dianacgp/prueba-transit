import * as actions from '../action-types'

import { Record, List } from 'immutable';

const InitialState = Record({
  form_disabled: false,
  form_error: false,

  routes: new List(),

  shapes: new List(),

  trips: new List(),

  route: null


});
const initialState = new InitialState();

export const routes = (state = initialState, action) => {
	if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
	switch (action.type) {

    case actions.SET_ROUTES: 
      //console.log('en SET_ROUTES',  action.payload)
      return state.merge({
        routes: action.payload,
      });


    case actions.SET_SHAPES: 
      //console.log('en SET_SHAPES',  action.payload)
      return state.merge({
        shapes: action.payload,
      });


    case actions.SET_TRIPS: 
      //console.log('en SET_TRIPS',  action.payload)
      return state.merge({
        trips: action.payload,
      });

    case actions.SET_ROUTE: 
    
      return state.merge({
        route: action.payload,
      });
		default: 
			return state
	}
}