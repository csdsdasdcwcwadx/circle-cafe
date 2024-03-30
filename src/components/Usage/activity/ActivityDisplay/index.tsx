'use client';

import { memo, useEffect, useState } from "react";
import styles from './styles.module.scss';
import { api_getData } from "@/apisource/apiname";
import { I_GET_GETACTIVITIES } from "@/apisource/apitype";
import PageNumber from "@/components/Common/PageNumber";
import ActivityComp from "@/components/Usage/activity/ActivityComp";

interface I_props {
    renderBlock?: Function;
    pageCount: number;
}

function ActivityDisplay({renderBlock, pageCount}: I_props) {
    const [serial, setSerial] = useState(1);
    const [activities, setActivities] = useState<I_GET_GETACTIVITIES|null>();

    useEffect(() => {
        setActivities(null);
        (async function() {
            const data = await api_getData(serial, pageCount);
            setActivities(data);
        })()
    }, [serial, pageCount])
    
    return (
        <>
            <div className={styles.articles}>
                <ActivityComp activities={activities?.activitiesinfo!} renderBlock={renderBlock}/>
            </div>
            {activities && <PageNumber serial={serial} setSerial={setSerial} maxpage={activities?.totalpage!}/>}
        </>
    )
}

export default memo(ActivityDisplay);