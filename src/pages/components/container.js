
import React, { Component } from 'react';


function Container (props) {

  return(
    <div className='container'>
     	{props.children}
    </div>
  );
}

export default Container;

