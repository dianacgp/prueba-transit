
import React, { Component } from 'react';


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

// function NavItem (props) {
//   return (
//     <li className="nav-item">
//       {props.children}
//     </li> 
//     );
//   }
// }

// function HomeLayout (props) {
//   return (
//     <div className='container'>
//       <div className='row'>
//         <div className='col-md-6'>
//           <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
//             <NavItem>
//               <a className="nav-link active" id="pills-routes-tab" data-toggle="pill" href="#pills-routes" role="tab" aria-controls="pills-routes" aria-selected="true">Recorridos</a>

//             </NavItem>
//             <li className="nav-item">
//               <a className="nav-link active" id="pills-routes-tab" data-toggle="pill" href="#pills-routes" role="tab" aria-controls="pills-routes" aria-selected="true">Recorridos</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" id="pills-favorites-tab" data-toggle="pill" href="#pills-favorites" role="tab" aria-controls="pills-favorites" aria-selected="false">Favoritos</a>
//             </li>
//           </ul>
//           <div className="tab-content" id="pills-tabContent">
//             <div className="tab-pane fade show active" id="pills-routes" role="tabpanel" aria-labelledby="pills-routes-tab">
//             </div>
//             <div className="tab-pane fade" id="pills-favorites" role="tabpanel" aria-labelledby="pills-favorites-tab">
//             </div>
//           </div>
//         </div>
//         <div className='col-md-6'>
//         </div>
//       </div>
//     </div>
//     );
//   }
// }

// export default HomeLayout;
