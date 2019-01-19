import * as actions from '../action-types';

export const SetRoutes = (routes) => {

  return {
      type: actions.SET_ROUTES,
      payload: routes,
  }
};

export const SetRoute = (route, coordinates) => {

  return {
      type: actions.SET_ROUTE,
      payload: { route, coordinates } ,
  }
};

export const SetShapes = (shapes) => {

  return {
      type: actions.SET_SHAPES,
      payload: shapes,
  }
};

export const SetTrips = (trips) => {

  return {
      type: actions.SET_TRIPS,
      payload: trips,
  }
};

export const UpdateFavorite = (route) => {

  return {
      type: actions.UPDATE_FAVORITE,
      payload: route,
  }
};


export const SetFavoriteRoutes = (routes) => {

  return {
      type: actions.SET_FAVORITE_ROUTES,
      payload: routes,
  }
};
export const SetApiKeyGoogleMaps = (apiKey) => {

  return {
      type: actions.SET_API_KEY_GOOGLE_MAPS,
      payload: apiKey,
  }
};

