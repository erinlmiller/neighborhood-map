import React, { Component } from 'react';
import './App.css';
import locations from './data/locations.json';
import MapDisplay from './Components/MapDisplay';
import ListDrawer from './Components/ListDrawer';


class App extends Component {
  state = {
    lat: 37.5407,
    lon: -77.4360,
    zoom: 13,
    all: locations
  }

  styles = {
    menuButton: {
      marginLeft: 10,
      marginRight: 20,
      position: "absolute",
      left: 10,
      top: 20,
      background: "white",
      padding: 10
    },
    hide: {
      display: 'none'
    },
    header: {
      marginTop: "0px"
    }
  };

  toggleDrawer = () =>{
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.toggleDrawer} style={this.styles.menuButton}>
            <i className="fa fa-bars"></i>
          </button>
          <h1>Richmond, VA Pubs and Bars</h1>
        </div>
        <MapDisplay 
          lat={this.state.lat}
          lon={this.state.lon}
          zoom={this.state.zoom}
          locations={this.state.all}/>
        <ListDrawer
          locations={this.state.all}
          open={this.state.open}
          toggleDrawer={this.toggleDrawer}/>
      </div>
    );
  }
}

export default App;
