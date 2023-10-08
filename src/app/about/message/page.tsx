'use client';

import Default from "@/components/Default";
import styles from './styles.module.scss';
import { E_Page } from "@/redux/interfaces";
import messageSrc from '@/image/mcdongal.jpeg';
import iconSrc from '@/image/FesOdoNUoAEaCAR.jpg';
import Image from "next/image";

export default function message() {
    return (
        <Default
            className={styles.message}
            currentPage={E_Page.MESSAGE}
            imageSrc={messageSrc}
            altContent="message"
            title="廚師對話"
        >
            <div className={styles.section}>
                <Image src={iconSrc} alt="icon"/>
                <span>
                    故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事事故事故事故事故事故事故事故事故
                    事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故
                    事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故
                </span>
                </div>
        </Default>
    )
}