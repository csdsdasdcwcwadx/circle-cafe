import React, { memo, useEffect, useRef } from "react";
import styles from './styles.module.scss';
import Nums from "./Nums";

interface I_props {
    maxpage: number;
    serial: number;
    setSerial: Function;
    typeIn?: boolean;
}

let typingTimer: NodeJS.Timeout;

function PageNumber ({setSerial, maxpage, serial, typeIn}: I_props) {
    const page = useRef<HTMLInputElement>(null);

    return (
        <div className={styles.pages}>
            <div className={styles.pagenumber}>
                <Nums num={serial-2} click={setSerial} maxpage={maxpage} serial={serial}/>
                <Nums num={serial-1} click={setSerial} maxpage={maxpage} serial={serial}/>
                <Nums num={serial} click={setSerial} maxpage={maxpage} serial={serial}/>
                <Nums num={serial+1} click={setSerial} maxpage={maxpage} serial={serial}/>
                <Nums num={serial+2} click={setSerial} maxpage={maxpage} serial={serial}/>
                <div>......</div>
                <Nums num={maxpage} click={setSerial} maxpage={maxpage}/>
            </div>
            {
                typeIn && <div className={styles.inputbar}>
                    <input type="text" placeholder="頁碼" ref={page} onKeyUp={e=>{
                        clearTimeout(typingTimer);
                        if(e.code === "Enter") {
                            timerFunc();
                            return;
                        }
                        typingTimer = setTimeout(timerFunc, 1000)

                        function timerFunc() {
                            if(
                                !/^\d+$/.test(page.current?.value!) ||
                                parseInt(page.current?.value!) > maxpage || 
                                parseInt(page.current?.value!) <= 0
                            ) {
                                page.current!.value = '';
                                return;
                            }
                            setSerial(parseInt(page.current?.value!));
                            page.current!.value = '';
                        }
                    }}/>
                </div>
            }
        </div>
    )
}

export default memo(PageNumber);