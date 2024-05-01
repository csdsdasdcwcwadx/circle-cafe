'use client';

import Default from '@/components/Common/Default';
import styles from './styles.module.scss';
import coverSrc from '@/image/temp/拾旅食 (23).jpg';
import { E_Page } from '@/redux/interfaces';
import { api_getDish } from '@/apisource/apiname';
import Image from 'next/image';
import { handlepath } from '@/apisource/apiname';
import { useEffect, useState } from 'react';
import { I_GET_DISHES_GETTER } from '@/apisource/apitype';
import cN from 'classnames';
import bookSrc from '@/icons/book2.png';

// 書的png
// 頁面(左)
// 頁面(右)
// 翻頁(左)
// 翻頁(右)

export default function Menu() {
    const [dishes, setDishes] = useState<I_GET_DISHES_GETTER | null>();
    const [active, setActive] = useState(false);
    const [preActive, setPreActive] = useState(false);
    const [trigger, setTrigger] = useState(0);

     useEffect(() => {
          (async function() {
               const data = await api_getDish();
               setDishes(data);
          })()
     }, [])

    return (
       <Default
            className={styles.menu}
            currentPage={E_Page.MENU}
            imageSrc={coverSrc}
            altContent='menusrc'
            title='菜單詳情'
          //   faded
       >
          <div className={styles.worddisplay}>
               美味佳餚美味佳餚美味佳餚美味佳餚美味佳餚美味佳餚美味佳餚美味佳餚美味佳餚美味佳餚美味佳餚美味佳餚美味佳餚
          </div>
          <div className={styles.displays}>
               <div className={styles.book}>
                    <Image src={bookSrc} alt='book' sizes='100%' fill/>
               </div>
               <div className={styles.menudisplay}>
                    {
                         dishes?.dishesinfo.map((dish, ind) => {
                              return (
                                   <aside 
                                        key={ind} 
                                        className={cN(
                                             {[styles.flip]: ind === trigger && active}, 
                                             {[styles.pre]: ind === trigger && preActive}, 
                                             {[styles.next]: ind === trigger + 1}, 
                                             {[styles.back]: ind > trigger}, 
                                             {[styles.front]: ind < trigger}
                                        )}
                                   >
                                        <div className={styles.contents}>
                                             <div>
                                                  <div>{dish.title}</div>
                                                  <span>{dish.subtitle}</span>
                                             </div>
                                        </div>
                                        <div className={cN(styles.frame)} data-num={dishes?.dishesinfo.length - ind}>
                                             <Image src={`${handlepath()}${dish.image}`} alt={`${dish.title}`} fill sizes='100%'/>
                                        </div>
                                   </aside>
                              )
                         })
                    }
               </div>
          </div>
          <button onClick={() => {
               if(trigger) {
                    setPreActive(true);
                    setTrigger(pre => pre - 1);
                    setActive(true);
                    setTimeout(() => {
                         setActive(false);
                    }, 400)
                    setTimeout(() => {
                         setPreActive(false);
                    }, 2000)
               }
          }}>往前</button>
          <button onClick={() => {
               if(trigger < dishes?.dishesinfo.length! - 1) {
                    setActive(true);
                    setTimeout(() => {
                         setActive(false);
                         setTrigger(pre => pre + 1);
                    }, 2000)
               }
          }}>往後</button>
       </Default>
    )
}