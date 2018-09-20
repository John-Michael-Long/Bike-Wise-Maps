import React, { StrictMode, Component } from 'react';
import MapContainer from './components/MapContainer.jsx';
//import MenuBar from './components/MenuBar.js';
import Leaflet from 'leaflet';
import './App.css';


const App = () => (
  <StrictMode>
    <div className="menu_bar_container">
    </div>
    <div className="bike_map_container">
      <MapContainer />
    </div>
  </StrictMode>
);

export default App;

