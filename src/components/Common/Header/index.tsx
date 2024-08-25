'use client';

import { Fragment, memo, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import cN from 'classnames';
import LightBox, { E_direction } from '../../Modules/LightBox';
import Image from 'next/image';
import instagramImage from '../../../icons/instagram.png';
import facebookImage from '../../../icons/facebook.png';
import LineImage from '../../../icons/Line.png';
import { useSelector } from "react-redux";
import { E_Page, I_RootState } from '@/redux/interfaces';
import logoSrc from '@/icons/logo.jpg';
import { log } from 'console';

const aboutLink = [
    {ref: '/about/story', name: '品牌故事', en: 'story'},
    {ref: '/about/message', name: ' 廚師對話', en: 'message'},
]

const newsLink = [
    // {ref: '/news/report', name: '部落客訪店/媒體報導', en: 'report'},
    {ref: '/news/activity', name: '活動公告', en: 'activity'},
]

function Header() {
    const router = useRouter();
    const [openMenu, setOpenMenu] = useState(false);
    const page = useSelector((store: I_RootState) => store.page);
    
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
                {/* <li onClick={() => {
                    router.push('/menu');
                    setOpenMenu(false);
                }}>菜單詳情<span>Menu</span></li> */}
                <li onClick={() => {
                    window.open('https://www.104.com.tw/company/1a2x6bklxq?jobsource=jolist_c_relevance');
                    setOpenMenu(false);
                }}>夥伴招募<span>Recrew</span></li>
            </Fragment>
        )
    }

    return (
        <>
            <div className={styles.Header}>
                <div className={styles.padder}>
                    <i className={styles.menuIcon} onClick={()=>setOpenMenu(true)}/>
                    <div className={styles.splitter}>
                        <nav className={cN(styles.navigators)}>
                            {NavigatingOptions()}
                        </nav>
                        <Link href='/' className={styles.logo}>
                            {/* <Image src={logoSrc} alt='logo' fill sizes='100%'/> */}
                            logo
                        </Link>
                        <Applicationer/>
                    </div>
                    <LightBox
                        isOpen={openMenu}
                        handleDispatch={setOpenMenu}
                        direction={E_direction.LEFT}
                        theName={styles.sideBlock}
                        isOverflow={true}
                    >
                        <div className={styles.sideBlock}>
                            {NavigatingOptions(true)}
                            <Applicationer/>
                        </div>
                    </LightBox>
                </div>
            </div>
            <div className={styles.blank}></div>
            {page !== E_Page.BOOK && <Link className={styles.reservation} href='/book'>預約訂位</Link>}
        </>
    )
}

function Applicationer() {
    return (
        <div className={styles.applicationer}>
            <Link href='https://www.instagram.com/circlecafe.meal' target="_blank"><Image src={instagramImage} width={28} height={28} alt='instagram'/></Link>
            <Link href='https://www.facebook.com/circlecafeandmeal?locale=zh_TW' target="_blank"><Image src={facebookImage} width={28} height={28} alt='facebook'/></Link>
            <Link href='' className={styles.line} target="_blank"><Image src={LineImage} width={30} height={30} alt='line'/></Link>
        </div>
    )
}

function Listing(items: Array<{
    ref: string,
    name: string,
    en: string,
}>, setOpenMenu: Function) {
    return (
        <ul className={styles.Items}>
            {
                items.map((item, ind) => {
                    return <Link href={item.ref} key={ind} className={styles.item} onClick={() => setOpenMenu(false)}>
                        <span>{item.name}</span>
                        <span>{item.en}</span>
                    </Link>
                })
            }
        </ul>
    )
}

export default memo(Header);

