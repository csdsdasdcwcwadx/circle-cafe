import Default from '@/components/Common/Default';
import styles from './styles.module.scss';
import coverSrc from '@/image/temp/拾旅食 (23).jpg';
import { E_Page } from '@/redux/interfaces';
import { api_getDish } from '@/apisource/apiname';
import Image from 'next/image';
import { handlepath } from '@/apisource/apiname';
// import DisplayDishes from '@/components/Usage/menu/DisplayDishes';
// import cN from 'classnames';

export default async function Menu() {
    const dishes = await api_getDish(true);

    return (
       <Default
            className={styles.menu}
            currentPage={E_Page.MENU}
            imageSrc={coverSrc}
            altContent='menusrc'
            title='菜單詳情'
            faded
       >
          <div className={styles.worddisplay}>
               美味佳餚美味佳餚美味佳餚美味佳餚美味佳餚美味佳餚美味佳餚美味佳餚美味佳餚美味佳餚美味佳餚美味佳餚美味佳餚
          </div>
          {
               dishes?.dishesinfo.map((dish, ind) => {
                    return (
                         <aside key={ind}>
                              <div className={styles.frame}>
                                   <Image src={`${handlepath()}${dish.image}`} alt={`${dish.title}`} fill sizes='100%'/>
                              </div>
                         </aside>
                    )
               })
          }
       </Default>
    )
}