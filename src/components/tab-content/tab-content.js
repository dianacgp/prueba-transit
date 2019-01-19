
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SetRoute, UpdateFavorite } from '../../store/actions/routes'
import Routes from '../routes';

function TabPane (props) {
  return (
    <div 
    	role="tabpanel" {...props}>
     {props.children}
    </div>   
  );
}
class TabContent extends Component {

  render() {
    return(
      <div className="tab-content" id="pills-tabContent">
        <TabPane className="tab-pane fade show active" id="pills-routes" aria-labelledby="pills-routes-tab">
          <Routes routes ={this.props.routes.toJS()} SetRoute={this.props.SetRoute} UpdateFavorite={this.props.UpdateFavorite}/>
        </TabPane>
        <TabPane className="tab-pane fade" id="pills-favorites" aria-labelledby="pills-favorites-tab">
          <Routes routes ={this.props.favoriteRoutes.toJS()}  SetRoute={this.props.SetRoute} UpdateFavorite={this.props.UpdateFavorite}/>
        </TabPane>
      </div> 
    );
  }
}
const mapStateToProps = state => {
  return {
    routes: state.routes.routes,
    favoriteRoutes: state.routes.favoriteRoutes,
  }
}
export default connect(state => ( mapStateToProps), { SetRoute, UpdateFavorite })(TabContent);

