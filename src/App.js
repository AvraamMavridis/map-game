import React, { Component } from 'react';
import Map from './components/Map';
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

    getUserLocation()
    {
        return new Promise( ( resolve, reject ) => {
            navigator.geolocation.getCurrentPosition( resolve, reject );
        });
    }

    componentDidMount()
    {
        var mouseMove = Rx.Observable.fromEvent( document, 'keyup' )
                     .map( event => arrowKeys[event.which] )
                     .filter(Boolean)

        var userLocation = Rx.Observable.fromPromise( this.getUserLocation() )
                            .map( geodata => geodata.coords )

        Rx.Observable.combineLatest( mouseMove, userLocation )
                        .subscribe( data => console.log( data ) );
    }

    render()
    {
        return ( <div></div>);
    }
}
