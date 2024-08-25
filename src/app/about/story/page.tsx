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
                我們的餐廳起源於對家鄉味道的熱愛，創辦人從小在家族餐館中耳濡目染，深知用心烹調的重要性。帶著對傳統料理的執著與現代健康概念的融合，我們成立了這家餐廳。每一道料理都選用最新鮮的食材，堅持手工製作，讓顧客能夠品味到家的味道。這不僅僅是一家餐廳，更是一個承載溫馨回憶與情感的地方，希望每一位顧客在這裡都能找到屬於自己的幸福滋味。
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