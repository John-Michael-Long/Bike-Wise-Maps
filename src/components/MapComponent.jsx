import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { connect } from 'react-redux';

//TODO: separate container from component


const AddMarker = (data) => {

  console.log('data', data)

  return(
    <Marker position={data.position}>
      <Popup>{data.type}</Popup>
    </Marker>
)}

const CreateMarkersList = ({ markers }) => {

  console.log('markers:', markers)

  const list = markers.map(( markerData  => {

    console.log('markerData:', markerData)

    let key = markerData.properties.id
    let props = {
      type: markerData.properties.type,
      coordinates: [markerData.geometry.coordinates[1], markerData.geometry.coordinates[0]]
    }

    return <AddMarker key={key} {...props} />
  }))
  return <div style={{ display: 'none'}}>{list}</div>
}

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


  render() {
    const position = [32.2, -106.02]
    const zoom = 9
    let markerList = this.props.data || [];

    // markerList = [
    //   {
    //     geometry: {coordinates: [-106.021, 32.2]},
    //     properties: {id: 123, type: "theft"}  
    //   },
    //   {
    //     geometry: {coordinates: [-106.022, 32.2]},
    //     properties: {id: 124, type: "theft"}  
    //   },
    //   {
    //     geometry: {coordinates: [-106.023, 32.2]},
    //     properties: {id: 125, type: "theft"}  
    //   },

    // ]


  
    return (
      <Map center={position} zoom={zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CreateMarkersList markers={markerList} />

      </Map>
    )
  }
}


const mapStateToProps = (state, ownProps) => ({
  markerList: state.data,
});

MapComponent = connect(mapStateToProps, null)(MapComponent)


export default MapComponent;
