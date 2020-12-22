import { useState } from 'react';
import useGeoLocation from './GeoLocation';
import Weather from './Weather';

function Home() {
    
    const location = useGeoLocation();

    return (
        <div>This is the Home component
            <h1>{ location.loaded ? JSON.stringify(location.coordinates) : "No location data"}</h1>
            <Weather />
        </div>
    )
}

export default Home;