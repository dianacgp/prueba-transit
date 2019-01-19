import React, { Component } from 'react';
import Container from './container';
import RouteFilter from './route-filter.js'
import RouteList from './route-list.js'

export default class Routes extends Component {
  
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
            <RouteList filter={this.state.filter} routes={this.state.routes} SetRoute={this.props.SetRoute} UpdateFavorite={this.props.UpdateFavorite}></RouteList>
          </div>
        }
      </Container>
    );
  }
}
