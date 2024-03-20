import Default from "@/components/Common/Default";
import styles from './styles.module.scss';
import { E_Page } from "@/redux/interfaces";
import reportSrc from '@/image/下載scaasc.jpeg';
import Image from "next/image";
import GoogleComment from "@/components/Common/GoogleComment";

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
                <div className={styles.youtube}>
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/xNRJwmlRBNU?si=GHazuEEtrwdo_Dqv" 
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen></iframe>
                </div>
                <p>文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容
                文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容文字內容
                </p>
            </div>
            <div className={styles.comment}>
                <h3>𝓖𝓸𝓸𝓰𝓵𝓮 𝓒𝓸𝓶𝓶𝓮𝓷𝓽𝓼</h3>
                <div className={styles.commenter}>
                    <GoogleComment/>
                </div>
            </div>
        </Default>
    )
}