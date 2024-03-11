import Default from '@/components/Common/Default';
import styles from './styles.module.scss';
import MenuSrc from '../../image/下載.jpeg';
import { E_Page, I_dishes } from '@/redux/interfaces';
import Image from 'next/image';
import { E_Dish } from '@/redux/interfaces';
import { api_getDish, handlepath } from '@/apisource/apiname';
import DisplayDishes from '@/components/Usage/menu/DisplayDishes';
import cN from 'classnames';

export default async function Menu() {

    // const dishes = await api_getDish(undefined, true);

    return (
       <Default
            className={styles.menu}
            currentPage={E_Page.MENU}
            imageSrc={MenuSrc}
            altContent='menusrc'
            title='菜單詳情'
            faded
       >
            <div>123</div>
       </Default>
    )
}