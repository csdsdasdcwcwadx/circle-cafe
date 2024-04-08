import { memo, Fragment, ReactNode } from "react";
import Setter from "./setter";
import { E_Page } from "@/redux/interfaces";
import styles from './styles.module.scss';
import cN from 'classnames';
import Image, { StaticImageData } from "next/image";
import Footer from "../Footer";
import decoSrc from "@/image/illustration/13-removebg-preview_0.png";

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

    return (
        <Fragment>
            <div className={cN(styles.default, {[styles.active]: faded}, className)}>
                <div className={styles.mainbanner}>
                    <Image src={imageSrc} alt={altContent} priority width={100} height={100} sizes="100%"/>
                </div>
                <main>
                    <h2>{title}</h2>
                    <div className={styles.bottom}>
                        <span className={styles.deco}>
                            <Image src={decoSrc} alt="decoration" sizes="100%" fill/>
                        </span>
                    </div>
                    <div className={styles.contents}>
                        {children}
                    </div>
                </main>
            </div>
            <Footer/>
            <Setter currentPage={currentPage}/>
        </Fragment>
    )
}

export default memo(Default);