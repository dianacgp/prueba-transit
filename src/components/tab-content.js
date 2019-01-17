
import React, { Component } from 'react';
import Routes from './routes';
import FavoriteRoutes from './favorite-routes';

function TabPane (props) {
  return (
    <div 
    	role="tabpanel" {...props}>
     {props.children}
    </div>   
  );
}

function TabContent (props) {
  return (
	  <div className="tab-content" id="pills-tabContent">
			<TabPane className="tab-pane fade show active" id="pills-routes" aria-labelledby="pills-routes-tab">
      	<Routes/>
	    </TabPane>
	    <TabPane className="tab-pane fade" id="pills-favorites" aria-labelledby="pills-favorites-tab">
	    	<FavoriteRoutes/>
	    </TabPane>
	  </div>   
  );
}
export default TabContent;
