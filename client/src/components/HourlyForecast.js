import useGetAPI from './useGetAPI';
import { useEffect } from 'react';

function HourlyForecast() {

    //const location = useLocation();
    const api = useGetAPI();
    useEffect(() => {
        //console.log(location);
        console.log(api);
    },[api]);

    
    if(api.status === 'fetched' && api.weather.hourly){
        console.log(api.weather.hourly);
        return (
            <div className='weather'>
                <h1>Hourly</h1>
                <h1>{api.weather.hourly[0].weather[0].main}</h1>
            </div>
        )
    } else {
        return (
            <h1>Zip code lookup placeholder</h1>
        )
    }
    
}

export default HourlyForecast;