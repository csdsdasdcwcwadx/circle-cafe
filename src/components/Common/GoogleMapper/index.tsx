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
const mapStyle = [
    { elementType: "geometry", stylers: [{ color: "#072F62" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{ color: "#072F62" }],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "geometry.stroke",
      stylers: [{ color: "#072F62" }],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [{ color: "#072F62" }],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [{ color: "#072F62" }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#072F62" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#072F62" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [{ color: "#072F62" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#072F62" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#D5AD78" }],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ color: "#D5AD78" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#D5AD78" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#D5AD78" }],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [{ color: "#D5AD78" }],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry.stroke",
      stylers: [{ color: "#D5AD78" }],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [{ color: "#806b63" }],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [{ color: "#dfd2ae" }],
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.fill",
      stylers: [{ color: "#8f7d77" }],
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#ebe3cd" }],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [{ color: "#dfd2ae" }],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [{ color: "#666666" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#222" }],
    },
]

function GoogleMapper() {
    const position1 = { lat: 24.988947, lng: 121.2231715 };
    const position2 = { lat: 24.988946997, lng: 121.223171 };

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.GOOGLE_ID!,
        libraries,
    })
    
    return !isLoaded ? <div>isLoading......</div> :
        <div className={styles.mapper}>
            <GoogleMap zoom={17} center={position1} mapContainerClassName={styles.mapcontainer} options={{
                styles: mapStyle,
            }}>
                <Marker
                    position={position2}
                />
            </GoogleMap>
        </div>

}

export default memo(GoogleMapper);