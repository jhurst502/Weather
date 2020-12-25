import { useState, useEffect } from 'react';

const useGeoLocation = () => {

    const [location, setLocation] = useState({
        loaded: false,
        coords: { latitude: "", longitude: "" },
      });

      const getPosition = () => {
        return new Promise(function (resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
      };

    useEffect(() => {
        if ("geolocation" in navigator) {
          console.log(getPosition());
          getPosition().then((position) => {
            console.log(position.coords);
            setLocation({
              loaded: true,
              coords: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              },
            });
          });
        } else {
          console.log("Geolocation not availible");
        }

        console.log('running');
      }, []);

      return location;
}

export default useGeoLocation;