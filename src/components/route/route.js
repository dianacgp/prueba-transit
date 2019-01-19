import React, { Component } from 'react';
import { db } from '../../firebase';
import './route.css';

export default class Route extends Component {

   constructor (props) {
    super(props);
    
    this.state = {
      route: props.route,
    };

  }

  componentWillReceiveProps(next){
      
    if ( next.route.route_id === this.state.route.route_id &&  next.route.favorite !== this.state.route.favorite   ){
      this.setState({ route: next.route});
    }

    if (this.state.route.route_id !== next.route.route_id ){

      this.setState({ route: next.route});
    }

  }


  setFavorite = (route) => {
  
    db.SetFavorite(route)
    .then(() => {

      route.favorite = !route.favorite;
      this.setState({route});
      this.props.UpdateFavorite(route); 

    })
    .catch(e => console.log('error', e))
  }

  updateFavorite = (e) => {
    
    const { route } = this.state;
    e.stopPropagation();
  
    this.setFavorite(route);

  }

  markRoute = (e) => {
    
    const { route } = this.state;
    e.preventDefault();
    this.props.selectRoute(route);

  }
  render(){

    const { route } = this.state;

    return (

      <li  
        id="route"
        onClick={this.markRoute} 
        className="list-group-item Route">
        <div className="row">
          <div className="col-md-9">
            <span className="badge badge-pill badge-primary mr-2 Route-badge" style={{backgroundColor: `#${route.route_color}`}}>{route.route_id}</span><span className="Route-title">{route.route_long_name}</span>
          </div>
          <div className="col-md-3">
            <button 
              id="button-route"
              onClick={this.updateFavorite} 
              type="button" 
              className={!route.favorite ? "btn btn-light" :  "btn btn-primary"}>Favorito
            </button>
          </div>
        </div>
      </li>
    )
  }
}