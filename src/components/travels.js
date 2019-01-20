
import React, { Component } from 'react';
import Tab from './tab/tab';
import TabContent from './tab-content/tab-content'
import { connect } from 'react-redux';

class Travels extends Component {

	render() {

		const { route } = this.props;

	  return(
	    <div className='col-md-6'>
	      <h1>{ route !== null ? `Route ${route.route_id}` : 'Select a route'}</h1>
	      <Tab/>
	      <TabContent/>
	    </div>
	  );
	}
}
const mapStateToProps = state => {
  return {
    route: state.routes.route,
  }
}
export default connect(state => ( mapStateToProps), { })(Travels);

