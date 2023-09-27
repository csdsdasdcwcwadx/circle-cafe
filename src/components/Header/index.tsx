'use client';

import { Fragment, memo, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import cN from 'classnames';
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
                <li>
                    關於我們{Listing(aboutLink, setOpenMenu)}
                    <span>About</span>{onSide && <i/>}
                </li>
                <li>
                    最新消息{Listing(newsLink, setOpenMenu)}
                    <span>News</span>{onSide && <i/>}
                </li>
                <li onClick={() => {
                    router.push('/menu');
                    setOpenMenu(false);
                }}>菜單詳情<span>Menu</span></li>
                <li onClick={() => {
                    router.push('/venue');
                    setOpenMenu(false);
                }}>包場資訊<span>Venue</span></li>
                <li onClick={() => {
                    router.push('/book');
                    setOpenMenu(false);
                }}>預約訂位<span>Book</span></li>
                <li onClick={() => {
                    window.open('https://www.104.com.tw/company/1a2x6bklxq?jobsource=jolist_c_relevance');
                    setOpenMenu(false);
                }}>夥伴招募<span>Recrew</span></li>
                <li onClick={() => {
                    router.push('/contact');
                    setOpenMenu(false);
                }}>聯繫我們<span>Contact</span></li>
            </Fragment>
        )
    }

    return (
        <>
            <div className={styles.Header}>
                <div className={styles.padder}>
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
            </div>
            <div className={styles.blank}></div>
        </>
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

