'use client';

import Default from "@/components/Default";
import styles from './styles.module.scss';
import { E_Page } from "@/redux/interfaces";
import envSrc from '@/image/00-41.jpg';

export default function Activities({params}: {params: {activity: string}}) {
    
    return (
        <Default
            className={styles.activities}
            imageSrc={envSrc}
            currentPage={E_Page.ACTIVITIES}
            title={params.activity}
            altContent="environment"
            faded
        >

        </Default>
    )
}