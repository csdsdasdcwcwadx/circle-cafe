'use client';

import { Fragment, memo, useState } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import cN from 'classnames';
import Image from 'next/image';
import LightBox, { E_direction } from '../LightBox';

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
    const [openMenu, setOpenMenu] = useState(false);
    
    const NavigatingOptions = (onSide: boolean = false) => {
        return (
            <Fragment>
                <li>關於我們{onSide && <i/>}{Listing(aboutLink, setOpenMenu)}</li>
                <li>最新消息{onSide && <i/>}{Listing(newsLink, setOpenMenu)}</li>
                <li onClick={() => {
                    router.push('/menu');
                    setOpenMenu(false);
                }}>菜單詳情</li>
                <li onClick={() => {
                    router.push('/venue');
                    setOpenMenu(false);
                }}>包場資訊</li>
                <li onClick={() => {
                    router.push('/book');
                    setOpenMenu(false);
                }}>預約訂位</li>
                <li onClick={() => {
                    router.push('/');
                    setOpenMenu(false);
                }}>夥伴招募</li>
                <li onClick={() => {
                    router.push('/contact');
                    setOpenMenu(false);
                }}>聯繫我們</li>
            </Fragment>
        )
    }

    return (
        <div className={styles.Header}>
            <i className={styles.menuIcon} onClick={()=>setOpenMenu(true)}/>
            <div className={styles.logo}>logo</div>
            <nav className={cN(styles.navigators)}>
                {NavigatingOptions()}
            </nav>
            <LightBox
                isOpen={openMenu}
                handleDispatch={setOpenMenu}
                direction={E_direction.LEFT}
                theName={styles.sideBlock}
                isOverflow={true}
            >
                <div className={styles.sideBlock}>
                    <i className={styles.closeIcon} onClick={()=>setOpenMenu(false)}/>
                    {NavigatingOptions(true)}
                </div>
            </LightBox>
        </div>
    )
}

function Listing(items: Array<{
    ref: string,
    name: string,
}>, setOpenMenu: Function) {
    return (
        <ul className={styles.Items}>
            {
                items.map((item, ind) => {
                    return <Link href={item.ref} key={ind} className={styles.item} onClick={() => setOpenMenu(false)}>{item.name}</Link>
                })
            }
        </ul>
    )
}

export default memo(Header);

