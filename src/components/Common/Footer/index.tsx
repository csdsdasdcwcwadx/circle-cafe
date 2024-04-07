import { memo } from 'react';
import styles from './styles.module.scss';

function Footer() {
    return (
        <footer className={styles.info}>
            <div className={styles.logo}>
                logo
            </div>
            <div className={styles.wording}>
                <span>餐廳資訊餐廳資訊</span>
            </div>
            <div className={styles.wording}>
                <span> 餐廳資訊餐廳資訊餐廳資訊餐廳資訊</span>
            </div>
        </footer>
    )
}

export default memo(Footer);

