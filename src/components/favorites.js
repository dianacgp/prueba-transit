import React, { Component } from 'react';
import UploadFile from '../upload-file';
import RoutesFile from '../GTFS/routes.txt';
import Container from './container';
import { SetRoutes, SetRoute } from '../store/actions/routes'
import { connect } from 'react-redux';
import { auth, db } from '../firebase';

const Route = (props) => <li  
  onClick={ (e) =>  { 
    e.preventDefault();
    props.selectRoute(props.route);
    }
  } 
  className="list-group-item">
    <span className="badge badge-pill badge-primary mr-2" style={{backgroundColor: `#${props.route.route_color}`}}>{props.route.route_id}</span>{props.route.route_long_name}
    <button 
      onClick={ (e) =>  { 
        e.preventDefault();
        props.setFavorite(props.route);
        }
      } 
      type="button" 
      className="btn btn-light">Favorito</button>
  </li>;

class RouteFilter extends Component {
  
  handleChange (event) {
    this.props.updateSearch(event.target.value);
  }
  
  render () {
    return (
      <input ref="search" className="form-control" id="search" type="text" placeholder="Search.." onChange={this.handleChange.bind(this)} value={this.props.searchText} />
    )
  }
}
class RouteList extends Component {
  
  constructor (props) {
    super(props);
    
    this.state = {
      routes: props.routes,
    };

    this.selectRoute = this.selectRoute.bind(this);
    this.setFavorite = this.setFavorite.bind(this)
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
   
    
    db.onceGetCoordinates(route.route_id).then(snapshot => {
    
      this.props.SetRoute(route, snapshot.val().coordinates); 
  
    });
  }

  setFavorite = (route) => {
   
    console.log( 'change', route. route_id)
    db.setFavorite(route.route_id);
  }

  render () {
    return (
      <ul className="list-group" id="myList">
        {   this.filter(this.state.routes)
            .map((route, i) => <Route key={i} route={route} selectRoute={this.selectRoute} setFavorite={this.setFavorite}></Route>)}
      </ul>
    )
  }
};

class Routes extends Component {
  
  constructor () {
    super();
   
    this.state = {
      routes: [],
      filter: '',
      routeSelected: null,
    };
  }
  componentWillReceiveProps(next){
    
    this.setState({ routes: next.routes});
  }

  updateSearch (inputValue) {
    let filter = this.state.filter;
    
    this.setState({
      filter: inputValue
    });
  }

  selectRoute = (route) => {

    this.setState({
      route
    })
  }
  
  render () {


    return (
      <Container>
        {this.state.routes.length > 0 &&
          <div>
            <RouteFilter updateSearch={this.updateSearch.bind(this)} searchText={this.state.filter} />
            <br/>
            <RouteList filter={this.state.filter} routes={Object.values(this.state.routes)} SetRoute={this.props.SetRoute}></RouteList>
          </div>
        }
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    routes: state.routes.routes,
    route: state.routes.route,
  }
}
export default connect(state => ( mapStateToProps), { SetRoutes, SetRoute })(Routes);
