import React, { Component } from 'react';
import './App.css';
import locations from './data/locations.json';
import MapDisplay from './Components/MapDisplay';
import ListDrawer from './Components/ListDrawer';


class App extends Component {
  state = {
    lat: 37.5407,
    lon: -77.4360,
    zoom: 12,
    all: locations,
    filtered: null,
    open: false
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

  componentDidMount = () => {
    this.setState({...this.state, filtered: this.filterLocations(this.state.all, "")
    });
  }

  toggleDrawer = () =>{
    this.setState({
      open: !this.state.open
    });
  }

  updateQuery = (query) => {
    this.setState({...this.state, selectedIndex: null, filtered: this.filterLocations(this.state.all, query)
    });
  }

  filterLocations = (locations, query) => {
    return locations.filter(location => location.name.toLowerCase().includes(query.toLowerCase()));
  }

  clickListItem = (index) => {
    this.setState({ selectedIndex: index, open: !this.state.open })
  }

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.toggleDrawer} style={this.styles.menuButton}>
            <i className="fa fa-bars"></i>
          </button>
          <h1>Grab a drink in Richmond, VA!</h1>
        </div>
        <MapDisplay 
          lat={this.state.lat}
          lon={this.state.lon}
          zoom={this.state.zoom}
          locations={this.state.filtered}
          selectedIndex={this.state.selectedIndex}
          clickListItem={this.clickListItem}/>
        <ListDrawer
          locations={this.state.filtered}
          open={this.state.open}
          toggleDrawer={this.toggleDrawer}
          filterLocations={this.updateQuery}
          clickListItem={this.clickListItem}/>
      </div>
    );
  }
}

export default App;
