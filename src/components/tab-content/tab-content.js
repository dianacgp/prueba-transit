
import React, { Component } from 'react';
import Routes from '../routes/routes';

function TabPane (props) {
  return (
    <div 
    	role="tabpanel" {...props}>
     {props.children}
    </div>   
  );
}
export default class TabContent extends Component {

  render() {

    return(
      <div className="tab-content" id="pills-tabContent">
        <TabPane className="tab-pane fade show active" id="pills-routes" aria-labelledby="pills-routes-tab">
          <Routes type="routes"/>
        </TabPane>
        <TabPane className="tab-pane fade" id="pills-favorites" aria-labelledby="pills-favorites-tab">
          <Routes type="favorites"/>
        </TabPane>
      </div> 
    );
  }
}

