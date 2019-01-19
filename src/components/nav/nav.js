import React from 'react';
import './nav.css';

function NavItem (props) {
  return (
    <li>
      <a  data-toggle="pill" role="tab" {...props} > {props.children} </a>
    </li>   
  );
}
function Nav (props) {

  return (

    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <NavItem className="nav-link active Nav" id="pills-routes-tab"  href="#pills-routes" aria-selected="true">
        Recorridos
      </NavItem>
      <NavItem className="nav-link Nav" id="pills-favorites-tab"  href="#pills-favorites" aria-selected="false">
        Favoritos
      </NavItem>
    </ul>          
  );

}
export default Nav;
