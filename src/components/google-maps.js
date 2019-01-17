
import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {

  constructor () {
    super();
   
    this.state = {
      points: [],
    };
  }

  componentWillReceiveProps(next){

    this.setState({ points: next.coordinates });
    //console.log('next.coordinates', next.coordinates)

  }
  render() {

    const { points } = this.state;

    var bounds = new this.props.google.maps.LatLngBounds();
    
    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }

    return (
      <div className='col-md-6'>
        <Map
          style={{width: 500, height: 500, position: 'relative'}}
          className={'map'}
          google={this.props.google}
          bounds={bounds}>
        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDWK777rQdjC_qMbmp1hp-ODuIdBW99CAg")
})(MapContainer);