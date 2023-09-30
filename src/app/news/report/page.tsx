'use client';

import Default from "@/components/Default";
import styles from './styles.module.scss';
import { E_Page } from "@/redux/interfaces";
import reportSrc from '@/image/下載scaasc.jpeg';

export default function Report() {
    return (
        <Default
            className={styles.report}
            currentPage={E_Page.REPORT}
            title="部落客訪店/媒體報導"
            imageSrc={reportSrc}
            altContent="reportimage"
        >

        </Default>
    )
}