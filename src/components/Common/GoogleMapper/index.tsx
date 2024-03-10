'use client';

import { memo } from 'react';
import styles from './styles.module.scss';
import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer,
    useLoadScript,
  } from "@react-google-maps/api";

function GoogleMapper() {
    const position1 = { lat: 24.988947, lng: 121.2231715 };
    const position2 = { lat: 24.988946999, lng: 121.2231715 };

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_ID!,
        libraries: ['geometry'],
    })
    
    return !isLoaded ? <div>isLoading......</div> :
        <div className={styles.mapper}>
            <GoogleMap zoom={17} center={position1} mapContainerClassName={styles.mapcontainer}>
                <Marker
                    position={position2}
                />
            </GoogleMap>
        </div>

}

export default memo(GoogleMapper);