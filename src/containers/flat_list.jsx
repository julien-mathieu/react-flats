import React, { Component } from 'react';
import Flat from '../components/flat.jsx';

const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
          selected={flat.name === props.selectedFlat.name}
          index={index}
          selectFlat={props.selectFlat}
        />
      );
    });
  };

  componentWillMount() {
    // Dispatch an action to update the Redux state tree
  }

  return (
    <div className="flat-list">
      {renderList()}
    </div>
  );
}

export default FlatList;
