import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Flat from './flat.jsx';
import Flatlist from './flatlist.jsx';
import SimpleMap from './simple_map.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      selectedFlatId: ""
    }

  }

  render() {
    return(
      <div>
        <div className="flat-list"></div>
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
