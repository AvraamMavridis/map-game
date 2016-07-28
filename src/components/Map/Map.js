import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
import playerIcon from '../../../public/assets/man.png';

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
                    <Marker
                      icon={{
                        url    : playerIcon,
                        size   : new google.maps.Size(32, 32),
                        origin : new google.maps.Point(0, 32)
                      } }
                      position={position} />
                  </GoogleMap>
                }
              />
            </section>
        )
    }
}
