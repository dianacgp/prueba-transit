import React, { Component } from 'react';

export default class RouteFilter extends Component {
  
  handleChange (event) {
    this.props.updateSearch(event.target.value);
  }
  
  render () {
    return (
      <input ref="search" className="form-control" id="search" type="text" placeholder="Search.." onChange={this.handleChange.bind(this)} value={this.props.searchText} />
    )
  }
}