'use client';

import Default from "@/components/Default";
import styles from './styles.module.scss';
import { E_Page } from "@/redux/interfaces";
import tastySrc from '@/image/istockphoto-1457889029-612x612.jpg';
import iconSrc from '@/image/FesOdoNUoAEaCAR.jpg';
import Image from "next/image";

export default function Ingredient() {
    return (
        <Default
            className={styles.ingredient}
            currentPage={E_Page.INGREDIENT}
            title="食材使用雨介紹"
            imageSrc={tastySrc}
            altContent="tasty"
            faded
        >
            <section className={styles.firstp}>
                <Image src={iconSrc} alt="icon"/>
                <span>
                    故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事事故事故事故事故事故事故事故事故
                    事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故
                    事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故
                </span>
            </section>
            <section className={styles.firsts}>
                <span>
                    故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事事故事故事故事故事故事故事故事故
                    事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故
                    事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故事故
                </span>
                <Image src={iconSrc} alt="icon"/>
            </section>
        </Default>
    )
}