'use client';

import styles from './styles.module.scss';
import steakSrc from '../../image/20210819234553_73.jpg';
import Default from '@/components/Default';
import { E_Page } from '@/redux/interfaces';

export default function Contact() {
    
    return (
        <Default
            altContent='contactsrc'
            className={styles.contact}
            imageSrc={steakSrc}
            title='聯絡我們'
            currentPage={E_Page.CONTACT}
        >

        </Default>
    )
}