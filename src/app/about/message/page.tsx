import Default from "@/components/Common/Default";
import styles from './styles.module.scss';
import { E_Page } from "@/redux/interfaces";
import coverSrc from '@/image/temp/拾旅食 (43).jpg';
import iconSrc from '@/image/temp/fixed.jpg';
import Image from "next/image";
import Footer from "@/components/Common/Footer";

export default function message() {
    return (
        <Default
            className={styles.message}
            currentPage={E_Page.MESSAGE}
            imageSrc={coverSrc}
            altContent="message"
            title="廚師對話"
            faded
        >
            <div className={styles.section}>
                <div className={styles.frame}>
                    <Image src={iconSrc} alt="chef" fill sizes='100%'/>
                </div>
                <span className={styles.content}>
                    <h3>主廚的話</h3>
                    <span>
                    「歡迎來到拾旅食義式庭園餐廳」！
                    我是主理人詹爸，我們餐廳的每一道菜都是用心製作的。我們致力於將傳統義式料理的精髓與現代創意完美融合。我們的食材來源於當地新鮮的有機農場，每一道菜品都經過精心的挑選與製作，旨在帶給您最純正的義式風味。無論是我們的經典義大利麵還是獨特的自製披薩，每一口都融入了我們對料理的熱愛與對品質的堅持。期待您的光臨，一同在我們的庭園中，享受一段美好的餐飲時光！」
                    </span>
                    <div className={styles.checkout}>
                        <button>點我查看</button>
                    </div>
                </span>
            </div>
        </Default>
    )
}