'use client';

import { memo } from 'react';
import styles from './styles.module.scss';
import cN from 'classnames';

function Header() {
    return (
        <div className={styles.Header}>
            <div className={styles.logo}>logo</div>
            <nav className={styles.navigators}>
                <li>關於我們{Listing(['品牌故事', 'Chef’s Message', '食材使用與介紹'])}</li>
                <li>最新消息{Listing(['部落客訪店/媒體報導', '活動公告', '顧客回饋'])}</li>
                <li>菜單詳情</li>
                <li>包場資訊</li>
                <li>預約訂位</li>
                <li>夥伴招募</li>
                <li>聯繫我們</li>
            </nav>
        </div>
    )
}

function Listing(items: Array<String>) {
    return (
        <ul className={styles.Items}>
            {
                items.map((item, ind) => {
                    return <li key={ind} className={styles.item}>{item}</li>
                })
            }
        </ul>
    )
}

export default memo(Header);

