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
    imageSrc: StaticImageData;
    altContent: string;
    title: string;
    className: string;
}


function Default({ children, currentPage, imageSrc, altContent, title, className }: I_props) {
    const dispatch = useDispatch();
    const [activate, setActivate] = useState(false);

    useEffect(() => {
        dispatch(setPage(currentPage));
        setActivate(true);
    }, [dispatch, currentPage])

    return (
        <Fragment>
            <div className={cN(styles.default, {[styles.active]: activate}, className)}>
                <div className={styles.mainbanner}>
                    <Image src={imageSrc} alt={altContent} priority/>
                </div>
                <main>
                    <h2>{title}</h2>
                    <span className={styles.deco}/>
                    {children}
                </main>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default memo(Default);