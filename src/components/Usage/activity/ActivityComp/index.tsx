
import styles from './styles.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { handlepath } from '@/apisource/apiname';
import calenderSrc from '@/icons/calendar.png';
import FBLikeButton from '../../../Modules/FBLikeButton';
import { Fragment, memo } from 'react';
import cN from 'classnames';
import { I_activities } from '@/redux/interfaces';
import { E_Block, handleDate, handleMonth, I_Block, splitter } from '@/utils';

interface I_props {
    activities: any;
}

function ActivityComp({activities}: I_props) {

    return (
        <div className={cN(styles.articles)}>
            {
                activities && activities.map((activity: any, ind: number) => {
                    const date = handleDate(activity.date).split('/');
                    // let listBlock: I_Block[] = [];

                    // try {
                    //     listBlock = JSON.parse(activity.content);
                    // } catch (error) {
                    //     console.error('Error parsing JSON:', error);
                    //     // 可以为 listBlock 赋予默认值或者显示错误信息给用户
                    // }

                    return (
                        <div key={ind} className={styles.news}>
                            <Link className={styles.activecard} href={`/news/activity/item`}>
                                <div className={styles.frame}>
                                    <Image src={activity.image} alt={activity.title} fill sizes='100%'/>
                                </div>
                                <div className={styles.wording}>
                                    <aside className={styles.topper}>
                                        <h3>{activity.title}</h3>
                                    </aside>
                                    {/* <aside className={styles.contents}>
                                        {
                                            Object.values(listBlock).map((block, ind) => {
                                                switch(block.type) {
                                                    case E_Block.subtitle:
                                                        return <Fragment key={ind}>
                                                            {block.value}
                                                        </Fragment>
                                                    case E_Block.list:
                                                        const content = block.value.split(splitter)[1];

                                                        return <Fragment key={ind}>
                                                            {content}
                                                        </Fragment>
                                                }
                                            })
                                        }
                                    </aside> */}
                                    <aside className={styles.contents}>
                                        活動內容活動內容活動內容活動內容活動內容活動內容活動內容活動內容活動內容
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
                                <FBLikeButton link={activity.fb}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default memo(ActivityComp);