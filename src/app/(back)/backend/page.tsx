'use client';

import { setPage } from "@/redux/actions";
import { E_Page } from "@/redux/interfaces";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styles from './styles.module.scss';
import InputBar from "@/components/InputBar";
import { E_RegexType } from "@/components/InputBar";
import Image from "next/image";
import LightBox, { E_direction } from "@/components/LightBox";
import { handlepath } from "@/apisource/apiname";
import { I_activities } from "@/redux/interfaces";
import { handleDate } from "@/utils";
import { api_getData, api_postData } from "@/apisource/apiname";

export default function Backend() {
    const dispatch = useDispatch();
    const [image, setImage] = useState<File>();
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState<Array<I_activities>|undefined>();
    const title = useRef<HTMLInputElement>(null);
    const content = useRef<HTMLInputElement>(null);

    useEffect(() => {
        dispatch(setPage(E_Page.BACKEND));
    },[dispatch])

    useEffect(() => {
        (async function() {
            const data = await api_getData();
            setData(data?.activitiesinfo);
        })()
    }, [])

    const handleClick = async () => {
        const error = document.getElementsByClassName('error');
        if(error.length === 0) {
            const formData = new FormData();
            formData.append('title', title.current?.value!);
            formData.append('content', content.current?.value!);
            formData.append('image', image!);
            try {
                await api_postData(formData);
                setIsOpen(false);
                const data = await api_getData();
                setData(data?.activitiesinfo);

                if(title.current) title.current.value = '';
                if(content.current) content.current.value = '';

                const fileInput = document.querySelector<HTMLInputElement>('input[type="file"]');
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
        <div className={styles.backend}>
            <button className={styles.addactivities} onClick={()=>setIsOpen(true)}>新增活動</button>
            <div className={styles.display}>
                {
                    data && data.map((obj, ind: number) => {
                        return (
                            <aside key={ind}>
                                <div className={styles.frame}>
                                    <Image src={`${handlepath()}${obj.image}`} alt={obj.title} width={300} height={300}/>
                                </div>
                                <div className={styles.contents}>
                                    <h3>{obj.title}</h3>
                                    <span className={styles.content}>
                                        {obj.content}
                                    </span>
                                    <div className={styles.date}>
                                        上傳時間: 
                                        <span>{handleDate(obj.date)}</span>
                                        <span>{handleDate(obj.date, true)}</span>
                                    </div>
                                </div>
                            </aside>
                        )
                    })
                }
            </div>
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
                            ref={title}
                        />
                        <InputBar
                            title="內文"
                            placeholder="請輸入內文"
                            type={E_RegexType.TEXTING}
                            maxlength={2048}
                            ref={content}
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
