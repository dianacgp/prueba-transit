
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Polyline} from 'google-maps-react';

export class MapContainer extends Component {

  constructor (props) {

    super(props);
   
    this.state = {
      apiKey: props.apiKey,
      points: null,
      triangleCoords: null,
    };
  }

  componentWillReceiveProps(next){

    if (next.coordinates !== null){
      this.setState({ points: next.coordinates, triangleCoords: next.coordinates });
    }

    if (this.state.apiKey !== next.apiKey){
      this.setState({ apiKey: next.apiKey });

    //   configGoogle = GoogleApiWrapper({
    //     apiKey: next.apiKey
    //   })(MapContainer);
    }
  }

  render() {

    const { points, triangleCoords } = this.state;
    var bounds = new this.props.google.maps.LatLngBounds();
    
    for (var i = 0; ( points !== null && i < points.length ); i++) {
      bounds.extend(points[i]);
    }

    return (
      <div className='col-md-6'>
        <Map
          style={{width: 500, height: 500, position: 'relative'}}
          className="Google-maps"
          google={this.props.google}
          bounds={bounds}
          >
           {
            triangleCoords !== null &&
            <Polyline
              path={triangleCoords}
              strokeColor="#F08119"
              strokeOpacity={0.8}
              strokeWeight={2} />
            }
        </Map>
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
