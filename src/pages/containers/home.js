import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Travels from '../components/travels';

class Home extends Component {

  render() {
    return (
     
      <HomeLayout>
        <Travels/>
      </HomeLayout>

    )
  }
}

export default Home