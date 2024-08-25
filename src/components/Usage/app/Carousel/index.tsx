'use client';

import { memo, useState, useEffect, useCallback} from "react";
import Image from 'next/image';
import styles from './styles.module.scss';
import cN from 'classnames';
import { I_banner } from "@/redux/interfaces";
import { handlepath } from "@/apisource/apiname";

interface I_props {
    data: I_banner[] | null;
    bannerClick?: Function;
    handleRevise?: Function;
}

function Carousel({data, handleRevise}: I_props) {
    const [focusBanner, setFocusBanner] = useState(0);
    const [trigger, setTrigger] = useState(false);
    const [timerId, setTimerId] = useState<NodeJS.Timeout>();

   const startTimer = useCallback(() => {
      if(!handleRevise) {
        const newTimerId = setInterval(() => {
          setTrigger(true);
        }, 10000);

        // 清除之前的计时器
        if (timerId !== null) {
            clearInterval(timerId);
        }

        setTimerId(newTimerId);
      }
    }, [timerId, handleRevise]);

    useEffect(() => {
      startTimer();

      return () => {
        if(timerId) clearInterval(timerId);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {
      setTrigger(false);
      if(trigger) setFocusBanner(pre=> pre+1 === data?.length ? 0 : pre+1);
    }, [trigger, data])

    return (
        <div className={styles.carousel}>
            <div className={styles.banners}>
            {
              data && data.map((info, ind) => {

                return (
                  <aside 
                    key={ind+1} 
                    className={cN({[styles.active]: focusBanner === ind}, {[styles.edit]: Boolean(handleRevise)})}
                    onClick={(e) => handleRevise && handleRevise(info, e)}
                  >
                    <Image src={`${handlepath() + info.image}`} alt={info.title} fill sizes="100%"/>
                    <div className={cN(styles.others, {[styles.active]: focusBanner === ind})}>
                      <div className={styles.content}>
                          <div>{info.title}</div>
                          <span>{info.subtitle}</span>
                      </div>
                    </div>
                    { handleRevise && handleRevise(info) }
                    <div className={styles.backer}/>
                  </aside>
                )
              })
            }
          </div>
          <div className={styles.dotting}>
            {
              data && data.map((_, ind) => {
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