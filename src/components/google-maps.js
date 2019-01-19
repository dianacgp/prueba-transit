
import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {

  constructor () {
    super();
   
    this.state = {
      points: null,
    };
  }

  componentWillReceiveProps(next){

    if (next.coordinates !== null){
      this.setState({ points: next.coordinates });
    }
    //console.log('next.coordinates', next.coordinates)

  }
  render() {

    const { points } = this.state;

    var bounds = new this.props.google.maps.LatLngBounds();
    
    for (var i = 0; ( points !== null && i < points.length ); i++) {
      bounds.extend(points[i]);
    }

    return (
      <div className='col-md-6'>
        {
          points !== null &&
          <Map
            style={{width: 500, height: 500, position: 'relative'}}
            className={'map'}
            google={this.props.google}
            bounds={bounds}>
          </Map>
        }
      </div>
    );
  }
}
 
export default GoogleApiWrapper(
  (props) => ({
    apiKey: props.apiKey
  }
))(MapContainer)