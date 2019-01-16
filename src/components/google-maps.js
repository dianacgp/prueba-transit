import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {

    
   var points = [
    { lat: -33.5044860005, lng: -70.565635 },
    { lat: -33.5046110005, lng: -70.564978 },
    { lat: -33.5047070005, lng: -70.564474 },
    { lat: -33.5047460005, lng: -70.564269 },
    ];
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
})(MapContainer)