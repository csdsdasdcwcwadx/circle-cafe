'use client';

import styles from './styles.module.scss';
import topperSrc from '@/image/29740091487_1c0c634e53_o.jpg';
import fullSrc from '@/image/images.jpeg';
import steakSrc from '@/image/00-41.jpg';
import wholeSrc from '@/image/20210819234553_73.jpg';
import  ReactPageScroll  from  'react-page-scroll';
import Carousel from '@/components/Carousel';
import { useDispatch } from 'react-redux';
import { E_Page } from '@/redux/interfaces';
import { useEffect } from 'react';
import { setPage } from '@/redux/actions';
import Footer from '@/components/Footer';
import SwapBanner from '@/components/SwapBanner';
import coffeeSrc from '@/image/1ea5f3a2f2f21e96.png';
import Image from 'next/image';

const CarouselData = [
  {src: fullSrc, alt: 'full', content: '內文內文內文', title: '標題標題標題'},
  {src: steakSrc, alt: 'steak', content: '內文內文內文', title: '標題標題標題'},
  {src: wholeSrc, alt: 'whole', content: '內文內文內文', title: '標題標題標題'},
  {src: fullSrc, alt: 'whole', content: '內文內文內文', title: '標題標題標題'},
  {src: steakSrc, alt: 'whole', content: '內文內文內文', title: '標題標題標題'},
  {src: wholeSrc, alt: 'whole', content: '內文內文內文', title: '標題標題標題'},
]

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(E_Page.HOME));
  },[dispatch])

  return (
    <div className={styles.home}>
      <ReactPageScroll height='calc(100vh - 60px)' animationDuration={1200}>
        <section className={styles.firstpage}>
          <Carousel data={CarouselData}/>
        </section>
        <section className={styles.secondpage}>
          <div className={styles.coffeeimg}>
            <Image src={coffeeSrc} alt='coffee' fill sizes='100%'/>
          </div>
          {/* <div className={styles.topperImage}>
            <Image src={topperSrc} alt='steak' sizes='50vw' fill priority/>
          </div>
          <h2>
            <span>食旅 拾</span>
            <span>circle cafe</span>
          </h2> */}
        </section>
        <section className={styles.thirdpage}>
          <SwapBanner/>
          <Footer/>
        </section>
      </ReactPageScroll>
    </div>
  )
}
