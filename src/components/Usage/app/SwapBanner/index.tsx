import { useEffect, useState, memo } from "react";
import styles from './styles.module.scss';
import GoogleMapper from '@/components/Common/GoogleMapper';
import GoogleComment from "@/components/Common/GoogleComment";

function SwapBanner() {
    return (
        <div className={styles.thirdpage}>
            <div className={styles.displayarea}>
                <div className={styles.googlemap}>
                    <GoogleMapper/>
                </div>
                <div className={styles.googlecomment}>
                    <GoogleComment/>
                </div>
            </div>
        </div>
    )
}

export default memo(SwapBanner);