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

export default async function Home() {
  const CarouselData = await api_getBanner(true);

  return (
    <div className={styles.home}>
        <section className={styles.firstpage}>
          <Carousel data={CarouselData?.bannerinfo!}/>
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
                  <span><i/>這是小標題<i/></span>
                  <div className={styles.title}>
                    王品集團因同仁而精彩，
                    <br/>
                    有快樂的同仁
                  </div>
                  <p>
                    堅持以人為本，把同仁當成自己的家人一樣尊重、一樣重視、一樣重要，就像一個家庭中的每位成員皆舉足輕重，並產生認同與歸屬感。
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
                  <h3>關於我們關於我們</h3>
                  <div className={styles.text}>
                    內文內文內文內文內文內文內文內文內文內文內內文內文內文內文內文內文內文內文內文內文內
                    內文內文內文內文內文內文內文內文內文內文內內文內文內文內文內文內文內文內文內文內文內
                    內文內文內文內文內文內文內文內文內文內文內內文內文內文內文內文內文內文內文內文內文內
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
              <h3>𝓵𝓸𝓿𝓮 𝓼𝓽𝓸𝓻𝔂</h3>
              <span className={styles.bannercontent}>
                說什麼呢，他也不會做這種事情的說什麼呢，他也不會做這種事情的說什麼呢，他也不會做這種事情的說什麼呢，他也不會做這種事情的
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
        </LazyLoadingComp>
        <Footer/>
        <PreAnimate/>
    </div>
  )
}
