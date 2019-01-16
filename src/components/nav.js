
import React, { Component } from 'react';

function NavItem (props) {
  return (
    <li className="nav-item">
      <a  data-toggle="pill" role="tab" {...props} > {props.children} </a>
    </li>   
  );
}
function Nav (props) {

  return (

    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <NavItem className="nav-link active" id="pills-routes-tab"  href="#pills-routes" aria-selected="true">
        Recorridos
      </NavItem>
      <NavItem className="nav-link" id="pills-favorites-tab"  href="#pills-favorites" aria-selected="false">
        Favoritos
      </NavItem>
    </ul>          
  );

}
export default Nav;
