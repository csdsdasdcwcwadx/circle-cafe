import Default from "@/components/Common/Default";
import styles from './styles.module.scss';
import { E_Page } from "@/redux/interfaces";
import reportSrc from '@/image/下載scaasc.jpeg';
import Image from "next/image";
import storySrc from '@/image/FesOdoNUoAEaCAR.jpg';

export default function Report() {
    return (
        <Default
            className={styles.report}
            currentPage={E_Page.REPORT}
            title="部落客訪店/媒體報導"
            imageSrc={reportSrc}
            altContent="reportimage"
            faded
        >
            <div className={styles.content}>
                <span>
                    故事故事故事故事故事故事故事故事故事故事
                    故事故事故事故事故事故事故事故事故事故事
                    故事故事故事故事故事故事故事故事故事故事
                    故事故事故事故事故事故事故事故事故事故事
                    故事故事故事故事故事故事故事故事故事故事
                    故事故事故事故事故事故事故事故事故事故事
                    故事故事故事故事故事故事故事故事故事故事
                </span>
                <Image src={storySrc} alt='storyicon' className={styles.storyicon}/>
            </div>
        </Default>
    )
}