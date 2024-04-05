import styles from './styles.module.scss';
import fullSrc from '@/image/images.jpeg';
import steakSrc from '@/image/00-41.jpg';
import wholeSrc from '@/image/20210819234553_73.jpg';
import coverSrc from '@/image/temp/拾旅食 (1).jpg';
import Carousel from '@/components/Usage/app/Carousel';
import MapperInfo from '@/components/Usage/app/MapperInfo';
import PreAnimate from '@/components/Usage/app/PreAnimate';
import SwapBanner from '@/components/Usage/app/SwapBanner';
import LazyLoadingComp from '@/components/Usage/app/LazyLoadingComp';
import Image from 'next/image';
import interSrc from '@/image/temp/拾旅食 (46).jpg';

const CarouselData = [
  {src: coverSrc, alt: 'full', content: '內文內文內文內文內文內文內文內', title: '𝓼𝓽𝓸𝓻𝔂𝓼𝓽𝓸𝓻𝔂'},
  {src: steakSrc, alt: 'steak', content: '內文內文內文內文內文內文內文內', title: '𝓼𝓽𝓸𝓻𝔂𝓼𝓽𝓸𝓻𝔂'},
  {src: wholeSrc, alt: 'whole', content: '內文內文內文內文內文內文內文內', title: '𝓼𝓽𝓸𝓻𝔂𝓼𝓽𝓸𝓻𝔂'},
  {src: fullSrc, alt: 'whole', content: '內文內文內文內文內文內文內文內', title: '𝓼𝓽𝓸𝓻𝔂𝓼𝓽𝓸𝓻𝔂'},
  {src: steakSrc, alt: 'whole', content: '內文內文內文內文內文內文內文內', title: '𝓼𝓽𝓸𝓻𝔂𝓼𝓽𝓸𝓻𝔂'},
  {src: wholeSrc, alt: 'whole', content: '內文內文內文內文內文內文內文內', title: '𝓼𝓽𝓸𝓻𝔂𝓼𝓽𝓸𝓻𝔂'},
]

export default function Home() {

  return (
    <div className={styles.home}>
        <section className={styles.firstpage}>
          <Carousel data={CarouselData}/>
        </section>
        <section className={styles.secondpage}>
          <LazyLoadingComp>
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
          </LazyLoadingComp>
        </section>
        <section className={styles.thirdpage}>
          <LazyLoadingComp>
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
              {/* <div className={styles.textdisplay}>
                <h3>關於我們</h3>
                <div className={styles.text}>
                  內文內文內文內文內文內文內文內文內文內文內內文內文內文內文內文內文內文內文內文內文內
                  內文內文內文內文內文內文內文內文內文內文內內文內文內文內文內文內文內文內文內文內文內
                  內文內文內文內文內文內文內文內文內文內文內內文內文內文內文內文內文內文內文內文內文內
                </div>
              </div> */}
            </div>
          </LazyLoadingComp>
        </section>
        <section className={styles.forthpage}>
          <LazyLoadingComp>
            <div className={styles.bannertitle}>
              <h3></h3>
              <span className={styles.bannercontent}>
                說什麼呢，他也不會做這種事情的說什麼呢，他也不會做這種事情的說什麼呢，他也不會做這種事情的說什麼呢，他也不會做這種事情的
              </span>
            </div>
            <SwapBanner/>
          </LazyLoadingComp>
        </section>
        <section className={styles.fifthpage}>
          <LazyLoadingComp>
            <MapperInfo/>
          </LazyLoadingComp>
        </section>
        {/* <PreAnimate/> */}
    </div>
  )
}
