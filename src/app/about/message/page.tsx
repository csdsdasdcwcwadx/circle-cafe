import Default from "@/components/Common/Default";
import styles from './styles.module.scss';
import { E_Page } from "@/redux/interfaces";
import messageSrc from '@/image/mcdongal.jpeg';
import iconSrc from '@/image/79.jpg_1140x855.jpg';
import Image from "next/image";

export default function message() {
    return (
        <Default
            className={styles.message}
            currentPage={E_Page.MESSAGE}
            imageSrc={messageSrc}
            altContent="message"
            title="廚師對話"
            faded
        >
            <div className={styles.section}>
                <Image src={iconSrc} alt="chef"/>
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
            </div>
        </Default>
    )
}