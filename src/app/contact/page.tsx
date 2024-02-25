'use client';

import styles from './styles.module.scss';
import steakSrc from '../../image/20210819234553_73.jpg';
import Default from '@/components/Common/Default';
import { E_Page } from '@/redux/interfaces';
import InputBar, { E_RegexType } from '@/components/Modules/InputBar';
import { useRef } from 'react';

export default function Contact() {
    const cusName = useRef<HTMLInputElement>(null);
    const cusPhone = useRef<HTMLInputElement>(null);
    const cusEmail = useRef<HTMLInputElement>(null);
    const cusInfo = useRef<HTMLTextAreaElement>(null);

    const handleClick = async () => {
        const error = document.getElementsByClassName('error');
        if(error.length === 0) {
            const sendData = {
                name: cusName.current?.value,
                phone: cusPhone.current?.value,
                email: cusEmail.current?.value,
                info: cusInfo.current?.value,
            }

            console.log("@@@", sendData);
        } else alert(error[0].textContent);
    }
    
    return (
        <Default
            altContent='contactsrc'
            className={styles.contact}
            imageSrc={steakSrc}
            title='聯絡我們'
            currentPage={E_Page.CONTACT}
        >
            <div className={styles.inputarea}>
                <div className={styles.firstline}>
                    <InputBar
                        title='顧客姓名'
                        placeholder='請輸入姓名'
                        type={E_RegexType.NAME}
                        maxlength={10}
                        ref={cusName}
                        className={styles.inputblock}
                    />
                    <InputBar
                        title='顧客電話'
                        placeholder='請輸入電話號碼'
                        type={E_RegexType.PHONE}
                        maxlength={10}
                        ref={cusPhone}
                        className={styles.inputblock}
                    />
                </div>
                <InputBar
                    title='電子信箱'
                    placeholder='請輸入電子信箱'
                    type={E_RegexType.EMAIL}
                    maxlength={100}
                    ref={cusEmail}
                    className={styles.inputblock}
                />
                <div className={styles.thirdline}>
                    <InputBar
                        title='聯絡說明'
                        placeholder='請輸入需求說明(最大字數限制255)'
                        type={E_RegexType.TEXTING}
                        maxlength={255}
                        ref={cusInfo}
                        className={styles.inputblock}
                    />
                </div>
            </div>
            <button onClick={handleClick}>送出表單</button>
        </Default>
    )
}