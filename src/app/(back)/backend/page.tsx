'use client';

import { setPage } from "@/redux/actions";
import { E_Page } from "@/redux/interfaces";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from './styles.module.scss';
import InputBar from "@/components/InputBar";
import { E_RegexType } from "@/components/InputBar";
import Image from "next/image";
import LightBox, { E_direction } from "@/components/LightBox";

export default function Backend() {
    const dispatch = useDispatch();
    const [image, setImage] = useState<File>();
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState<any>();

    useEffect(() => {
        dispatch(setPage(E_Page.BACKEND));
    },[dispatch])

    useEffect(() => {
        (async function() {
            const data = await getData();
            setData(data.activitiesinfo);
        })()
    }, [])

    const handleClick = async () => {
        const formData = new FormData();
        formData.append('title', '標題標題');
        formData.append('content', '內文內文內文內文');
        formData.append('image', image!);
        try {
            await postData(formData);
            setIsOpen(false);
            const data = await getData();
            setData(data.activitiesinfo);
        }catch(e) {
            console.log(e);
        }
    }

    return (
        <div className={styles.backend}>
            <button className={styles.addactivities} onClick={()=>setIsOpen(true)}>新增活動</button>
            <div className={styles.display}>
                {
                    data && data.map((obj: any, ind: number) => {
                        return (
                            <aside key={ind}>
                                <div className={styles.frame}>
                                    <Image src={`/local${obj.image}`} alt={obj.title} width={300} height={300}/>
                                </div>
                                <div className={styles.contents}>
                                    <h3>{obj.title}</h3>
                                    <span>
                                        {obj.content}
                                    </span>
                                </div>
                            </aside>
                        )
                    })
                }
            </div>
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
                    />
                    <InputBar
                        title="內文"
                        placeholder="請輸入內文"
                        type={E_RegexType.TEXTING}
                        maxlength={255}
                    />
                    <input type="file" onChange={e => {
                        const file = e.target.files![0];
                        setImage(file);
                    }}/>
                    <button onClick={handleClick}>點我</button>
                </div>
            </LightBox>
        </div>
    )
}

async function postData(poster: any) {
    try {
        const response = await fetch('/local/activities/set', {
            method: "POST",
            body: poster,
        });
        return response.json();
    } catch(e) {
        console.log(e);
    }
}

async function getData() {
    try {
        const response = await fetch('/local/activities/getActivities');
        return response.json();
    }catch(e) {
        console.log(e);
    }
}