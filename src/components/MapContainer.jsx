import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';


const fetchBikeData = async () => {
  const limit = 50;
  const proximity_square = 100;
  const composedUrl = `https://bikewise.org:443/api/v2/locations?proximity_square=${proximity_square}&limit=${limit}`;

  try {
    const response = axios.get(composedUrl);
    return (await response).data;
  } catch (err) {
    throw err;
  }
}

export default class MapClass extends Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    }
    this.getBikeData();
  }

  getBikeData() {
    fetchBikeData().then( data => {
      console.log("data:", data);
    })
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}