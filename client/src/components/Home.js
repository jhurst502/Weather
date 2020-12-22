import useGeoLocation from './GeoLocation';

function Home() {
    const location = useGeoLocation();
    return (
        <div>This is the Home component
            <h1>{ location.loaded ? JSON.stringify(location.coordinates) : "No location data"}</h1>
        </div>
    )
}

export default Home;