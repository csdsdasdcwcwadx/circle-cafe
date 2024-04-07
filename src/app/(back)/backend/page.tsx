'use client';

import BackActivities from "@/components/Usage/back/BackActivities";
import { useCallback, useEffect, useState } from "react";
import styles from './styles.module.scss';
import BackMenu from "@/components/Usage/back/BackMenu";
import cN from 'classnames';
import { api_login } from "@/apisource/apiname";
import Login from "@/components/Usage/back/Login";
import BackBanner from "@/components/Usage/back/BackBanner";

enum E_Backend {
    BANNER = 'BANNER',
    ACTIVITIES = 'ACTIVITIES',
    MENU = 'MENU',
    DATA = 'DATA',
}

declare const window: Window;

export default function Backend() {
    const [currBack, setCurrBack] = useState<E_Backend>(E_Backend.ACTIVITIES);
    const [isLogin, setIsLogin] = useState(false);

    const handleLogin = useCallback(async (account?: string, password?: string) => {
        try {
            const data = await api_login(account, password);

            if(data) {
                const {status, message, accessToken} = data;
                if(status) {
                    setIsLogin(true);
    
                    if(accessToken) {
                        window.localStorage.setItem('accessToken', accessToken);
                    }
                    // location.reload();
                } else alert(message);
            }
        }catch(e) {
            console.log(e);
        }
    }, [])

    useEffect(() => {
        const currBackPage = window.localStorage.getItem('currBackPage');
        if(currBackPage) {
            setCurrBack(currBackPage as E_Backend);
        }
    }, [])

    return (
        <div className={styles.backend}>
            {
                !isLogin ? <Login isLogin={isLogin} setIsLogin={setIsLogin} handleLogin={handleLogin}/>:
                    <>
                        <div className={styles.block}></div>
                        <ul className={styles.header}>
                            <div className={styles.lefter}>
                                {
                                    Object.values<E_Backend>(E_Backend).map((value, ind) => {
                                        return <nav key={ind} className={cN({[styles.selected]: currBack === value})} onClick={() => {
                                            setCurrBack(value);
                                            if (typeof window !== 'undefined') {
                                                window.localStorage.setItem('currBackPage', value);
                                            }
                                        }}><span>{value}</span></nav>
                                    })
                                }
                            </div>
                        </ul>
                        <div className={styles.page}>
                            {
                                currBack === E_Backend.ACTIVITIES ? <BackActivities/> :
                                currBack === E_Backend.MENU ? <BackMenu/> :
                                currBack === E_Backend.BANNER ? <BackBanner/> : ''
                            }
                        </div>
                    </>
            }
        </div>
    )
}
