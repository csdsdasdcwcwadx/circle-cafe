import styles from './styles.module.scss';
import fullSrc from '@/image/images.jpeg';
import steakSrc from '@/image/00-41.jpg';
import wholeSrc from '@/image/20210819234553_73.jpg';
import clearSrc from '@/image/golden.jpeg';
import Carousel from '@/components/Usage/app/Carousel';
import SwapBanner from '@/components/Usage/app/SwapBanner';
import PreAnimate from '@/components/Usage/app/PreAnimate';
import LazyLoadingComp from '@/components/Usage/app/LazyLoadingComp';

const CarouselData = [
  {src: clearSrc, alt: 'full', content: '內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文', title: '𝓼𝓽𝓸𝓻𝔂𝓼𝓽𝓸𝓻𝔂'},
  {src: steakSrc, alt: 'steak', content: '內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文', title: '𝓼𝓽𝓸𝓻𝔂𝓼𝓽𝓸𝓻𝔂'},
  {src: wholeSrc, alt: 'whole', content: '內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文', title: '𝓼𝓽𝓸𝓻𝔂𝓼𝓽𝓸𝓻𝔂'},
  {src: fullSrc, alt: 'whole', content: '內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文', title: '𝓼𝓽𝓸𝓻𝔂𝓼𝓽𝓸𝓻𝔂'},
  {src: steakSrc, alt: 'whole', content: '內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文', title: '𝓼𝓽𝓸𝓻𝔂𝓼𝓽𝓸𝓻𝔂'},
  {src: wholeSrc, alt: 'whole', content: '內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文', title: '𝓼𝓽𝓸𝓻𝔂𝓼𝓽𝓸𝓻𝔂'},
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
                  <div>這是標屜</div>
                  <p>內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文
                    內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文
                    內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文
                    內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文
                    內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文
                    內文內文內文內文內文</p>
                </div>
              </div>
            </div>
          </LazyLoadingComp>
        </section>
        <section className={styles.thirdpage}>
          <LazyLoadingComp>
            <SwapBanner/>
          </LazyLoadingComp>
        </section>
        {/* <PreAnimate/> */}
    </div>
  )
}
