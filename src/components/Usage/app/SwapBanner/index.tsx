'use client';

import { useEffect, useState, memo } from "react";
import styles from './styles.module.scss';
import bottomSrc from '@/image/45196969044_3e0fcf8a6c_h.jpg';
import topperSrc from '@/image/29740091487_1c0c634e53_o.jpg';
import fullSrc from '@/image/images.jpeg';
import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer,
    useLoadScript,
  } from "@react-google-maps/api";

const bottomDataSrc = [
    {src: fullSrc, info: '第三張'},
    {src: bottomSrc, info: '第一張'},
    {src: topperSrc, info: '第二張'},
    {src: fullSrc, info: '第三張'},
    {src: bottomSrc, info: '第一張'},
]

function SwapBanner() {
    // const [focuspage, setFocuspage] = useState(1);
    const [onside, setOnside] = useState({side: 0, trigger: false});
    const position1 = { lat: 24.988947, lng: 121.2231715 };
    const position2 = { lat: 24.988946999, lng: 121.2231715 };
    const MAPID = '61f7405a4126f824	';
    const CREDID = 'AIzaSyAHVz-pXx5jCMeh87LLqxZtPeXLUGK3Dm0';

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: CREDID,
        libraries: ['geometry'],
    })

    return (
        <div className={styles.thirdpage}>
            {
                !isLoaded ? <div>isLoading......</div> :
                <div className={styles.mapper}>
                    <GoogleMap zoom={18} center={position1} mapContainerClassName={styles.mapcontainer}>
                        <Marker
                            position={position2}
                        />
                    </GoogleMap>
                </div>
            }
        </div>
    )
}

export default memo(SwapBanner);