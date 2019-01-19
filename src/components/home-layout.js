
import React  from 'react';

function HomeLayout (props) {

  return(
    <div className='container'>
    	<div className='row'>
      		{props.children}
      	</div>
    </div>
  );
}

export default HomeLayout;