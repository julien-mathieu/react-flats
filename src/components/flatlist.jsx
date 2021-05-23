import React, { Component } from 'react';
import Flat from './flat.jsx';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map(flat => <Gif id={flat.id} key={flat.id} />)}
    </div>
    )
}

export default FlatList;
