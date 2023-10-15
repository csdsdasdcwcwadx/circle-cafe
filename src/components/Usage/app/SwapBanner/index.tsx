'use client';

import { useEffect, useState, memo } from "react";
import styles from './styles.module.scss';
import cN from 'classnames';
import Image from 'next/image';
import bottomSrc from '@/image/45196969044_3e0fcf8a6c_h.jpg';
import topperSrc from '@/image/29740091487_1c0c634e53_o.jpg';
import fullSrc from '@/image/images.jpeg';

const bottomDataSrc = [
    {src: fullSrc, info: '第三張'},
    {src: bottomSrc, info: '第一張'},
    {src: topperSrc, info: '第二張'},
    {src: fullSrc, info: '第三張'},
    {src: bottomSrc, info: '第一張'},
]

let preventDoubleClick = true;
function SwapBanner() {
    const [focuspage, setFocuspage] = useState(1);
    const [onside, setOnside] = useState({side: 0, trigger: false});

    useEffect(() => {
        if(onside.trigger) {
            setOnside({side: 0, trigger: false});

            if(onside.side === 1) setFocuspage(pre=>pre+1);
            if(onside.side === 2) setFocuspage(pre=>pre-1);
        }
    }, [onside])

    return (
        <div className={styles.frame}>
            <span className={cN(styles.lefticon, styles.icon)} onClick={() => {
                if(preventDoubleClick) {
                    if(focuspage-1 < 0) {
                        setOnside({side: 2, trigger: true});
                        setFocuspage(bottomDataSrc.length-2);
                    } else setFocuspage(pre=>pre-1);
    
                    preventDoubleClick = false;
                    setTimeout(() => {
                        preventDoubleClick = true;
                    }, 1000)
                }
            }}>
                <i/>
            </span>
            {
                bottomDataSrc.map((data, ind) => {
                    return (
                        <aside data-info={data.info} key={ind} style={{
                            marginLeft: `calc(${100*ind}%  - ${100*focuspage}%)`,
                            transition: onside.trigger ? 'none' : 'all 1s ease-in-out',
                        }}>
                            <div className={styles.bottomsrc} >
                            <Image src={data.src} alt='123' fill sizes='100%'/>
                            </div>
                        </aside>
                    )
                })
            }
            <span className={cN(styles.righticon, styles.icon)} onClick={() => {
                if(preventDoubleClick) {
                    if(bottomDataSrc.length === focuspage+1) {
                        setOnside({side: 1, trigger: true});
                        setFocuspage(1);
                    } else setFocuspage(pre=>pre+1);

                    preventDoubleClick = false;
                    setTimeout(() => {
                        preventDoubleClick = true;
                    }, 1000)
                }
            }}>
                <i/>
            </span>
        </div>
    )
}

export default memo(SwapBanner);