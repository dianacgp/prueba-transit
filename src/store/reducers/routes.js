import * as actions from '../action-types'

import Immutable, { Record, List } from 'immutable';

const InitialState = Record({
  form_disabled: false,
  form_error: false,

  routes: new List(),

  favoriteRoutes: new List(),

  shapes: new List(),

  trips: new List(),

  route: null,
  
  coordinates: null,

  apiKeyGoogleMaps: null,

  textSearchRoute: '',


});
const initialState = new InitialState();

export const routes = (state = initialState, action) => {
	if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

    function SetListRoutes(route) {

      let favoriteRoutes = state.favoriteRoutes;
      let routes = state.routes;

      const indexFavorites = favoriteRoutes.toMap().findKey(function(item) { if(item.route_id === route.route_id) return item; });
      const indexRoutes = routes.toMap().findKey(function(item) { if(item.route_id === route.route_id) return item; });

      if ( indexFavorites !== undefined ) {

        favoriteRoutes =  state.favoriteRoutes.remove(indexFavorites);

      }else{
        favoriteRoutes = state.favoriteRoutes.push(action.payload)
      }

      if ( indexRoutes !== undefined ) {

        routes = state.routes.set( indexRoutes, route);

      }

      return {
        favoriteRoutes: favoriteRoutes,
        routes: routes,
      }
  }

	switch (action.type) {


    case actions.SET_ROUTES: 

      return state.merge({
        routes:  action.payload,
      });

    //--------------------------
    case actions.SET_FAVORITE_ROUTES: 

      return state.merge({
        favoriteRoutes:  action.payload,
      });
    
    //--------------------------

    case actions.SET_SHAPES: 

      return state.merge({
        shapes: action.payload,
      });
    //--------------------------

    case actions.SET_TRIPS: 

      return state.merge({
        trips: action.payload,
      });
    //--------------------------

    case actions.SET_ROUTE: 
    
      return state.merge({
        route: action.payload.route,
        coordinates: action.payload.coordinates
      });
    //--------------------------

    case actions.UPDATE_FAVORITE: 
      
      return state.merge(SetListRoutes(action.payload));
    //--------------------------

    case actions.SET_API_KEY_GOOGLE_MAPS: 
      
      return state.merge({
        apiKeyGoogleMaps: action.payload,
      });
    //-------------------------
    case actions.SEARCH_ROUTE: 
      
      return state.merge({
        textSearchRoute: action.payload,
      });

		default: 
		return state
	}
}