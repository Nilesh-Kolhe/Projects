import React from 'react';
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
    width: '45vw',
    height: '80vh',
    margin: '5vw 0vw'
};

const center = {
    lat: 12.972913262125108, // 18.63259207690859, // 12.972912211892147, // 7.2905715, // default latitude
    lng: 77.52952826857187 // 73.74248743057252 // 77.52952677266484, // 80.6337262, // default longitude
};


const GMap = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
        <>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={20}
                center={center}
            >
                <MarkerF position={center} >
                    <InfoWindow position={center}>
                        <div>
                            <span style={{ fontWeight: 500, fontSize: 'medium' }}>Frontiernext Solutions Private Limited, </span>
                            <br/>
                            <span>No. 184/A, Second Floor, First Main Road, Sharadha Colony, </span>
                            <br/>
                            <span>Basaveshwara Nagar, Bengaluru - 560079</span>
                        </div>
                    </InfoWindow>
                </MarkerF>
            </GoogleMap>
        </>
    );
};

export default GMap;