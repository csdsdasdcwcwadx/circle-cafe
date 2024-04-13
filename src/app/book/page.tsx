import Default from "@/components/Common/Default";
import { E_Page } from "@/redux/interfaces";
import BackImage from '../../image/temp/拾旅食 (6).jpg';
import styles from './styles.module.scss';
import GoogleMapper from "@/components/Modules/GoogleMapper";

export default function Book() {
    return (
        <Default
            currentPage={E_Page.BOOK}
            imageSrc={BackImage}
            altContent="預約訂位圖片"
            title="預約訂位"
            className={styles.book}
            faded
        >
            <section>
                <div className={styles.half}>
                    <h3>營業時間</h3>
                    <aside>
                        <div>平日11:00-21:00</div>
                        <div>平日11:00-21:00</div>
                    </aside>
                </div>
                <div className={styles.half}>
                    <h3>供餐時間</h3>
                    <aside>
                        <div>11:00-14:30</div>
                        <div>11:00-14:30</div>
                    </aside>
                </div>
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
            <section>
                <h3>包場低消</h3>
                <aside className={styles.display}>
                    <div>*免收場地費，低消價格可抵餐酒費用。</div>
                    <div>*需加收10%服務費，自帶酒類開瓶費另計</div>
                    <div>*包場菜單均為專屬客製化包場餐飲服務，不得與其他優惠合併使用。</div>
                </aside>
            </section>
            <section>
                <h3>交通資訊</h3>
                <aside className={styles.display}>
                    <div>‧在桃園高鐵站對面，前往6號出口，從空橋走過去上手扶梯到三樓</div>
                    <div>‧桃園捷運：於A18站下車後上二樓從空橋走過去上手扶梯到三樓</div>
                    <div>‧中壢車站公車：公車132A、172、5087、5089、高鐵快捷公車170，車程約40分鐘</div>
                    <div>‧桃園車站公車：高鐵快捷公車206，車程約45分鐘</div>
                    <div>‧開車華泰室內停車場：室內停車場共四個出入口，我們在一期停車場的上面</div>
                </aside>
            </section>
            <section className={styles.page}>
                <h3>地圖資訊</h3>
                <div className={styles.bottomarea}>
                <div className={styles.map}><GoogleMapper/></div>
                <aside className={styles.mapinfo}>
                    <div className={styles.infotitle}>New York</div>
                    <div className={styles.maininfo}>
                    <div>Restaurant St.Delicious City London 9587 LK</div>
                    <div>tele：aa123456</div>
                    <div>email：booking@gmail.com</div>
                    </div>
                    <div className={styles.subinfo}>
                    <div className={styles.subtitle}>Lunch Time</div>
                    <div className={styles.maininfo}>
                        <div>18:00 - 19:00</div>
                        <div>18:00 - 19:00</div>
                    </div>
                    </div>
                    <div className={styles.subinfo}>
                    <div className={styles.subtitle}>Lunch Time</div>
                    <div className={styles.maininfo}>
                        <div>18:00 - 19:00</div>
                        <div>18:00 - 19:00</div>
                    </div>
                    </div>
                    <div className={styles.Mmap}><GoogleMapper/></div>
                </aside>
                </div>
            </section>
            {/* <section>
                <h3>地圖資訊</h3>
                <aside className={styles.map}>
                    <GoogleMapper/>
                </aside>
            </section> */}
        </Default>
    )
}