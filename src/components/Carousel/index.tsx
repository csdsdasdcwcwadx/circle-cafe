import { memo, useState, useEffect, useMemo} from "react";
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
    const [openContent, setOpenContent] = useState(false);
    const [lastToFirst, setLastToFirst] = useState(false);
    const newSlider = useMemo(()=>{
      return [...data, data[0]];
    }, [data]);

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
      if(trigger && !openContent) setFocusBanner(pre=>{
        if(pre+1 === newSlider.length-1) {
          setTimeout(() => {
            setLastToFirst(true);
          },1000)
          return pre+1;
        };
        return pre+1;
      });
    }, [trigger, data, openContent, newSlider])

    useEffect(() => {
      if(lastToFirst && !openContent) {
        setFocusBanner(0);
        setTimeout(() => {
          setLastToFirst(false);
        }, 2000)
        setTimeout(() => {
          setFocusBanner(1);
        }, 9000)
      }
    }, [lastToFirst, openContent])

    return (
        <div className={styles.carousel}>
            <div className={styles.banners}>
            {
              newSlider.map((info, ind) => {
                return (
                  <aside key={ind+1} style={{
                    marginLeft: `calc(${100*ind}%  - ${100*focusBanner}%)`,
                    transition: lastToFirst? 'none': 'all 1s ease-in-out',
                  }} className={cN({[styles.active]: focusBanner === ind})}>
                    <Image src={info.src} alt={info.alt} fill sizes="100%"/>
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
                return <i key={ind} className={cN({[styles.active]: (ind === 0 && data.length === focusBanner) || focusBanner === ind})} onClick={() => {
                  !openContent && setFocusBanner(ind);
                }}/>
              })
            }
          </div>
        </div>
    )
}

export default memo(Carousel);