'use client';

import Default from '@/components/Default';
import styles from './styles.module.scss';
import MenuSrc from '../../image/下載.jpeg';
import { E_Page, I_dishes } from '@/redux/interfaces';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { E_Dish } from '@/redux/interfaces';
import { api_getDish, handlepath } from '@/apisource/apiname';

export default function Menu() {
    const [currentType, setCurrentType] = useState<E_Dish>(E_Dish.STEAK);
    const [dishes, setDishes] = useState<Array<I_dishes>|undefined>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        (async function() {
            const data = await api_getDish(currentType);
            setDishes(data?.dishesinfo);
            setIsLoading(false);
        })()
    }, [currentType])

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
                        dishes && !dishes.length ? <div className={styles.nodata}>目前尚無資料</div>:
                        dishes && dishes.map((food, ind) => {
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