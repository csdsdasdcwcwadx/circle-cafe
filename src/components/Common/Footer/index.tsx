import { memo } from 'react';
import styles from './styles.module.scss';
// import cN from 'classnames';
// import footerSrc from '@/image/FesOdoNUoAEaCAR.jpg';
import Image from 'next/image';
import qrcodeSrc from '@/image/qrcode.png';

function Footer() {

    return (
        <footer className={styles.info}>
            <div className={styles.qrcode}>
                <Image src={qrcodeSrc} alt='web source' sizes='100%' fill/>
            </div>
            <div className={styles.wording}>
                <div>地址 / 
                    <span> 這是地址資訊這是地址資訊這是地址</span>
                </div>
                {/* <div>聯絡方法 / 
                    <span>{`(03)4336616`} / yuchen@gmail.com</span>
                </div>
                <div>地址 /  
                    <span> 這是地址資訊這是地址資訊這是地址資訊</span>
                </div> */}
            </div>
            <div className={styles.wording}>
                <div>地址 / 
                    <span> 這是地址資訊這是地址資訊這</span>
                </div>
            </div>
        </footer>
    )
}

export default memo(Footer);

