import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { connect } from 'react-redux';

//TODO: separate container from component

class MapComponent extends Component {
  constructor() {
    super();
    this.state = {
      markers: [],
    }
  }

  // componentDidMount() {
  //   store.subscribe( () => {
  //     this.forceUpdate()
  //   });
  // }

  // addMarkers = () => {
  //   let newMarkerList = this.state.markers;
  //   let markerList = this.props.data || [];

  //   for(let i = 0; i < markerList.length; i++) {
  //     let coordData = [  
  //       markerData.geometry.coordinates[1], 
  //       markerData.geometry.coordinates[0]
  //     ]
  //     newMarkerList.push(coordData)
  //   }
  //   this.setState({
  //     markers: newMarkerList,
  //   })
  // }

  render() {
    const position = [32.2, -106.02]
    const zoom = 9
    let markerList = this.props.data || [];
  
    return (
      <Map center={position} zoom={zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {
          markerList.map(markerData => (
              <Marker position={[
                  markerData.geometry.coordinates[1],
                  markerData.geometry.coordinates[0]
                ]}>
                <Popup>
                  <span>hello</span>
                </Popup>
              </Marker>
            )
          )
        }

      </Map>
    )
  }
}


const mapStateToProps = (state, ownProps) => ({
  markerList: state.data,
});

MapComponent = connect(mapStateToProps, null)(MapComponent)


export default MapComponent;
