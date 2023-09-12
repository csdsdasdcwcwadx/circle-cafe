import { memo, useState, useEffect, ReactNode } from "react";
import Image, { StaticImageData } from 'next/image';
import styles from './stylles.module.scss';
import cN from 'classnames';

interface I_props {
    data: Array<{
        src: StaticImageData;
        alt: string;
        title: string;
        content: string;
    }>
    children: any;
}

function Carousel({data, children}: I_props) {
    const [focusBanner, setFocusBanner] = useState(0);
    const [trigger, setTrigger] = useState(false);
    const [openContent, setOpenContent] = useState(false);

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
      if(trigger && !openContent) setFocusBanner(pre=>pre+1 === data.length ? 0 : pre+1);
    }, [trigger, data, openContent])

    return (
        <div className={styles.carousel}>
            <div className={styles.banners}>
            {
              data.map((info, ind) => {
                return (
                  <aside key={ind+1} style={{
                    marginLeft: `calc(${100*ind}%  - ${100*focusBanner}%)`
                  }} className={cN({[styles.active]: focusBanner === ind})}>
                    <Image src={info.src} alt={info.alt} fill sizes=""/>
                    <span className={cN({[styles.close]: openContent})} onClick={() => setOpenContent(pre=>!pre)}></span>
                    <div className={styles.others}>
                      <div>{info.title}</div>
                      <span>{info.content}</span>
                    </div>
                    <div className={cN(styles.content, {[styles.activeContent]: openContent})}>
                      <div>{info.title}</div>
                      <span>{info.content}</span>
                    </div>
                  </aside>
                )
              })
            }
          </div>
          <div className={styles.dotting}>
            {
              data.map((_, ind) => {
                return <i key={ind} className={cN({[styles.active]: focusBanner === ind})} onClick={() => {
                  !openContent && setFocusBanner(ind);
                }}/>
              })
            }
          </div>
        </div>
    )
}

export default memo(Carousel);