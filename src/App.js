import React, { Component } from 'react';
import Map from './components/Map';
import User from './components/User';
import Rx from 'rx';

const arrowKeys = {
    38 : 'up',
    87 : 'up',
    40 : 'down',
    83 : 'down',
    68 : 'right',
    39 : 'right',
    37 : 'left',
    65 : 'left'
}

export default class App extends Component
{

    constructor()
    {
      super();
      this.state = {
        lat: 0,
        lng : 0,
        direction : 0
      };
    }

    getUserLocation()
    {
        return new Promise( ( resolve, reject ) => {
            navigator.geolocation.getCurrentPosition( resolve, reject );
        });
    }

    setNewPosition( move )
    {
      const direction = move === 'up' || move === 'down' ? 'lat' : 'lng';
      const movement = move === 'up' || move === 'right' ? 0.0001 : -0.0001;
      this.setState({
        [direction] : this.state[direction] + movement,
        direction
      });
    }

    componentDidMount()
    {
        var mouseMove = Rx.Observable.fromEvent( document, 'keydown' )
                     .map( event => arrowKeys[event.which] )
                     .filter(Boolean)
                     .subscribe( this.setNewPosition.bind(this))

        var userLocation = Rx.Observable.fromPromise( this.getUserLocation() )
                            .map( ({coords}) => (
                              {
                                lat : coords.latitude,
                                lng : coords.longitude
                              }
                            ) )
                            .subscribe( this.setState.bind(this) )
    }

    render()
    {
        return ( <Map position={this.state}/>);
    }
}
