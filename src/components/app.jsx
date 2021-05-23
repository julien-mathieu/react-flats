import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Flat from './flat.jsx';
import FlatList from './flat_list.jsx';
import SimpleMap from './simple_map.jsx';

import flats from '../../data/flats';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flats
    }

  }

  render() {
    return(
      <div>
        <FlatList flats={this.state.flats} />
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
