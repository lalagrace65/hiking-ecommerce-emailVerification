import { LoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import React, { useContext } from 'react';
import { UserLocationContext } from '@/context/UserLocationContext';

function GoogleMapView() {
    const { userLocation } = useContext(UserLocationContext);
    const containerStyle = {
        width: '100%',
        height: '40vh'
    };
    
    const coordinate = {
        lat: 14.42972,
        lng: 120.93667
    };

    const centerCoordinates = userLocation || coordinate; // Fallback to default coordinates

    return (
        <div>
            <LoadScript
                googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
                mapId={'16b2c61749498632'}
            >
                <GoogleMap 
                    mapContainerStyle={containerStyle}
                    center={centerCoordinates}
                    options={{ mapId: '16b2c61749498632' }}
                    zoom={15}
                >
                    {userLocation && (
                        <MarkerF
                            position={userLocation}
                            icon={{
                                url: '/marker.png',
                                scaledSize: {
                                    width: 50,
                                    height: 50,
                                }
                            }}
                        />
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default GoogleMapView;
