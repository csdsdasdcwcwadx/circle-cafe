import Default from "@/components/Common/Default";
import styles from './styles.module.scss';
import { E_Page } from "@/redux/interfaces";
import coverSrc from '@/image/temp/拾旅食 (43).jpg';
import iconSrc from '@/image/temp/fixed.jpg';
import Image from "next/image";
import Footer from "@/components/Common/Footer";

export default function message() {
    return (
        <Default
            className={styles.message}
            currentPage={E_Page.MESSAGE}
            imageSrc={coverSrc}
            altContent="message"
            title="廚師對話"
            faded
        >
            <div className={styles.section}>
                <div className={styles.frame}>
                    <Image src={iconSrc} alt="chef" fill sizes='100%'/>
                </div>
                <span className={styles.content}>
                    <h3>主廚的話</h3>
                    <span>
                    故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事事故事故事故事故事故事故事故事故
                    事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故
                    事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事事故事故事故事故事故事故事故事故
                    事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故
                    事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故
                    故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事事故事故事故事故事故事故事故事故
                    事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故
                    事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故
                    </span>
                    <div className={styles.checkout}>
                        <button>點我查看</button>
                    </div>
                </span>
            </div>
        </Default>
    )
}