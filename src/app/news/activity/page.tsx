import styles from './styles.module.scss';
import { E_Page } from '@/redux/interfaces';
import envSrc from '@/image/img-03-07-1@2x.jpg';
import Default from '@/components/Common/Default';
import Image from 'next/image';
import Link from 'next/link';
import { handlepath } from '@/apisource/apiname';
import { api_getData } from '@/apisource/apiname';
import FBLikeButton from '@/components/Common/FBLikeButton';
import ActivityPager from '@/components/Usage/activity/ActivityPager';
import calenderSrc from '@/icons/calendar.png';

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
                            <div key={ind} className={styles.news}>
                                <Link className={styles.activecard}  href={`/news/activity/${activity.title}?id=${activity.id}`}>
                                    <div className={styles.frame}>
                                        <Image src={`${handlepath()}${activity.image}`} alt={activity.title} fill sizes='100%'/>
                                    </div>
                                    <div className={styles.wording}>
                                        <aside className={styles.topper}>
                                            <h3>{activity.title}</h3>
                                        </aside>
                                        {/* <aside className={styles.timerange}>時間區間：500-1000</aside> */}
                                        <aside className={styles.contents}>
                                            {activity.content}
                                        </aside>
                                        <aside className={styles.readmore}>
                                            閱讀更多{`>>`}
                                        </aside>
                                        <div className={styles.posttime}>
                                            <Image src={calenderSrc} alt='calender'/>
                                            <span className={styles.month}>Sep</span>
                                            <span className={styles.date}>31</span>
                                        </div>
                                    </div>
                                </Link>
                                <div className={styles.socialmedia}>
                                    <FBLikeButton/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <ActivityPager/>
        </Default>
    )
}