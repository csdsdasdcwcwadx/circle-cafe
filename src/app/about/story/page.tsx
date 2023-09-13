'use client';

import { Fragment, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { setPage } from '@/redux/actions';
import { E_Page } from '@/redux/interfaces';
import { useDispatch } from 'react-redux';
import Footer from '@/components/Footer';
import steakSrc from '../../../image/20221001122155672158.jpg';
import Image from 'next/image';
import cN from 'classnames';

export default function Story() {
    const dispatch = useDispatch();
    const [activate, setActivate] = useState(false);

    useEffect(() => {
        dispatch(setPage(E_Page.STORY));
        setActivate(true);
    }, [dispatch])

    return (
        <Fragment>
            <div className={cN(styles.Story, {[styles.active]: activate})}>
                <div className={styles.mainbanner}>
                    <Image src={steakSrc} alt='steak'/>
                </div>
                <main>
                    <h2>品牌故事</h2>
                    <p>
                        123
                    </p>
                </main>
            </div>
            <Footer/>
        </Fragment>
    )
}