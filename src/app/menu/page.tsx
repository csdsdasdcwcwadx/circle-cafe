'use client';

import Default from '@/components/Default';
import styles from './styles.module.scss';
import MenuSrc from '../../image/下載.jpeg';
import { E_Page } from '@/redux/interfaces';
import Image from 'next/image';
import SteakSrc from '../../image/00-41.jpg';
import { useState } from 'react';

enum E_Dish {
    STEAK = '牛排',
    COFFEE  = '咖啡',
    PASTA = '義大利麵',
    BEVARAGE = '飲料',
    DESSERT = '甜點',
}

export default function Menu() {
    const [dish, setDish] = useState<E_Dish>(E_Dish.STEAK);

    return (
       <Default
            className={styles.menu}
            currentPage={E_Page.MENU}
            imageSrc={MenuSrc}
            altContent='menusrc'
            title='菜單詳情'
            faded
       >
            <ul className={styles.dishes}>
                {
                    Object.values<E_Dish>(E_Dish).map((value, ind) => {
                        return <li key={ind} onClick={() => setDish(value)}>{value}</li>
                    })
                }
            </ul>
            <div className={styles.cuisine}>
                <aside>
                    <Image src={SteakSrc} alt='food'/>
                </aside>
                <aside>
                    <Image src={SteakSrc} alt='food'/>
                </aside>
                <aside>
                    <Image src={SteakSrc} alt='food'/>
                </aside>
                <aside>
                    <Image src={SteakSrc} alt='food'/>
                </aside>
            </div>
       </Default>
    )
}