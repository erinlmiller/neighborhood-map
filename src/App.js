import React, { Component } from 'react';
import './App.css';
import locations from './data/locations.json';
import MapDisplay from './Components/MapDisplay';

class App extends Component {
  state = {
    lat: 37.5407,
    lon: -77.4360,
    zoom: 13,
    all: locations
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Richmond, VA Pubs and Bars</h1>
        </div>
        <MapDisplay 
        lat={this.state.lat}
        lon={this.state.lon}
        zoom={this.state.zoom}
        locations={this.state.all}/>
      </div>
    );
  }
}

export default App;
