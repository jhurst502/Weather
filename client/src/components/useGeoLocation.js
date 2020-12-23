import { useState, useEffect } from "react";

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coords: {latitude: '', longitude: ''}
    });

    const onSuccess = location => {
        setLocation({
            loaded: true,
            coords: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            }
        })
        console.log(location);
    }

    const onError = error => {
        setLocation({
            loaded: true,
            error,
        })
        console.log(location);
    }

    useEffect(() => {
        if( !('geolocation' in navigator) ){
            setLocation(state => ({
                ...state,
                loaded: true,
                error: {
                    code: 0,
                    message: "Geolocation not enabled",
                },
            }));
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, [])

    return location;
}

export default useGeoLocation;