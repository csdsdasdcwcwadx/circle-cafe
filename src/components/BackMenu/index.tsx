'use client';

import { memo, useEffect, useRef, useState } from "react";
import styles from './styles.module.scss';
import LightBox, { E_direction } from "../LightBox";
import InputBar, { E_RegexType } from "@/components/InputBar"
import { E_Dish, I_dishes } from "@/redux/interfaces";
import { api_deleteDishes, api_dishPost, api_getDish, handlepath } from "@/apisource/apiname";
import Image from "next/image";
import Loading from "@/app/loading";
import { handleDate } from "@/utils";

function BackMennu() {
    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState<File>();
    const [dishData, setDishData] = useState<Array<I_dishes>|undefined>();
    const [currentType, setCurrentType] = useState<E_Dish>(E_Dish.STEAK);

    const inputRefs = {
        title: useRef<HTMLInputElement>(null),
        price: useRef<HTMLInputElement>(null),
        content: useRef<HTMLInputElement>(null),
        type: useRef<HTMLSelectElement>(null),
    }

    const handlePost = async () => {
        const error = document.getElementsByClassName('error');
        if(error.length === 0) {
            const { title, price, content, type } = inputRefs;
            const formData = new FormData();
            formData.append('title', title.current?.value!);
            formData.append('content', content.current?.value!);
            formData.append('price', price.current?.value!);
            formData.append('type', type.current?.value!);
            formData.append('image', image!);

            try {
                const fileInput = document.querySelector<HTMLInputElement>('input[type="file"]');
                await api_dishPost(formData);
                setIsOpen(false);
                setCurrentType(type.current?.value! as E_Dish);

                if(title.current) title.current.value = '';
                if(price.current) price.current.value = '';
                if(content.current) content.current.value = '';

                if (fileInput) {
                    fileInput.value = ''; // 清空 file input 的值
                    setImage(undefined); // 將圖片設置為 undefined 或其他適當的初始值
                }
            }catch(e) {
                console.log(e);
            }
        } else alert(error[0].textContent);
    }

    const handleDelete = async (id: string) => {
        if(confirm('確定要刪除此菜色 ? ')) {
            try {
                const data = await api_deleteDishes(id);
                alert(data?.message);
                location.reload();
                
            }catch(e) {
                console.log(e);
            }
        }
    }

    useEffect(() => {
        (async function() {
            const data = await api_getDish(currentType);
            setDishData(data?.dishesinfo);
        })()
    }, [currentType])

    return (
        <div className={styles.backmenu}>
            <button className={styles.addactivities} onClick={()=>setIsOpen(true)}>新增菜色</button>
            <ul className={styles.buttons}>
                {
                    Object.values<E_Dish>(E_Dish).map((value, ind) => {
                        return <button key={ind} onClick={() => setCurrentType(value)}>{value}</button>
                    })
                }
            </ul>
            <div className={styles.displays}>
                {
                    dishData ? dishData.map((obj, ind) => {
                        return (
                            <aside key={ind}>
                                <div className={styles.frame}>
                                    <Image src={`${handlepath()}${obj.image}`} alt={obj.title} width={300} height={300}/>
                                </div>
                                <div className={styles.contents}>
                                    <div className={styles.topline}>
                                        <h3>{obj.title}</h3>
                                        <div>{obj.content}</div>
                                    </div>
                                    <div className={styles.bottomline}>
                                        <div className={styles.price}>NT$ {obj.price}</div>
                                        <div className={styles.type}>{obj.type}</div>
                                    </div>
                                  <div className={styles.date}>
                                        上傳時間: 
                                        <span>{handleDate(obj.date)}</span>
                                        <span>{handleDate(obj.date, true)}</span>
                                        <button onClick={() => handleDelete(obj.id)}>刪除</button>
                                    </div>
                                </div>
                            </aside>
                        )
                    }) : <Loading/>
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
                            ref={inputRefs.title}
                        />
                        <InputBar
                            title="金額"
                            placeholder="請輸入金額"
                            type={E_RegexType.NUMBER}
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
                        <button onClick={handlePost}>送出</button>
                    </div>
                </LightBox>
            </div>
        </div>
    )
}

export default memo(BackMennu);