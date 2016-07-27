import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

export default class Map extends Component
{
    render()
    {
        const { position } = this.props;

        return (
            <section style={{height: "500px"}}>
              <GoogleMapLoader
                containerElement={
                  <div
                    style={{
                      height: "500px",
                    }}
                  />
                }
                googleMapElement={
                  <GoogleMap
                    defaultZoom={15}
                    defaultCenter={position}
                    center={position}
                    onCenterChanged={this.handleCenterChanged}
                  >
                    <Marker position={position} />
                  </GoogleMap>
                }
              />
            </section>
        )
    }
}
