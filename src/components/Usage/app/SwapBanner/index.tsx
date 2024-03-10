import { useEffect, useState, memo } from "react";
import styles from './styles.module.scss';
import GoogleMapper from '@/components/Common/GoogleMapper';
import GoogleComment from "@/components/Common/GoogleComment";

function SwapBanner() {
    return (
        <div className={styles.thirdpage}>
            <div className={styles.displayarea}>
                <section className={styles.area}>
                    {/* <h3>餐廳資訊</h3> */}
                    <div className={styles.flexer}>
                        <div className={styles.map}>
                            <GoogleMapper/>
                        </div>
                        <div className={styles.info}>
                            <span>地址</span>
                            <div>這是地址資訊這是地址資訊這是地址資訊</div>
                            <span>聯絡電話</span>
                            <div>{`(03)4336616`}</div>
                            <span>地址</span>
                            <div>這是地址資訊這是地址資訊這是地址資訊</div>
                        </div>
                    </div>
                </section>
                <section className={styles.area}>
                    
                </section>
                {/* <div className={styles.comment}>
                    <GoogleComment/>
                </div> */}
            </div>
        </div>
    )
}

export default memo(SwapBanner);