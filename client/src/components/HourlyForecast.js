import useLocation from './useGeoLocation';
import { useEffect } from 'react';

function HourlyForecast() {

    const location = useLocation();
    
    useEffect(() => {
        console.log(location);
    },[]);
    
    if(location.loaded === true){
        return (
            <div className='weather'>
                <h1>Hourly Forecast Component...</h1>
                <h1>{location.coords.latitude}</h1>
            </div>
        )
    } else {
        return (
            <h1>Zip code lookup placeholder</h1>
        )
    }
    
}

export default HourlyForecast;