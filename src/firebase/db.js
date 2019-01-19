import { db } from './firebase';

  export const CreateRoute = ( route ) =>

    db.set(`routes/${route.route_id}`).set({
      route_id: route.route_id,
      route_short_name: route.route_short_name,
      route_long_name: route.route_long_name,
      route_desc: route.route_desc,
      route_type: route.route_type,
      route_url: route.route_url,
      route_color: route.route_color,
      favorite: false,
    });

  export const SetCredentials = ( data ) =>

    db.ref(`credentials/`).set({
      google_maps: data,
    });

  export const CreateCoordinatesByRoute= ( route_id, coordinates ) =>

    db.ref(`coordinates/${route_id}`).set({
      coordinates
    });

  export const GetRoutes = () =>
  
    db.ref('routes').once('value')

  export const GetApiKeyGoogleMaps = () =>

    db.ref('credentials/google_maps').once('value')

  export const GetFavoriteRoutes = () =>
    db.ref('routes').orderByChild('favorite').equalTo(true).once('value');

  export const GetRoutesFavorites = () =>
    db.collection('routes').where('favorite', '==', false);;

  export const GetCoordinates = (route_id) =>
    db.ref(`coordinates/${route_id}`).once('value');

  export const SetFavorite = (route) => 
    db.ref('routes').child(route.route_id).update({
      favorite: !route.favorite
    });




