'use client';

import { memo, Fragment, useState, useEffect, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "@/redux/actions";
import { E_Page } from "@/redux/interfaces";
import styles from './styles.module.scss';
import cN from 'classnames';
import Image, { StaticImageData } from "next/image";
import Footer from "../Footer";

interface I_props {
    children: ReactNode;
    currentPage: E_Page;
    imageSrc: StaticImageData | string;
    altContent: string;
    title: string;
    className: string;
    faded?: boolean;
}


function Default({ children, currentPage, imageSrc, altContent, title, className, faded }: I_props) {
    const dispatch = useDispatch();
    const [activate, setActivate] = useState(Boolean(!faded));

    useEffect(() => {
        dispatch(setPage(currentPage));
        setActivate(true);
    }, [dispatch, currentPage])

    return (
        <Fragment>
            <div className={cN(styles.default, {[styles.active]: activate}, className)}>
                <div className={styles.mainbanner}>
                    <Image src={imageSrc} alt={altContent} priority width={100} height={100} sizes="100%"/>
                </div>
                <main>
                    <h2>{title}</h2>
                    <span className={styles.deco}/>
                    <div>
                        {children}
                    </div>
                </main>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default memo(Default);