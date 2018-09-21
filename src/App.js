import React, { StrictMode, Component } from 'react';
import MapComponent from './components/MapComponent.jsx';
import MenuBarContainer from './containers/MenuBarContainer.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Leaflet from 'leaflet';
import './App.css';


const App = () => (
  <StrictMode>
    <div className="menu_bar_container">
    <ThemeProvider>
      <MenuBarContainer />
    </ThemeProvider>
    </div>
    <div className="bike_map_container">
      <MapComponent />
    </div>
  </StrictMode>
);

export default App;
