import { useEffect, useState, memo } from "react";
import styles from './styles.module.scss';
import GoogleMapper from '@/components/Modules/GoogleMapper';
import cN from 'classnames';
import Footer from "@/components/Common/Footer";

function MapperInfo() {
    return (
        <div className={styles.thirdpage}>
            <div className={styles.displayarea}>
                <div className={styles.area}>
                    {/* <h3>餐廳資訊</h3> */}
                    <div className={styles.flexer}>
                        <div className={styles.map}>
                            <GoogleMapper/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(MapperInfo);