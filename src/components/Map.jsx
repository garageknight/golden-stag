import React, { Component } from "react"
import GoogleMapReact from "google-map-react"
import GoldFace from "./gold-face"

const AnyReactComponent = () => <GoldFace size={32} />

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 51.442791,
      lng: -0.931386,
    },
    zoom: 16,
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "30vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBILfapY5cb-d1sx2Iwv_pWvWUanEFdxM4" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={51.442791} lng={-0.931386} />
        </GoogleMapReact>
      </div>
    )
  }
}

export const Map = SimpleMap
