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