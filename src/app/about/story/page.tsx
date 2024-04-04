import styles from './styles.module.scss';
import { E_Page } from '@/redux/interfaces';
import coverSrc from '@/image/temp/拾旅食 (38).jpg';
import Image from 'next/image';
import firstImg from '@/image/temp/拾旅食 (51).jpg';
import Default from '@/components/Common/Default';
import secondImg from '@/image/temp/拾旅食 (50).jpg';

export default function Story() {

    return (
        <Default 
            currentPage={E_Page.STORY}
            altContent='storyimg'
            imageSrc={coverSrc}
            title='品牌故事'
            className={styles.story}
            faded
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
                    故事故事故事故事故事故事故事故事故事故事
                    故事故事故事故事故事故事故事故事故事故事
                    故事故事故事故事故事故事故事故事故事故事
                    故事故事故事故事故事故事故事故事故事故事
                    故事故事故事故事故事故事故事故事故事故事
                </span>
            </p>
            <div className={styles.botimages}>
                <div className={styles.frame}>
                    <Image src={firstImg} alt='第一張圖片' fill sizes='100%'/>
                </div>
                <div className={styles.frame}>
                    <Image src={secondImg} alt='第一張圖片' fill sizes='100%'/>
                </div>
            </div>
        </Default>
    )
}