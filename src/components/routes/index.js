import React, { Component } from 'react';
import RouteList from './list.js'
import Empty from '../empty'
import { connect } from 'react-redux';
import { SetRoute, UpdateFavorite } from '../../store/actions/routes'

class Routes extends Component {
  
  constructor () {

    super();
   
    this.state = {

      filter: '',
      routeSelected: null,
    };
  }


  updateSearch (inputValue) {
    
    this.setState({
      filter: inputValue
    });
  }

  selectRoute = (route) => {

    this.setState({
      route
    })
  }

  getRoute = () => {

    const { type, routes, favoriteRoutes } = this.props;
  
    if (routes && favoriteRoutes) {
      return type === 'routes' ? routes : favoriteRoutes;

    }else{
      return null;
    }
  }
  
  render () {
  
    return (
      <div>
        {
          this.getRoute() !== null && this.getRoute().size > 0 ?

            <RouteList filter={this.props.textSearchRoute} routes={this.getRoute()} SetRoute={this.props.SetRoute} UpdateFavorite={this.props.UpdateFavorite}></RouteList>

          :
          <Empty/>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    routes: state.routes.routes,
    favoriteRoutes: state.routes.favoriteRoutes,
    textSearchRoute: state.routes.textSearchRoute,
  }
}
export default connect(state => ( mapStateToProps), { SetRoute, UpdateFavorite })(Routes);
