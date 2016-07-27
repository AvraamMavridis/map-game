import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

export default class Map extends Component
{

    render()
    {
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
                    defaultZoom={3}
                    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
                  >
                    <Marker position={{ lat: -25.363882, lng: 21.044922 }} />
                  </GoogleMap>
                }
              />
            </section>
        )
    }
}
