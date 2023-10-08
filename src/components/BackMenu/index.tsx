'use client';

import { memo, useRef, useState } from "react";
import styles from './styles.module.scss';
import LightBox, { E_direction } from "../LightBox";
import InputBar, { E_RegexType } from "@/components/InputBar"
import { E_Dish } from "@/redux/interfaces";

function BackMennu() {
    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState<File>();

    const inputRefs = {
        title: useRef<HTMLInputElement>(null),
        price: useRef<HTMLInputElement>(null),
        content: useRef<HTMLInputElement>(null),
        type: useRef<HTMLSelectElement>(null),
    }

    const handleClick = async () => {
        const error = document.getElementsByClassName('error');
        if(error.length === 0) {
            const { title, price, content, type } = inputRefs;
            const formData = new FormData();

            try {
                const fileInput = document.querySelector<HTMLInputElement>('input[type="file"]');
                setIsOpen(false);

                const poster = {
                    title: title.current?.value,
                    price: price.current?.value,
                    content: content.current?.value,
                    type: type.current?.value,
                }
                console.log(poster)

                if(title.current) title.current.value = '';
                if(price.current) price.current.value = '';
                if(content.current) content.current.value = '';
                // if(type.current) type.current.value = '';

                if (fileInput) {
                    fileInput.value = ''; // 清空 file input 的值
                    setImage(undefined); // 將圖片設置為 undefined 或其他適當的初始值
                }
            }catch(e) {
                console.log(e);
            }
        } else alert(error[0].textContent);
    }

    return (
        <div className={styles.backmenu}>
            <button className={styles.addactivities} onClick={()=>setIsOpen(true)}>新增活動</button>

            <div className={styles.lightbox}>
                <LightBox
                    isOpen={isOpen}
                    handleDispatch={setIsOpen}
                    direction={E_direction.TOP}
                    theName={styles.regisblocker}
                >
                    <div className={styles.regisblocker}>
                        <InputBar
                            title="標題"
                            placeholder="請輸入標題"
                            type={E_RegexType.NAME}
                            maxlength={10}
                            ref={inputRefs.title}
                        />
                        <InputBar
                            title="金額"
                            placeholder="請輸入金額"
                            type={E_RegexType.NAME}
                            maxlength={10}
                            ref={inputRefs.price}
                        />
                        <div className={styles.selection}>
                            <span>菜單種類*</span>
                            <select placeholder="請選擇菜單種類" ref={inputRefs.type}>
                                {
                                    Object.values(E_Dish).map((obj, ind) => {
                                        return <option key={ind} value={obj}>{obj}</option>
                                    })
                                }
                            </select>
                        </div>
                        <InputBar
                            title="內文"
                            placeholder="請輸入內文"
                            type={E_RegexType.TEXTING}
                            maxlength={2048}
                            ref={inputRefs.content}
                        />
                        <input type="file" onChange={e => {
                            const file = e.target.files![0];
                            setImage(file);
                        }}/>
                        <button onClick={handleClick}>送出</button>
                    </div>
                </LightBox>
            </div>
        </div>
    )
}

export default memo(BackMennu);