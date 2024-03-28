
import styles from './styles.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { handlepath } from '@/apisource/apiname';
import calenderSrc from '@/icons/calendar.png';
import FBLikeButton from '../../../Common/FBLikeButton';
import { memo } from 'react';
import cN from 'classnames';
import { I_activities } from '@/redux/interfaces';
import { handleDate, handleMonth } from '@/utils';

interface I_props {
    activities: I_activities[]|null;
    isServerComp?: boolean;
    renderBlock?: Function;
}

function ActivityComp({activities, isServerComp, renderBlock}: I_props) {

    return (
        <div className={cN(styles.articles, {[styles.hide]: isServerComp})}>
            {
                activities && activities.map((activity, ind) => {
                    const date = handleDate(activity.date).split('/');

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
                                        <span className={styles.month}>{handleMonth(parseInt(date[0]))}</span>
                                        <span className={styles.date}>{date[1]}</span>
                                    </div>
                                </div>
                            </Link>
                            <div className={styles.socialmedia}>
                                {!isServerComp && <FBLikeButton link={activity.fb}/>}
                            </div>
                            {renderBlock && renderBlock(activity)}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default memo(ActivityComp);