import React, { Component } from 'react';
import HomeLayout from './components/home-layout';
import Travels from './components/travels';
import GoogleMaps from './components/google-maps';
import UploadFile from './upload-file';
import RoutesFile from './GTFS/routes.txt';
import ShapesFile from './GTFS/shapes.txt';
import TripsFile from './GTFS/trips.txt';
import { SetRoutes, SetShapes, SetTrips, SetFavoriteRoutes } from './store/actions/routes'
import { connect } from 'react-redux';
import { auth, db } from './firebase';

class Home extends Component {
 
  constructor () {
    super();
   
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
  

    db.onceGetRoutes().then(snapshot => {
      
      if (snapshot.val() === null ) {

        UploadFile(RoutesFile, this.setRoutes);
        UploadFile(ShapesFile, this.setShapes);
        UploadFile(TripsFile, this.setTrips);

      }else {

        this.setState({ loading: false });

        db.GetFavoriteRoutes()
        .then(favorites => {
        
          this.props.SetFavoriteRoutes(Object.values(favorites.val()));
      
        })

        this.props.SetRoutes(Object.values(snapshot.val()));
      
      }
   });
  }

  componentWillReceiveProps(next){

    const { routes, shapes, trips } = next;

    let newRoutes = routes;

    if ( routes.length > 0 && shapes.length > 0 && trips.length > 0  ) {

      routes.map((route, i) => {
      
        let tripByRoute = trips.filter( trip =>   trip.route_id === route.route_id )
        
    
        let shapeByTrip = [];

        tripByRoute.map((tripRoute, j) => {

          shapeByTrip = shapes.filter( shape =>   shape.shape_id.trim() === tripRoute.shape_id.trim())

        });

        let coordinates = [];

        shapeByTrip.map((shape, j) => {

          coordinates.push({lat: parseFloat(shape.shape_pt_lat), lng: parseFloat(shape.shape_pt_lon), sequence: parseInt(shape.shape_pt_sequence)});

        });

        newRoutes[i].coordinates = coordinates;

        console.log(`i ${i} n ${(routes.length - 1)}`)

        if (i === (routes.length - 1)){
          this.saveRoutes(newRoutes)
        }
    
      });
    }
  }

  setRoutes = (data) => {

    this.props.SetRoutes(data);
  }

  saveRoutes = (data) => {
    this.props.SetRoutes(data);

    data.map((route, i) => {
      db.dbCreateRoute(route)
      .then((r) => {

        db.dbCreateCoordinatesByRoute(route.route_id, route.coordinates)
        .then((r) => {
          if (i === (data.length - 1)){
            this.setState({loading: false});
            this.componentDidMount();
          }
        })
        .catch(error => {
         console.log('error trips')
        });
      })
      .catch(error => {
       console.log('error route', error , ' ', route)
      });
    })
  }

  setShapes = (data) => {

    this.props.SetShapes(data);
  }

  setTrips = (data) => {

    this.props.SetTrips(data);

  }

  renderLoading = () => {

    return (
      <div className="container">
     
        <h1>Loading . . .</h1>
        <p>Please wait this take may a few minutes</p>

      </div>
   )
  }
  render() {
    if (this.state.loading){
      return this.renderLoading()
    }else{
      return (
       
        <HomeLayout>
          {this.state.loading &&
            this.renderLoading()
          }
          <Travels/>
          <GoogleMaps route={this.props.route} coordinates={this.props.coordinates} />
        </HomeLayout>

      )
    }
  }
}
const mapStateToProps = state => {
  return {
    routes: state.routes.routes,
    route: state.routes.route,
    coordinates: state.routes.coordinates,
    shapes: state.routes.shapes,
    trips: state.routes.trips,
    
  }
}

export default connect(state => ( mapStateToProps ), { SetRoutes,  SetShapes, SetTrips, SetFavoriteRoutes })(Home);
