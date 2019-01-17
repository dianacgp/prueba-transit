import React, { Component } from 'react';
import Container from './container';
import { SetRoute } from '../store/actions/routes'
import { connect } from 'react-redux';
import { db } from '../firebase';
import Route from './route.js'
import RouteFilter from './route-filter.js'
import RouteList from './route-list.js'

class FavoriteRoutes extends Component {
  
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
    routes: state.routes.favoriteRoutes,
  }
}
export default connect(state => ( mapStateToProps), { SetRoute })(FavoriteRoutes);
