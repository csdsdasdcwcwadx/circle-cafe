'use client';

import { memo } from 'react';
import styles from './styles.module.scss';
import { E_Page, I_RootState } from '@/redux/interfaces';
import { useSelector } from 'react-redux';
import cN from 'classnames';
import footerSrc from '../../image/FesOdoNUoAEaCAR.jpg';
import Image from 'next/image';

function Footer() {
    const page = useSelector((store: I_RootState) => store.page);

    return (
        <footer className={cN(styles.Footer, {[styles.ishome]: page === E_Page.HOME})}>
            <div className={styles.firstline}>
                <Image src={footerSrc} alt='footer' className={styles.fooicon}/>
                <div className={styles.items}>
                    <div className={styles.redirector}>
                        <a href="/">好吃好吃好吃</a>
                        <a href="/">好吃好吃好吃</a>
                        <a href="/">好吃好吃好吃</a>
                    </div>
                    <div className={styles.redirector}>
                        <a href="/">好吃好吃好吃</a>
                        <a href="/">好吃好吃好吃</a>
                        <a href="/">好吃好吃好吃</a>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>Copyright © All Rights Reserved.</div>
        </footer>
    )
}

export default memo(Footer);

