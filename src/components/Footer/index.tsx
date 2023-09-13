'use client';

import { memo } from 'react';
import styles from './styles.module.scss';
import { E_Page, I_RootState } from '@/redux/interfaces';
import { useSelector } from 'react-redux';
import cN from 'classnames';

function Footer() {
    const page = useSelector((store: I_RootState) => store.page);

    return (
        <footer className={cN(styles.Footer, {[styles.hide]: page === E_Page.HOME})}>
            <div className={styles.firstline}>
                <div className={styles.imagearea}></div>
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

