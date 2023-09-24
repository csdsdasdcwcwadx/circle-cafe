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

const foodItems = [
    {imgSrc: SteakSrc, content: '123456', name: '好吃的東西'},
    {imgSrc: SteakSrc, content: '123456', name: '好吃的東西'},
    {imgSrc: SteakSrc, content: '123456', name: '好吃的東西'},
    {imgSrc: SteakSrc, content: '123456', name: '好吃的東西'},
    {imgSrc: SteakSrc, content: '123456', name: '好吃的東西'},
    {imgSrc: SteakSrc, content: '123456', name: '好吃的東西'},
    {imgSrc: SteakSrc, content: '123456', name: '好吃的東西'},
]

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
                {
                    foodItems.map((food, ind) => {
                        return (
                            <aside key={ind}>
                                <div className={styles.frame}>
                                    <Image src={food.imgSrc} alt='food' fill sizes='100%'/>
                                </div>
                                <h2>{food.name}</h2>
                                <span>{food.content}</span>
                            </aside>
                        )
                    })
                }
            </div>
       </Default>
    )
}