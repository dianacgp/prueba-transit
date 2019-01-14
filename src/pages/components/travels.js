
import React, { Component } from 'react';
import Nav from '../components/nav';
import TabContent from '../components/tab-content'
import { connect } from 'react-redux';

class Travels extends Component {

	render() {

		const { route } = this.props;

	  return(
	    <div className='col-md-6'>
	      <h1>{ route !== null && `Recorrido ${route.route_id}`}</h1>
	      <Nav/>
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

