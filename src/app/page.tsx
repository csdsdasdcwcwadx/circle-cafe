'use client';

import styles from './styles.module.scss';
import Image from 'next/image';
import topperSrc from '@/image/24237d1dfdcd41cb9be90300028ffad2_Danny+Deng+鄧有癸.jpg';

export default function Home() {
  return (
    <div className={styles.home}>
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
        
      </section>
    </div>

  )
}
