'use client';

import styles from './styles.module.scss';
import { E_Page } from '@/redux/interfaces';
import envSrc from '@/image/img-03-07-1@2x.jpg';
import Default from '@/components/Default';
import Image from 'next/image';
import Link from 'next/link';
import { handlepath } from '@/apisource/apiname';
import { useEffect, useState } from 'react';
import { I_activities } from '@/redux/interfaces';
import { api_getData } from '@/apisource/apiname';

export default function Activity() {
    const [data, setData] = useState<Array<I_activities>|undefined>();

    useEffect(() => {
        (async function() {
            const data = await api_getData();
            setData(data?.activitiesinfo);
        })()
    }, [])

    return (
        <Default
            className={styles.activity}
            title='活動公告'
            currentPage={E_Page.ACTIVITY}
            imageSrc={envSrc}
            altContent='envSrc'
            faded
        >
            <div className={styles.articles}>
                {
                    data && data.map((data, ind) => {
                        return (
                            <Link key={ind} href={`/news/activity/${data.title}?id=${data.id}`} className={styles.article}>
                                <div className={styles.frame}>
                                    <Image src={`${handlepath()}${data.image}`} alt={data.title} fill sizes='100%'/>
                                </div>
                                <span className={styles.content}>
                                    <h2>{data.title}</h2>
                                    <p>{data.content}</p>
                                    <span>點擊前往</span>
                                </span>
                            </Link>
                        )
                    })
                }
            </div>
        </Default>
    )
}