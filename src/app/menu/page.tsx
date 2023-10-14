'use client';

import Default from '@/components/Default';
import styles from './styles.module.scss';
import MenuSrc from '../../image/下載.jpeg';
import { E_Page, I_dishes } from '@/redux/interfaces';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { E_Dish } from '@/redux/interfaces';
import { api_getDish, handlepath } from '@/apisource/apiname';

interface I_displayDish {
    [E_Dish.STEAK]?: Array<I_dishes>;
    [E_Dish.COFFEE]?: Array<I_dishes>;
    [E_Dish.PASTA]?: Array<I_dishes>;
    [E_Dish.BEVARAGE]?: Array<I_dishes>;
    [E_Dish.DESSERT]?: Array<I_dishes>;
}

export default function Menu() {
    const [currentType, setCurrentType] = useState<E_Dish>(E_Dish.STEAK);
    const [isLoading, setIsLoading] = useState(true);
    const [displayDishes, setDisplayDishes] = useState<I_displayDish>();

    useEffect(() => {
        const newSortArr: I_displayDish = {};

        setIsLoading(true);
        (async function() {
            const data = await api_getDish();

            data?.dishesinfo.forEach((dish, ind) => {
                if(!newSortArr[dish.type]) newSortArr[dish.type] = [dish];
                else newSortArr[dish.type] = [...newSortArr[dish.type]!, dish];
            });

            setDisplayDishes(newSortArr);
            setIsLoading(false);
        })()
    }, [])

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
                        return <li key={ind} onClick={() => setCurrentType(value)}>{value}</li>
                    })
                }
            </ul>
            <div className={styles.cuisine}>
                {
                    isLoading ? <div className={styles.loading}>loading.....</div>:
                        displayDishes && !displayDishes[currentType] ? <div className={styles.nodata}>目前尚無資料</div>:
                        displayDishes && displayDishes[currentType]!.map((food, ind) => {
                            return (
                                <aside key={ind}>
                                    <div className={styles.frame}>
                                        <Image src={`${handlepath()}${food.image}`} alt='food' fill sizes='100%'/>
                                    </div>
                                    <div className={styles.content}>
                                        <div>
                                            <span>{food.content}</span>
                                            <span className={styles.money}>NT$ {food.price}</span>
                                        </div>
                                    </div>
                                    <h2>{food.title}</h2>
                                </aside>
                            )
                        })
                }
            </div>
       </Default>
    )
}