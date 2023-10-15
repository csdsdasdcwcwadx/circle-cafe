import Default from '@/components/Common/Default';
import styles from './styles.module.scss';
import envSrc from '@/image/img-03-07-1@2x.jpg';
import { E_Page } from '@/redux/interfaces';

export default function Venue() {
    return (
        <Default
            className={styles.venue}
            title='包場資訊'
            currentPage={E_Page.VENUE}
            faded
            imageSrc={envSrc}
            altContent='envSrc'
        >
            <span>
                空間是體驗過程的重要舞台
                細心勾劃一切五感享受
                藉故事性與溫度打開想像的觸點
                為身歷其近的人們留存深刻記憶，銘記再度回訪的理由
            </span>
        </Default>
    )
}