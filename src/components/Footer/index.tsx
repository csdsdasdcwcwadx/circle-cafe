'use client';

import { memo } from 'react';
import styles from './styles.module.scss';

function Footer() {
    return (
        <footer className={styles.Footer}>thiis is a footer</footer>
    )
}

export default memo(Footer);

