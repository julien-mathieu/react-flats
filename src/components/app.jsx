import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Flat from './flat.jsx';
import FlatList from '../containers/flat_list.jsx';
import SimpleMap from '../containers/simple_map.jsx';

import flats from '../../data/flats';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    }
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return(
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
          <SimpleMap flat={this.state.selectedFlat} />
        </div>
      </div>
    );
  }
}

export default App;
