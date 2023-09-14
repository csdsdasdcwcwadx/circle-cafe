'use client';

import styles from './styles.module.scss';
import Image from 'next/image';
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
import frameSrc from '@/icons/bb838d54-436b-4c4a-b395-ca6ca6221194_pixelied-wood-grain.svg';
import bottomSrc from '@/image/45196969044_3e0fcf8a6c_h.jpg'

const CarouselData = [
  {src: fullSrc, alt: 'full', content: '內文內文內文', title: '標題標題標題'},
  {src: steakSrc, alt: 'steak', content: '內文內文內文', title: '標題標題標題'},
  {src: wholeSrc, alt: 'whole', content: '內文內文內文', title: '標題標題標題'},
  {src: wholeSrc, alt: 'whole', content: '內文內文內文', title: '標題標題標題'},
  {src: wholeSrc, alt: 'whole', content: '內文內文內文', title: '標題標題標題'},
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
          <div className={styles.topperImage}>
            <Image src={topperSrc} alt='steak' sizes='50vw' fill priority/>
          </div>
          <h2>
            <span>食旅 拾</span>
            <span>circle cafe</span>
          </h2>
        </section>
        <section className={styles.secondpage}>
          <Carousel data={CarouselData}>
            <>
              {
                CarouselData.map((info, ind) => {
                  return (
                    <div className={styles.others} key={ind}>
                      <div>{info.title}</div>
                      <span>{info.content}</span>
                    </div>
                  )
                })
              }
            </>
          </Carousel>
        </section>
        <section className={styles.thirdpage}>
          <aside data-info="標題標題標題">
              {/* <Image src={frameSrc} alt='frame' fill sizes='100%' className={styles.framesrc}/> */}
              <div className={styles.bottomsrc}>
                <Image src={bottomSrc} alt='frame' fill sizes='100%'/>
              </div>
          </aside>
          <aside data-info="標題標題標題">
            {/* <Image src={frameSrc} alt='frame' fill sizes='100%' className={styles.framesrc}/> */}
            <div className={styles.bottomsrc}>
              <Image src={bottomSrc} alt='frame' fill sizes='100%'/>
            </div>
          </aside>
          <aside data-info="標題標題標題">
            {/* <Image src={frameSrc} alt='frame' fill sizes='100%' className={styles.framesrc}/> */}
            <div className={styles.bottomsrc}>
              <Image src={bottomSrc} alt='frame' fill sizes='100%'/>
            </div>
          </aside>
          <footer>
            <div className={styles.copyright}>Copyright © All Rights Reserved.</div>
          </footer>
        </section>
      </ReactPageScroll>
    </div>
  )
}
