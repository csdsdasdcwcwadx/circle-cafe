import styles from './styles.module.scss';
import { E_Page } from '@/redux/interfaces';
import steakSrc from '@/image/20221001122155672158.jpg';
import Image from 'next/image';
import firstImg from '@/image/clear.jpg';
import secondImg from '@/image/images2.jpeg';
import Default from '@/components/Common/Default';
import signSrc from '@/icons/Jacky文字圖.png';

export default function Story() {

    return (
        <Default 
            currentPage={E_Page.STORY}
            altContent='storyimg'
            imageSrc={steakSrc}
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
                    <Image src={firstImg} alt='第一張圖片' fill sizes='100%'/>
                </div>
            </div>
        </Default>
    )
}