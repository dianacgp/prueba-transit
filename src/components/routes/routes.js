import React, { Component } from 'react';
import Container from '../container';
import RouteFilter from './route-filter.js'
import RouteList from './route-list.js'
import Empty from '../empty.js'
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

    return type === 'routes' ? routes.toJS() : favoriteRoutes.toJS();
  }
  
  render () {
  
    return (
      <Container>
        {
          this.getRoute().length > 0 ?
          <div>
            <RouteFilter updateSearch={this.updateSearch.bind(this)} searchText={this.state.filter} />
            <br/>
            <RouteList filter={this.state.filter} routes={this.getRoute()} SetRoute={this.props.SetRoute} UpdateFavorite={this.props.UpdateFavorite}></RouteList>
          </div>
          :
          <Empty/>
        }
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    routes: state.routes.routes,
    favoriteRoutes: state.routes.favoriteRoutes,
  }
}
export default connect(state => ( mapStateToProps), { SetRoute, UpdateFavorite })(Routes);

