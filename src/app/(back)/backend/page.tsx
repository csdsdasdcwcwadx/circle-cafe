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
import { POST_SET, GET_GETACTIVITIES } from "@/apisource/apiname";
import { I_GET_GETACTIVITIES, I_POST_SET_getter } from "@/apisource/apitype";
import { I_activities } from "@/redux/interfaces";

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
            const data = await getData();
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
                await postData(formData);
                setIsOpen(false);
                const data = await getData();
                setData(data?.activitiesinfo);

                if(title.current) title.current.value = '';
                if(content.current) content.current.value = '';
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
                        ref={title}
                    />
                    <InputBar
                        title="內文"
                        placeholder="請輸入內文"
                        type={E_RegexType.TEXTING}
                        maxlength={255}
                        ref={content}
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

async function postData(poster: FormData) {
    try {
        const response = await fetch(POST_SET, {
            method: "POST",
            body: poster,
        });
        const data: I_POST_SET_getter = await response.json();
        return data;
    } catch(e) {
        console.log(e);
    }
}

async function getData() {
    try {
        const response = await fetch(GET_GETACTIVITIES);
        const data: I_GET_GETACTIVITIES = await response.json();
        return data;
    }catch(e) {
        console.log(e);
    }
}