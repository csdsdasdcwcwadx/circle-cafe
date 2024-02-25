'use client';

import { useState, useEffect, memo } from 'react';
import styles from './styles.module.scss';
import cN from 'classnames';
import { useDispatch } from 'react-redux';
import { setPage } from '@/redux/actions';
import { E_Page } from '@/redux/interfaces';

function PreAnimate() {
    const [preAnimate, setPreAnimate] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPage(E_Page.HOME));
    
        setTimeout(() => {
          setPreAnimate(false);
        }, 2000)
      },[dispatch])

    return (
        <div className={cN(styles.background, {[styles.close]: !preAnimate})}>
            <div className={styles.left}>拾旅</div>
            <div className={styles.right}>·食</div>
        </div>
    )
}

export default memo(PreAnimate);