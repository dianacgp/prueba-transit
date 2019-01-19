
import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



export class MapContainer extends Component {

  constructor (props) {
    super(props);
   
    this.state = {
      apiKey: props.apiKey,
      points: null,
    };
  }

  componentWillReceiveProps(next){

    if (next.coordinates !== null){
      this.setState({ points: next.coordinates });
    }
    if (this.state.apiKey !== next.apiKey){
      console.log('es diferente')
      this.setState({ apiKey: next.apiKey });
      configGoogle = GoogleApiWrapper({
        apiKey: next.apiKey
      })(MapContainer);
    }


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

let configGoogle = GoogleApiWrapper(
  (props) => ({
    apiKey: props.apiKey
  }
))
export default configGoogle(MapContainer);
