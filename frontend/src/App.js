import React, { Component } from 'react';
import logo from './logo.svg';
import logo2 from './logo2.jpg';
import logo3 from './logo3.jpg';
import './App.css';

import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import Hexbin from './Hexbin.js';

import fakeStoreLatLngData from './data/generated-data.json';

const MAP_PIXEL_HEIGHT = 800;
const HEX_PIXEL_RADIUS = 50;

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMarkerOn: false,
    }
    this.toggleMarker = this.toggleMarker.bind(this);
  }
  toggleMarker() {
    this.setState({
      isMarkerOn: !this.state.isMarkerOn,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo3} alt="logo" 
		style={{ width: '100px', height: '100px'}}	
	/>
          <h2
		style={{ color: 'black' }}
	>Flamingo Service</h2>
        </div>
        <GoogleMapLoader
          query={{ libraries: 'geometry,drawing,places,visualization' }}
          containerElement={
            <div
              style={{ width: '50%', margin: 'auto', height: MAP_PIXEL_HEIGHT }}
            />
          }
          googleMapElement={
            <GoogleMap
              defaultZoom={16}
              options={{ mapTypeControl: false }}
              defaultCenter={{ lat: 37.493511, lng: 127.056478 }}
            >
              <Hexbin
                hexPixelRadius={HEX_PIXEL_RADIUS}
                mapPixelHeight={MAP_PIXEL_HEIGHT}
                data={fakeStoreLatLngData}
                colorRange={['rgb(242,130,185)', 'rgb(255, 0, 0)']}
              />
              {
                this.state.isMarkerOn ?
                fakeStoreLatLngData.map(point => ({ position: point })
                ).map((obj, idx) => (
                  <Marker
                    key={idx}
                    {...obj}
                  />
                ))
                :
                null
              }
            </GoogleMap>
          }
        />
        <button
          style={{ margin: 25, padding: 10 }}
          onClick={this.toggleMarker}
        >
          Toggle Markers
        </button>
      </div>
    );
  }
}

export default App;
