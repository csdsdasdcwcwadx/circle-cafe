'use client';

import { memo } from 'react';
import styles from './styles.module.scss';
import cN from 'classnames';
import footerSrc from '../../image/FesOdoNUoAEaCAR.jpg';
import Image from 'next/image';

function Footer() {

    return (
        <footer className={cN(styles.Footer)}>
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

