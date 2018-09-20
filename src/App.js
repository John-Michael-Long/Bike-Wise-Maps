import React, { StrictMode, Component } from 'react';
import MapContainer from './components/MapContainer.jsx';
import ButtonBar from './components/MenuBar.js';
import Leaflet from 'leaflet';
import './App.css';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';


const App = () => (
  <StrictMode>
    <div className="menu_bar_container">
    <ThemeProvider>
      <ButtonBar />
    </ThemeProvider>
    </div>
    <div className="bike_map_container">
      <MapContainer />
    </div>
  </StrictMode>
);

export default App;
