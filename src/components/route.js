import React, { Component } from 'react';
import { db } from '../firebase';

export default class Route extends Component {

   constructor (props) {
    super(props);
    
    this.state = {
      route: props.route,
    };

  }
  setFavorite = (route) => {
   
    console.log( 'change', route.route_id)
    db.setFavorite(route)
    .then(() => {
      route.favorite = !route.favorite;
      this.setState({route})
    })
    .catch(e => console.log('error', e))
  }
  render(){

    const { route } = this.state;

    return (

      <li  
        onClick={ (e) =>  { 
          e.preventDefault();
          this.props.selectRoute(route);
          }
        } 
        className="list-group-item">
        <div className="row">
          <div className="col-md-9">
            <span className="badge badge-pill badge-primary mr-2" style={{backgroundColor: `#${route.route_color}`}}>{route.route_id}</span>{route.route_long_name}
          </div>
          <div className="col-md-3">
            <button 
              onClick={ (e) =>  { 
                e.preventDefault();
                this.setFavorite(route);
                }
              } 
              type="button" 
              className={!route.favorite ? "btn btn-light" :  "btn btn-primary"}>Favorito
            </button>
          </div>
        </div>
      </li>
    )
  }
}