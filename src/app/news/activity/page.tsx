import styles from './styles.module.scss';
import { E_Page } from '@/redux/interfaces';
import envSrc from '@/image/img-03-07-1@2x.jpg';
import Default from '@/components/Common/Default';
import Image from 'next/image';
import Link from 'next/link';
import { handlepath } from '@/apisource/apiname';
import { api_getData } from '@/apisource/apiname';

export default async function Activity() {
    const activities = await api_getData(undefined, true);

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
                    activities && activities.activitiesinfo.map((activity, ind) => {
                        return (
                            <Link key={ind} href={`/news/activity/${activity.title}?id=${activity.id}`} className={styles.article}>
                                <div className={styles.frame}>
                                    <Image src={`${handlepath()}${activity.image}`} alt={activity.title} fill sizes='100%'/>
                                </div>
                                <span className={styles.content}>
                                    <h2>{activity.title}</h2>
                                    <p>{activity.content}</p>
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