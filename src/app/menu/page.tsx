import Default from '@/components/Common/Default';
import styles from './styles.module.scss';
import coverSrc from '@/image/temp/拾旅食 (23).jpg';
import { E_Page } from '@/redux/interfaces';
// import Image from 'next/image';
// import { handlepath } from '@/apisource/apiname';
// import DisplayDishes from '@/components/Usage/menu/DisplayDishes';
// import cN from 'classnames';

export default async function Menu() {

    // const dishes = await api_getDish(undefined, true);

    return (
       <Default
            className={styles.menu}
            currentPage={E_Page.MENU}
            imageSrc={coverSrc}
            altContent='menusrc'
            title='菜單詳情'
            faded
       >
            <div>123</div>
       </Default>
    )
}