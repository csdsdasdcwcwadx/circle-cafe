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
                            <div className={styles.qrcode}></div>
                            <div className={styles.wording}>
                                <div>地址 / 
                                    <span> 這是地址資訊這是地址資訊這是地址資訊這是地址資訊這是地址資訊這是地址資訊</span>
                                </div>
                                <div>聯絡方法 / 
                                    <span>{`(03)4336616`} / yuchen@gmail.com</span>
                                </div>
                                <div>地址 /  
                                    <span> 這是地址資訊這是地址資訊這是地址資訊</span>
                                </div>
                            </div>
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