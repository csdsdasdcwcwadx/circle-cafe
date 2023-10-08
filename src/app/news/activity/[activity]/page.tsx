'use client';

import Default from "@/components/Default";
import styles from './styles.module.scss';
import { E_Page } from "@/redux/interfaces";
import { useEffect, useState } from "react";
import { api_getData } from "@/apisource/apiname";
import { handlepath } from "@/apisource/apiname";
import { I_activities } from "@/redux/interfaces";
import Loading from "@/app/loading";

export default function Activities({params}: {params: {activity: string}}) {
    const [data, setData] = useState<I_activities|undefined>();

    useEffect(() => {
        const url = new URL (window.location.href);
        const id = url.searchParams.get('id');

        (async function() {
            const info = await api_getData(id!);
            setData(info?.activitiesinfo[0]);
        })()
    }, [])
    
    return (
        data ? <Default
            className={styles.activities}
            imageSrc={`${handlepath()}${data.image}`}
            currentPage={E_Page.ACTIVITIES}
            title={params.activity}
            altContent="environment"
            faded
        >
            <span className={styles.contents}>
                {data.content}
            </span>
        </Default> : <Loading/>
    )
}