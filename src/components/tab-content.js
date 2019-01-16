
import React, { Component } from 'react';
import Routes from './routes';

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
	    	 <p>Favoritos</p>
	    </TabPane>
	  </div>   
  );
}
export default TabContent;
