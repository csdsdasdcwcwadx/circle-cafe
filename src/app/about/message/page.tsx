'use client';

import Default from "@/components/Default";
import styles from './styles.module.scss';
import { E_Page } from "@/redux/interfaces";
import messageSrc from '@/image/mcdongal.jpeg';

export default function message() {
    return (
        <Default
            className={styles.message}
            currentPage={E_Page.MESSAGE}
            imageSrc={messageSrc}
            altContent="message"
            title="廚師對話"
        >
            123
        </Default>
    )
}