import Default from "@/components/Common/Default";
import { E_Page } from "@/redux/interfaces";
import BackImage from '../../image/00-41.jpg';
import styles from './styles.module.scss';

export default function Book() {
    return (
        <Default
            currentPage={E_Page.BOOK}
            imageSrc={BackImage}
            altContent="預約訂位圖片"
            title="預約訂位"
            className={styles.book}
            // faded
        >
            <section>
                <h3>營業時間</h3>
                <aside>
                    <div>平日11:00-21:00</div>
                    <div>平日11:00-21:00</div>
                </aside>
            </section>
            <section>
                <h3>供餐時間</h3>
                <aside>
                    <div>11:00-14:30</div>
                    <div>11:00-14:30</div>
                </aside>
            </section>
            <section>
                <h3>包場資訊</h3>
                <aside className={styles.base}>
                    用餐時間限時兩小時
                    *如遇特殊節慶將會另行公告營業時間及用餐時間
                    *『慶生䁬蛋糕』活動需先預付訂金$500/位，請於備註欄備註『我要參加慶生活動』，服務人員會再去電與您確認，或可直接來電洽詢
                </aside>
            </section>
            <section>
                <h3>訂位方式</h3>
                <aside className={styles.list}>
                    <li>
                        <span>電話聯絡</span>
                        <span>03-12345667</span>
                    </li>
                    <li>
                        <span>電子信箱</span>
                        <span>abcdefghi@gmail.com</span>
                    </li>
                    <li>
                        <span>電子信箱</span>
                        <span>請於備註欄備註『我要參加慶生活動』，服務人員會再去電與您確認，或可直接來電洽詢</span>
                    </li>
                </aside>
            </section>
        </Default>
    )
}