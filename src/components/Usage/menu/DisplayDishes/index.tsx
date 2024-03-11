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

function DisplayDishes({dishes}: I_props) {

    return (
        <>
        </>
    )
}

export default memo(DisplayDishes);