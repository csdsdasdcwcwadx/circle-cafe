import { memo } from 'react';
import styles from './styles.module.scss';

function Footer() {
    return (
        <footer className={styles.info}>
            <div className={styles.logo}>
                logo
            </div>
            <div className={styles.wording}>
                <span>Copyright all rights reserved.</span>
            </div>
            <div className={styles.wording}>
                <span> 拾旅。食 Circle Cafe & Meal Design by Jack</span>
            </div>
        </footer>
    )
}

export default memo(Footer);

