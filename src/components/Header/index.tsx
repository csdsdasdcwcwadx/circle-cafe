'use client';

import { memo } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const aboutLink = [
    {ref: '/about/story', name: '品牌故事'},
    {ref: '/about/message', name: 'Chef’s Message'},
    {ref: '/about/ingredient', name: '食材使用與介紹'},
]

const newsLink = [
    {ref: '/news/report', name: '部落客訪店/媒體報導'},
    {ref: '/news/activity', name: '活動公告'},
    {ref: '/news/customer', name: '顧客回饋'},
]

function Header() {
    const router = useRouter();

    return (
        <div className={styles.Header}>
            <div className={styles.logo}>logo</div>
            <nav className={styles.navigators}>
                <li>關於我們{Listing(aboutLink)}</li>
                <li>最新消息{Listing(newsLink)}</li>
                <li onClick={() => router.push('/menu')}>菜單詳情</li>
                <li onClick={() => router.push('/venue')}>包場資訊</li>
                <li onClick={() => router.push('/book')}>預約訂位</li>
                <li onClick={() => router.push('/')}>夥伴招募</li>
                <li onClick={() => router.push('/contact')}>聯繫我們</li>
            </nav>
        </div>
    )
}

function Listing(items: Array<{
    ref: string, name: string
}>) {
    return (
        <ul className={styles.Items}>
            {
                items.map((item, ind) => {
                    return <Link href={item.ref} key={ind} className={styles.item}>{item.name}</Link>
                })
            }
        </ul>
    )
}

export default memo(Header);

