import styles from './styles.module.scss';
import topperSrc from '@/image/29740091487_1c0c634e53_o.jpg';
import fullSrc from '@/image/images.jpeg';
import steakSrc from '@/image/00-41.jpg';
import wholeSrc from '@/image/20210819234553_73.jpg';
import  ReactPageScroll  from  'react-page-scroll';
import Carousel from '@/components/Usage/app/Carousel';
import Footer from '@/components/Common/Footer';
import SwapBanner from '@/components/Usage/app/SwapBanner';
import coffeeSrc from '@/image/1ea5f3a2f2f21e96.png';
import Image from 'next/image';
import PreAnimate from '@/components/Usage/app/PreAnimate';

const CarouselData = [
  {src: fullSrc, alt: 'full', content: '內文內文內文', title: '標題標題標題'},
  {src: steakSrc, alt: 'steak', content: '內文內文內文', title: '標題標題標題'},
  {src: wholeSrc, alt: 'whole', content: '內文內文內文', title: '標題標題標題'},
  {src: fullSrc, alt: 'whole', content: '內文內文內文', title: '標題標題標題'},
  {src: steakSrc, alt: 'whole', content: '內文內文內文', title: '標題標題標題'},
  {src: wholeSrc, alt: 'whole', content: '內文內文內文', title: '標題標題標題'},
]

export default function Home() {

  return (
    <div className={styles.home}>
        <section className={styles.firstpage}>
          <Carousel data={CarouselData}/>
        </section>
        <section className={styles.secondpage}>
          <div className={styles.coffeeimg}>
            <Image src={coffeeSrc} alt='coffee' fill sizes='100%'/>
          </div>
        </section>
        <section className={styles.thirdpage}>
          <SwapBanner/>
          <Footer/>
        </section>
        <PreAnimate/>
    </div>
  )
}
