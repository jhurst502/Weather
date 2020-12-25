import { useState, useEffect } from 'react';
import useGeoLocation from './useGeoLocation';

const useGetAPI = (useLocation) => {
    const [status, setStatus] = useState('idle');
    const [weather, setWeather] = useState({});

    let location = useGeoLocation();

    useEffect(() => {
        if (!location) {
            console.log('Location not found, put zip here...');
            return;
        } else {
            const fetchData = async () => {
                setStatus('fetching');
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/onecall?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY2}`
                );
    
                const weather = await response.json();
                setWeather(weather);
                setStatus('fetched');
            };
    
            fetchData();
        }
    }, [location, useLocation]);

    return { status, weather };
}

export default useGetAPI;