import React, { StrictMode, Component } from 'react';
import MapComponent from './components/MapComponent.js';
import AddDataButton from './components/AddDataButton.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Leaflet from 'leaflet';
import './App.css';


const App = () => (
  <div>
    <div className="menu_bar_container">
      <ThemeProvider>
        <AddDataButton />
      </ThemeProvider>
    </div>
    <div className="bike_map_container">
      <MapComponent />
    </div>
  </div>
);

export default App;
