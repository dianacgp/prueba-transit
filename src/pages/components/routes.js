import React, { Component } from 'react';
import UploadFile from '../../upload-file';
import RoutesFile from '../../GTFS/routes.txt';
import Container from './container';

const Route = (props) => <li className="list-group-item">{props.name}</li>;

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
  
  filter (routes) {
    if (!this.props.filter) {
      return routes
    }
    return routes.filter((route) =>  route.route_long_name ? route.route_long_name.toLowerCase().indexOf(this.props.filter.toLowerCase()) >= 0 : route)
  }
  render () {
    return (
        <ul className="list-group" id="myList">
          {   this.filter(this.props.routes)
              .map((route, i) => <Route key={i} name={route.route_long_name}></Route>)}
        </ul>
    )
  }
};

export default class Routes extends Component {
  
  constructor () {
    super();
   
    this.state = {
      routes: [],
      filter: ''
    };
  }

  componentDidMount() {

    UploadFile(RoutesFile, this.setRoutes);
  
  }

  updateSearch (inputValue) {
    let filter = this.state.filter;
    
    this.setState({
      filter: inputValue
    });
  }

  setRoutes = (data) => {

    this.setState({
      routes: data
    })
  }
  
  render () {

    return (
      <Container>
        {this.state.routes.length > 0 &&
          <div>
            <RouteFilter updateSearch={this.updateSearch.bind(this)} searchText={this.state.filter} />
            <br/>
            <RouteList filter={this.state.filter} routes={this.state.routes}></RouteList>
          </div>
        }
      </Container>
    );
  }
}