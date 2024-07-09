'use client';

import { ReactNode, memo, useState, useEffect, useRef } from "react";
import styles from './styles.module.scss';
import cN from 'classnames';

interface I_props {
    children: ReactNode;
}

function LazyLoadingComp({children}: I_props) {
    const [loaded, setLoaded] = useState(false);
    const [preAnimate, setPreAnimate] = useState(true);
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setLoaded(true);
                }
            });
        });

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        const timer = setTimeout(() => {
            setPreAnimate(false);
        }, 2000)

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);
  
    return (
        <div ref={componentRef} className={cN(styles.lazyloading, {[styles.show]: loaded}, {[styles.hide]: preAnimate})}>
            {children}
        </div>
    );
}

export default memo(LazyLoadingComp);

