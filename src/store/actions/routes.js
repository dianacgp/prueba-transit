import * as actions from '../action-types';

export const SetRoutes = (routes) => {

  return {
      type: actions.SET_ROUTES,
      payload: routes,
  }
};

export const SetRoute = (route) => {

  return {
      type: actions.SET_ROUTE,
      payload: route ,
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