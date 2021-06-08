import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../components/marker.jsx';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.866667,
      lng: 2.333333
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDC3rMU3FKHvPAGWe3RA3djVGrZebazM1Y" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.flat.lat}
            lng={this.props.flat.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
