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
import Carousel from '@/components/Carousel';

const CarouselData = [
  {src: fullSrc, alt: 'full', content: '內文內文內文', title: '標題標題標題'},
  {src: steakSrc, alt: 'steak', content: '內文內文內文', title: '標題標題標題'},
  {src: wholeSrc, alt: 'whole', content: '內文內文內文', title: '標題標題標題'},
  {src: wholeSrc, alt: 'whole', content: '內文內文內文', title: '標題標題標題'},
  {src: wholeSrc, alt: 'whole', content: '內文內文內文', title: '標題標題標題'},
  {src: wholeSrc, alt: 'whole', content: '內文內文內文', title: '標題標題標題'},
]

export default function Home() {

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
          1111
        </section>
      </ReactPageScroll>
    </div>

  )
}
