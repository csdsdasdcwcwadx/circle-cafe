'use client';

import BackActivities from "@/components/BackActivities";
import { useState } from "react";
import styles from './styles.module.scss';
import BackMenu from "@/components/BackMenu";
import cN from 'classnames';

enum E_Backend {
    ACTIVITIES = 'ACTIVITIES',
    MENU = 'MENU',
}

export default function Backend() {
    const [currBack, setCurrBack] = useState<E_Backend>(E_Backend.ACTIVITIES);

    return (
        <div className={styles.backend}>
            <ul>
                {
                    Object.values<E_Backend>(E_Backend).map((value, ind) => {
                        return <nav key={ind} className={cN({[styles.selected]: currBack === value})} onClick={() => setCurrBack(value)}>{value}</nav>
                    })
                }
            </ul>
            <div className={styles.page}>
                {
                    currBack === E_Backend.ACTIVITIES ? <BackActivities/> :
                    currBack === E_Backend.MENU ? <BackMenu/> : ''
                }
            </div>
        </div>
    )
}
