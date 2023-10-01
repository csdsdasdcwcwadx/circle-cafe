'use client';

import { setPage } from "@/redux/actions";
import { E_Page } from "@/redux/interfaces";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from './styles.module.scss';
import InputBar from "@/components/InputBar";
import { E_RegexType } from "@/components/InputBar";
import axios from 'axios';
import Image from "next/image";

export default function Backend() {
    const dispatch = useDispatch();
    const [image, setImage] = useState<File>();
    const [data, setData] = useState<any>();

    useEffect(() => {
        dispatch(setPage(E_Page.BACKEND));
    },[dispatch])

    const handleClick = async () => {
        const formData = new FormData();
        formData.append('title', '標題標題');
        formData.append('content', '內文內文內文內文');
        formData.append('image', image!);
        const data = await postData(formData);
        console.log(data);
    }

    const handlePost = async () => {
        const data = await getData();
        console.log(data.activitiesinfo)
        setData(data.activitiesinfo);
    }

    return (
        <div className={styles.backend}>
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
            <button onClick={handlePost}>取得</button>
            {
                data && data.map((obj: any, ind: number) => {
                    return <Image key={ind} src={`/local${obj.image}`} alt={obj.title} width={300} height={300}/>
                })
            }
        </div>
    )
}

async function postData(poster: any) {
    const {data} = await axios.post('/local/activities/set', poster, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return data;
}

async function getData() {
    const {data} = await axios.get('/local/activities/getActivities');
    return data;
}