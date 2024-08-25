import styles from './styles.module.scss';
import Carousel from '@/components/Usage/app/Carousel';
import PreAnimate from '@/components/Usage/app/PreAnimate';
import SwapBanner from '@/components/Usage/app/SwapBanner';
import LazyLoadingComp from '@/components/Usage/app/LazyLoadingComp';
import Image from 'next/image';
import interSrc from '@/image/temp/拾旅食 (46).jpg';
import forthSrc from '@/image/illustration/21-removebg-preview.png';
import GoogleMapper from '@/components/Modules/GoogleMapper';
import Footer from '@/components/Common/Footer';
import { api_getBanner } from '@/apisource/apiname';
import firstImg from '@/image/temp/拾旅食 (1).jpg';
import secondImg from '@/image/temp/拾旅食 (2).jpg';
import thirdImg from '@/image/temp/拾旅食 (3).jpg';
import forthImg from '@/image/temp/拾旅食 (5).jpg';

const tempData = [
  {
    image: firstImg,
    title: '拾旅。食',
    subtitle: 'Delicious Food',
  },
  {
    image: secondImg,
    title: '拾旅。食',
    subtitle: 'Delicious Food',
  },
  {
    image: thirdImg,
    title: '拾旅。食',
    subtitle: 'Delicious Food',
  },
  {
    image: forthImg,
    title: '拾旅。食',
    subtitle: 'Delicious Food',
  },
]

export default async function Home() {
  const CarouselData = await api_getBanner(true);

  return (
    <div className={styles.home}>
        <section className={styles.firstpage}>
          <Carousel data={tempData}/>
        </section>
        <LazyLoadingComp>
          <section className={styles.secondpage}>
            <div className={styles.displayer}>
              <div className={styles.youtube}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/xNRJwmlRBNU?si=GHazuEEtrwdo_Dqv" 
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen></iframe>
              </div>
              <div className={styles.commercontent}>
                <div>
                  <span><i/>影片導覽<i/></span>
                  <div className={styles.title}>
                    Origin
                    <br/>
                    餐廳起源
                  </div>
                  <p>
                    堅持以人為本，把同仁當成自己的家人一樣尊重、一樣重視、一樣重要，就像一個家庭中的每位成員皆舉足輕重，並產生認同與歸屬感。
                  </p>
                  <div className={styles.more}>
                    <button>查看更多</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </LazyLoadingComp>
        <LazyLoadingComp>
          <section className={styles.thirdpage}>
            <div className={styles.contenter}>
              <div className={styles.area}>
                <div className={styles.imagebacker}>
                  <Image src={interSrc} alt='alter' fill sizes="100%"/>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.frame}>
                  <Image src={interSrc} alt='inner' fill sizes='100%'/>
                </div>
                <div className={styles.textcontent}>
                  <h3>餐點前導</h3>
                  <div className={styles.text}>
                  在忙碌的都市生活中，我們希望成為你短暫逃離喧囂的綠洲。在這裡，你可以與親朋好友一同分享精心烹調的美味食物，並探索比利時啤酒的多樣風味，感受舌尖上的驚喜。我們致力於營造一個溫馨而輕鬆的氛圍，讓每位顧客都能在安寧的環境中，放下壓力，專注於與好友共度的美好時光。無論是慶祝特別時刻，還是簡單的日常聚會，我們都希望成為你和朋友們享受珍貴時光的最佳選擇。
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.forthpage}>
            <div className={styles.frame}>
              {/* <Image src={forthSrc} alt='coffee' fill sizes='100%'/> */}
            </div>
            <div className={styles.bannertitle}>
              <h3>𝓼𝓽𝓸𝓻𝔂</h3>
              <span className={styles.bannercontent}>
              我們秉持健康、美味、環保的經營理念，精選新鮮食材，精心烹調每一道料理。不僅注重味覺享受，更重視顧客的身心健康，力求每位顧客都能在此感受到家的溫暖與愉悅。
              </span>
            </div>
            <SwapBanner/>
          </section>
        </LazyLoadingComp>
        <LazyLoadingComp>
          <section className={styles.fifthpage}>
            <div className={styles.bottomarea}>
              <div className={styles.map}><GoogleMapper/></div>
              <aside className={styles.mapinfo}>
                <div className={styles.infotitle}>營業時間</div>
                <div className={styles.maininfo}>
                  <div>No. 68, Lane 120, Section 3, Xinsheng Road, Zhongli District, Taoyuan City 320</div>
                  <div>tele：03 453 3137</div>
                  <div>fb：https://www.facebook.com/circlecafeandmeal/menu/?ref=page_internal</div>
                </div>
                <div className={styles.subinfo}>
                  <div className={styles.subtitle}>Lunch Time</div>
                  <div className={styles.maininfo}>
                    <div>11:30 - 15:00</div>
                  </div>
                </div>
                <div className={styles.subinfo}>
                  <div className={styles.subtitle}>Lunch Time</div>
                  <div className={styles.maininfo}>
                    <div>17:00 - 21:00</div>
                  </div>
                </div>
                <div className={styles.Mmap}><GoogleMapper/></div>
              </aside>
            </div>
          </section>
        </LazyLoadingComp>
        <Footer/>
        <PreAnimate/>
    </div>
  )
}
