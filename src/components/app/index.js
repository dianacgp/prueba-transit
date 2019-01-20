import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Settings from '../settings';
import Navigation from '../navigation';
import Home from '../home';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';

function RouterView() {
  return (
    <Router>
      <div>
        <Navigation/>
        <Route exact path="/" component={Home} />
        <Route path="/settings" component={Settings} />
      </div>
    </Router>
  );
}

export default RouterView;