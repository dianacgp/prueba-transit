import React from 'react';
import './index.css';

function TabItem (props) {
  return (
    <li>
      <a  data-toggle="pill" role="tab" {...props} > {props.children} </a>
    </li>   
  );
}
function Tab (props) {

  return (

    <ul className="nav nav-tabs" id="pills-tab" role="tablist">
      <TabItem className="nav-link active" id="pills-routes-tab"  href="#pills-routes" aria-selected="true">
        Routes
      </TabItem>
      <TabItem className="nav-link" id="pills-favorites-tab"  href="#pills-favorites" aria-selected="false">
        Favorite Routes
      </TabItem>
    </ul>          
  );

}
export default Tab;
