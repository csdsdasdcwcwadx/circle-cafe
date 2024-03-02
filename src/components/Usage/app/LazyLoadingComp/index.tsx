'use client';

import { ReactNode, memo, useState, useEffect, useRef, useCallback } from "react";
import styles from './styles.module.scss';
import cN from 'classnames';

interface I_props {
    children: ReactNode
}

function LazyLoadingComp({children}: I_props) {
    const [loaded, setLoaded] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);
    // const handleScroll = useCallback(() => {
    //     if (componentRef && componentRef.current &&  window.scrollY-300 >= componentRef.current.offsetTop) {
    //         setLoaded(true);
    //     }
    //   }, [])

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

        return () => {
            observer.disconnect();
        };
    }, []);
  
    return (
        <div ref={componentRef} className={cN(styles.lazyloading, {[styles.show]: loaded})}>
            {loaded ? <>{children}</> : <div>Loading...</div>}
        </div>
    );
}

export default memo(LazyLoadingComp);

