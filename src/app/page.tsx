'use client';

import styles from './styles.module.scss';
import Image from 'next/image';
import topperSrc from '@/image/24237d1dfdcd41cb9be90300028ffad2_Danny+Deng+鄧有癸.jpg';
import fullSrc from '@/image/images.jpeg';
import steakSrc from '@/image/00-41.jpg';
import wholeSrc from '@/image/20210819234553_73.jpg';
import  ReactPageScroll  from  'react-page-scroll';
import { useEffect, useState } from 'react';
import cN from 'classnames';

const Carousel = [
  {src: fullSrc, alt: 'full', content: '333', id: 1},
  {src: steakSrc, alt: 'steak', content: '222', id: 2},
  {src: wholeSrc, alt: 'whole', content: '111', id: 3},
]

export default function Home() {
  const [focusBanner, setFocusBanner] = useState(0);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTrigger(true);
    }, 10000)

    return () => {
      clearInterval(timer);
    }
  }, [])

  useEffect(() => {
    setTrigger(false);
    trigger && setFocusBanner(pre=>pre+1 === Carousel.length ? 0 : pre+1);
  }, [trigger])

  return (
    <div className={styles.home}>
      <ReactPageScroll height='calc(100vh - 60px)' animationDuration={1200}>
        <section className={styles.firstpage}>
          <div className={styles.topperImage}>
            <Image src={topperSrc} alt='steak' sizes='50vw' fill/>
          </div>
          <h2>
            <span>食旅 拾</span>
            <span>circle cafe</span>
          </h2>
        </section>
        <section className={styles.secondpage}>
          <div className={styles.carousel}>
            {
              Carousel.map((info, ind) => {
                return (
                  <aside key={info.id} style={{
                    marginLeft: `calc(${100*ind}%  - ${100*focusBanner}%)`
                  }}>
                    <Image src={info.src} alt={info.alt} fill/>
                    <span>{info.content}</span>
                  </aside>
                )
              })
            }
          </div>
          <div className={styles.dotting}>
            {
              Carousel.map((_, ind) => {
                return <i key={ind} className={cN({[styles.active]: focusBanner === ind})} onClick={() => {
                  setFocusBanner(ind);
                }}/>
              })
            }
          </div>
        </section>
        <section className={styles.thirdpage}>
          1111
        </section>
      </ReactPageScroll>
    </div>

  )
}
