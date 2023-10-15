'use client';

import styles from './styles.module.scss';
import { I_dishes } from '@/redux/interfaces';
import Image from 'next/image';
import { memo, useEffect, useState } from 'react';
import { E_Dish } from '@/redux/interfaces';
import { handlepath } from '@/apisource/apiname';
import { I_GET_DISHES_GETTER } from '@/apisource/apitype';

interface I_props {
    dishes: I_GET_DISHES_GETTER | undefined
}

interface I_displayDish {
    [E_Dish.STEAK]?: Array<I_dishes>;
    [E_Dish.COFFEE]?: Array<I_dishes>;
    [E_Dish.PASTA]?: Array<I_dishes>;
    [E_Dish.BEVARAGE]?: Array<I_dishes>;
    [E_Dish.DESSERT]?: Array<I_dishes>;
}

function DisplayDishes({dishes}: I_props) {
    const [currentType, setCurrentType] = useState<E_Dish>(E_Dish.STEAK);
    const [displayDishes, setDisplayDishes] = useState<I_displayDish>();

    useEffect(() => {
        const newSortArr: I_displayDish = {};

        dishes?.dishesinfo.forEach((dish, ind) => {
            if(!newSortArr[dish.type]) newSortArr[dish.type] = [dish];
            else newSortArr[dish.type] = [...newSortArr[dish.type]!, dish];
        });

        setDisplayDishes(newSortArr);
    }, [dishes])

    return (
        <>
            <ul className={styles.dishes}>
                {
                    Object.values<E_Dish>(E_Dish).map((value, ind) => {
                        return <li key={ind} onClick={() => setCurrentType(value)}>{value}</li>
                    })
                }
            </ul>
            <div className={styles.cuisine}>
                {
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
                                    <h2 className={styles.foodtitle}>{food.title}</h2>
                                </aside>
                            )
                        })
                }
            </div>
        </>
    )
}

export default memo(DisplayDishes);