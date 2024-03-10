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
    Libraries,
    useJsApiLoader,
  } from "@react-google-maps/api";

const libraries: Libraries = ['geometry'];

function GoogleMapper() {
    const position1 = { lat: 24.988947, lng: 121.2231715 };
    const position2 = { lat: 24.988946999, lng: 121.2231715 };

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.GOOGLE_ID!,
        libraries,
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