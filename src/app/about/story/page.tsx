'use client';

import styles from './styles.module.scss';
import { E_Page } from '@/redux/interfaces';
import steakSrc from '../../../image/20221001122155672158.jpg';
import Image from 'next/image';
import storySrc from '../../../image/FesOdoNUoAEaCAR.jpg';
import Default from '@/components/Default';

export default function Story() {

    return (
        <Default 
            currentPage={E_Page.STORY}
            altContent='storyimg'
            imageSrc={steakSrc}
            title='品牌故事'
            className={styles.story}
        >
            <p>
                <span>
                    故事故事故事故事故事故事故事故事故事故事
                    故事故事故事故事故事故事故事故事故事故事
                    故事故事故事故事故事故事故事故事故事故事
                    故事故事故事故事故事故事故事故事故事故事
                    故事故事故事故事故事故事故事故事故事故事
                    故事故事故事故事故事故事故事故事故事故事
                    故事故事故事故事故事故事故事故事故事故事
                </span>
                <Image src={storySrc} alt='storyicon' className={styles.storyicon}></Image>
            </p>
        </Default>
    )
}