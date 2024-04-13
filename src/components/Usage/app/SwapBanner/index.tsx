'use client';

import { memo, useEffect, useMemo, useState } from "react";
// import image1Src from '@/image/mcdongal.jpeg';
// import image2Src from '@/image/maree-taipei-73-jpg.webp';
import imageSrc1 from '@/image/temp/拾旅食 (2).jpg';
import imageSrc2 from '@/image/temp/拾旅食 (3).jpg';
import imageSrc3 from '@/image/temp/拾旅食 (5).jpg';
import styles from './styles.module.scss';
import Image from "next/image";
import cN from 'classnames';


declare const window: Window;
const images = [
    { src: imageSrc3, alt: '照片二', title: '𝕹𝖔𝖔𝖉𝖑𝖊𝖘', subtitle: '照片3', id: 1  },
    { src: imageSrc1, alt: '照片二', title: '𝕹𝖔𝖔𝖉𝖑𝖊𝖘', subtitle: '照片1', id: 2  },
    { src: imageSrc2, alt: '照片二', title: '𝕹𝖔𝖔𝖉𝖑𝖊𝖘', subtitle: '照片2', id: 3  },
    { src: imageSrc3, alt: '照片二', title: '𝕹𝖔𝖔𝖉𝖑𝖊𝖘', subtitle: '照片3', id: 4  },
    { src: imageSrc1, alt: '照片二', title: '𝕹𝖔𝖔𝖉𝖑𝖊𝖘', subtitle: '照片1', id: 5  },
]

let preventDoubleClick = true;
function SwapBanner() {
    const [isMobile, setIsMobile] = useState(false);
    const [focuspage, setFocuspage] = useState(1);
    const [onside, setOnside] = useState({side: 0, trigger: false});

    useEffect(() => {
        setIsMobile(window.innerWidth < 980);
    }, [])

    useEffect(() => {
        if(onside.trigger) {
            setOnside({side: 0, trigger: false});

            if(onside.side === 1) setFocuspage(pre=>pre+1);
            if(onside.side === 2) setFocuspage(pre=>pre-1);
        }
    }, [onside])

    return (
        <div className={styles.swapbanner}>
            <span className={styles.lefticon} onClick={() => {
                if(preventDoubleClick) {
                    if(focuspage-1 < 0) {
                        setOnside({side: 2, trigger: true});
                        setFocuspage(images.length-2);
                    } else setFocuspage(pre=>pre-1);
    
                    preventDoubleClick = false;
                    setTimeout(() => {
                        preventDoubleClick = true;
                    }, 1100)
                }
            }}><i/></span>
            <div className={styles.images}>
                {
                    images.map((image, ind) => {
                        return (
                            <div className={cN(styles.image)} key={ind} style={{
                                marginLeft: isMobile ? `${100*(ind-focuspage)}%` : `${(ind-1)*34}%`,
                                transition: onside.trigger ? 'none' : 'all 1s ease-in-out',
                            }}>
                                <Image src={image.src} alt={image.alt} sizes="100%" fill/>
                                <div className={styles.content}/>
                                <div className={styles.display}>
                                    <h3>{image.title}</h3>
                                    <span>{image.subtitle}</span>
                                </div>
                                <div className={styles.backer}/>
                            </div>
                        )
                    })
                }
            </div>
            <span className={styles.righticon} onClick={() => {
                if(preventDoubleClick) {
                    if(images.length === focuspage+1) {
                        setOnside({side: 1, trigger: true});
                        setFocuspage(1);
                    } else setFocuspage(pre=>pre+1);

                    preventDoubleClick = false;
                    setTimeout(() => {
                        preventDoubleClick = true;
                    }, 1100)
                }
            }}><i/></span>
        </div>
    )
}

export default memo(SwapBanner);