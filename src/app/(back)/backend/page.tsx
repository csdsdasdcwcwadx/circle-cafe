'use client';

import BackActivities from "@/components/BackActivities";
import { useCallback, useEffect, useReducer, useState } from "react";
import styles from './styles.module.scss';
import BackMenu from "@/components/BackMenu";
import cN from 'classnames';
import { api_login } from "@/apisource/apiname";
import Login from "@/components/Login";

enum E_Backend {
    ACTIVITIES = 'ACTIVITIES',
    MENU = 'MENU',
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
                        <ul>
                            {
                                Object.values<E_Backend>(E_Backend).map((value, ind) => {
                                    return <nav key={ind} className={cN({[styles.selected]: currBack === value})} onClick={() => {
                                        setCurrBack(value);
                                        if (typeof window !== 'undefined') {
                                            window.localStorage.setItem('currBackPage', value);
                                        }
                                    }}>{value}</nav>
                                })
                            }
                        </ul>
                        <div className={styles.page}>
                            {
                                currBack === E_Backend.ACTIVITIES ? <BackActivities/> :
                                currBack === E_Backend.MENU ? <BackMenu/> : ''
                            }
                        </div>
                    </>
            }
        </div>
    )
}
