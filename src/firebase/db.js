import { db } from './firebase';

export const dbCreateRoute = ( route ) =>

  db.ref(`routes/${route.route_id}`).set({
    route_id: route.route_id,
    route_short_name: route.route_short_name,
    route_long_name: route.route_long_name,
    route_desc: route.route_desc,
    route_type: route.route_type,
    route_url: route.route_url,
    route_color: route.route_color,
    favorite: false,
  });

  export const dbCreateCoordinatesByRoute= ( route_id, coordinates ) =>

    db.ref(`coordinates/${route_id}`).set({
      coordinates
    });

  export const onceGetRoutes = () =>
    db.ref('routes').once('value')

  export const getRoutesFavorites = () =>
    db.collection('routes').where('favorite', '==', false);;

  export const onceGetCoordinates = (route_id) =>
    db.ref(`coordinates/${route_id}`).once('value');

  export const setFavorite = (route) => 
    db.ref('routes').child(route.route_id).update({
      favorite: !route.favorite
    });




