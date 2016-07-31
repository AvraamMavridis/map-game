import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
import playerIcon from '../../../public/assets/man.png';

export default class Map extends Component
{

    constructor()
    {
      super();
      this.state = {
        xMultiplier : 0
      }
    }

    componentWillReceiveProps( nextProps )
    {
        if( this.props.move  === nextProps.move )
        {
          this.setState({
            xMultiplier : (++this.state.xMultiplier)%3
          });
        }
        else {
          this.setState({
            xMultiplier : 0
          });
        }
    }

    getOrigin()
    {
        const { move } = this.props;
        const y = {
          down : 0,
          left : 32,
          right : 64,
          up : 96
        }

        const x = this.state.xMultiplier * 32;

        return new google.maps.Point( x, y[move]);
    }


    render()
    {
        const { position, move } = this.props;
        const origin = this.getOrigin();

        return (
            <section style={{height: "100vh"}}>
              <GoogleMapLoader
                containerElement={
                  <div
                    style={{
                      height: "100vh",
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
                        origin,
                      } }
                      position={position} />
                  </GoogleMap>
                }
              />
            </section>
        )
    }
}
