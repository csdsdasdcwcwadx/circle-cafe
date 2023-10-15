'use client';

import { memo, useState, useEffect, useMemo, useCallback} from "react";
import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.scss';
import cN from 'classnames';

interface I_props {
    data: Array<{
        src: StaticImageData;
        alt: string;
        title: string;
        content: string;
    }>
}

function Carousel({data}: I_props) {
    const [focusBanner, setFocusBanner] = useState(0);
    const [trigger, setTrigger] = useState(false);
    const [timerId, setTimerId] = useState<any>(null);

   const startTimer = useCallback(() => {
        const newTimerId = setInterval(() => {
            setTrigger(true);
        }, 10000);

        // 清除之前的计时器
        if (timerId !== null) {
            clearInterval(timerId);
        }

        setTimerId(newTimerId);
    }, [timerId]);

    useEffect(() => {
      startTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {
      setTrigger(false);
      if(trigger) setFocusBanner(pre=> pre+1 === data.length ? 0 : pre+1);
    }, [trigger, data])

    return (
        <div className={styles.carousel}>
            <div className={styles.banners}>
            {
              data.map((info, ind) => {
                return (
                  <aside key={ind+1} style={{
                  }} className={cN({[styles.active]: focusBanner === ind})}>
                    <Image src={info.src} alt={info.alt} fill sizes="100%"/>
                    <div className={cN(styles.others, {[styles.active]: focusBanner === ind})}>
                      <div className={styles.content}>
                        <div>{info.title}</div>
                        <span>{info.content}</span>
                      </div>
                    </div>
                  </aside>
                )
              })
            }
          </div>
          <div className={styles.dotting}>
            {
              data.map((_, ind) => {
                return <i key={ind} className={cN({[styles.active]: (ind === 0 && data.length === focusBanner) || focusBanner === ind})} onClick={()=>{
                  setFocusBanner(ind);
                  startTimer();
                }}/>
              })
            }
          </div>
        </div>
    )
}

export default memo(Carousel);