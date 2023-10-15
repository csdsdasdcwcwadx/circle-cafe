import Default from '@/components/Common/Default';
import styles from './styles.module.scss';
import MenuSrc from '../../image/下載.jpeg';
import { E_Page, I_dishes } from '@/redux/interfaces';
import Image from 'next/image';
import { E_Dish } from '@/redux/interfaces';
import { api_getDish, handlepath } from '@/apisource/apiname';
import DisplayDishes from '@/components/Usage/menu/DisplayDishes';

export default async function Menu() {

    const dishes = await api_getDish(undefined, true);

    return (
       <Default
            className={styles.menu}
            currentPage={E_Page.MENU}
            imageSrc={MenuSrc}
            altContent='menusrc'
            title='菜單詳情'
            faded
       >
            <div className={styles.serverRender}>
                <ul className={styles.dishes}>
                    {
                        Object.values<E_Dish>(E_Dish).map((value, ind) => {
                            return <li key={ind}>{value}</li>
                        })
                    }
                </ul>
                <div className={styles.cuisine}>
                    <div className={styles.serverRender}>
                        {
                            dishes && dishes.dishesinfo.map((dish: any, ind: number) => {
                                return (
                                    <aside key={ind}>
                                        <div>
                                            <Image src={`${handlepath()}${dish.image}`} alt='dish' fill sizes='100%'/>
                                        </div>
                                        <div>
                                            <div>
                                                <span>{dish.content}</span>
                                                <span>NT$ {dish.price}</span>
                                            </div>
                                        </div>
                                        <h2>{dish.title}</h2>
                                    </aside>
                                )
                            })
                        }
                    </div>                    
                </div>
            </div>
            <DisplayDishes dishes={dishes}/>
       </Default>
    )
}