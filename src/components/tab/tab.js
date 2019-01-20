import React from 'react';
import './tab.css';

function TabItem (props) {
  return (
    <li>
      <a  data-toggle="pill" role="tab" {...props} > {props.children} </a>
    </li>   
  );
}
function Tab (props) {

  return (

    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <TabItem className="nav-link active Tab" id="pills-routes-tab"  href="#pills-routes" aria-selected="true">
        Routes
      </TabItem>
      <TabItem className="nav-link Tab" id="pills-favorites-tab"  href="#pills-favorites" aria-selected="false">
        Favorite Routes
      </TabItem>
    </ul>          
  );

}
export default Tab;
