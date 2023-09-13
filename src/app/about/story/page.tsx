'use client';

import { Fragment, useEffect } from 'react';
import styles from './styles.module.scss';
import { setPage } from '@/redux/actions';
import { E_Page } from '@/redux/interfaces';
import { useDispatch } from 'react-redux';
import Footer from '@/components/Footer';

export default function Story() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPage(E_Page.STORY));
    }, [dispatch])

    return (
        <Fragment>
            <div className={styles.Story}>this is the story page</div>
            <Footer/>
        </Fragment>
    )
}