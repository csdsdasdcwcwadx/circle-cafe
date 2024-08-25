'use client';

import { memo, useEffect, useState } from "react";
import styles from './styles.module.scss';
import { api_getData } from "@/apisource/apiname";
import { I_GET_GETACTIVITIES } from "@/apisource/apitype";
import PageNumber from "@/components/Modules/PageNumber";
import ActivityComp from "@/components/Usage/activity/ActivityComp";
import first from '@/image/temp/拾旅食 (10).jpg';
import second from '@/image/temp/拾旅食 (11).jpg';
import third from '@/image/temp/拾旅食 (12).jpg';
import forth from '@/image/temp/拾旅食 (13).jpg';
import fifth from '@/image/temp/拾旅食 (14).jpg';
import six from '@/image/temp/拾旅食 (15).jpg';
import seven from '@/image/temp/拾旅食 (16).jpg';

const tempData = [
    {
        image: first,
        title: '活動主題',
        date: '2024-04-23T14:45:09.000Z',
        id: '1',
    },
    {
        image: second,
        title: '活動主題',
        date: '2024-04-23T14:45:09.000Z',
        id: '2',
    },
    {
        image: third,
        title: '活動主題',
        date: '2024-04-23T14:45:09.000Z',
        id: '3',
    },
    {
        image: forth,
        title: '活動主題',
        date: '2024-04-23T14:45:09.000Z',
        id: '4',
    },
    {
        image: fifth,
        title: '活動主題',
        date: '2024-04-23T14:45:09.000Z',
        id: '5',
    },
    {
        image: six,
        title: '活動主題',
        date: '2024-04-23T14:45:09.000Z',
        id: '6',
    },
]

interface I_props {
    pageCount: number;
}

function ActivityDisplay({pageCount}: I_props) {
    const [serial, setSerial] = useState(1);
    // const [activities, setActivities] = useState<I_GET_GETACTIVITIES|null>();

    // useEffect(() => {
    //     setActivities(null);
    //     (async function() {
    //         const data = await api_getData(serial, pageCount);
    //         setActivities(data);
    //     })()
    // }, [serial, pageCount])
    
    return (
        <>
            <div className={styles.articles}>
                <ActivityComp activities={tempData}/>
            </div>
            {/* <PageNumber serial={serial} setSerial={setSerial} maxpage={Math.ceil(tempData.length/6)}/> */}
        </>
    )
}

export default memo(ActivityDisplay);