import React, { Component } from 'react';
import { db } from '../firebase';
import Route from './route/route.js'

export default class RouteList extends Component {
  
  constructor (props) {
    super(props);
    
    this.state = {
      routes: props.routes,
    };

    this.selectRoute = this.selectRoute.bind(this);
  }

  componentWillReceiveProps(next){

    this.setState({ routes: next.routes});
  }

  filter (routes) {
    if (!this.props.filter) {
      return routes
    }
    return routes.filter((route) =>  ( route.route_id  && route.route_long_name ) ? (route.route_id.toLowerCase().indexOf(this.props.filter.toLowerCase()) >= 0 || route.route_long_name.toLowerCase().indexOf(this.props.filter.toLowerCase()) >= 0 )  : route)
  }

  selectRoute = (route) => {
    
    db.GetCoordinates(route.route_id).then(snapshot => {
    
      this.props.SetRoute(route, snapshot.val().coordinates); 
  
    });
  }

  render () {

    return (
      <ul className="list-group" id="myList">
        {  
          this.filter(this.state.routes)
          .map((route, i) => 
            <Route 
              key={i} 
              route={route} 
              selectRoute={this.selectRoute} 
              UpdateFavorite={this.props.UpdateFavorite}
            />)
          }
      </ul>
    )
  }
};