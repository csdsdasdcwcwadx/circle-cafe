'use client';

import { memo, useEffect, useRef, useState, ChangeEvent } from "react";
import styles from './styles.module.scss';
import LightBox, { E_direction } from "../../../Modules/LightBox";
import InputBar, { E_RegexType } from "@/components/Modules/InputBar"
import { api_deleteDishes, api_dishPost, api_dishUpdate, api_getDish, handlepath } from "@/apisource/apiname";
import { I_dishes, Dishes_Key } from "@/redux/interfaces";
import Columnar from "../Columnar";
import InputFile from "@/components/Common/InputFile";

function BackMennu() {
    const [isOpen, setIsOpen] = useState(false);

    const [image, setImage] = useState<File>();
    const [dishData, setDishData] = useState<I_dishes[]|null>(null);
    const [editor, setEditor] = useState<I_dishes|null>(null);
    const [getapi, setGetApi] = useState(true);

    const title = useRef<HTMLInputElement>(null);
    const subtitle = useRef<HTMLInputElement>(null);
    const dind = useRef<HTMLInputElement>(null);

    const clearInput = () => {
        if(title.current) title.current.value = '';
        if(subtitle.current) subtitle.current.value = '';
        if(dind.current) dind.current.value = ''; 
    }

    const handlePost = async () => {
        const error = document.getElementsByClassName('error');
        if(error.length === 0) {
            const formData = new FormData();
            formData.append('title', title.current?.value!);
            formData.append('subtitle', subtitle.current?.value!);
            formData.append('dind', dind.current?.value!);
            formData.append('image', image!);
            if(editor) {
                editor.image && formData.append('oldimg', editor.image);
                formData.append('id', editor.id);
            }

            try {
                const fileInput = document.querySelector<HTMLInputElement>('input[type="file"]');
                const result = editor ? await api_dishUpdate(formData) : await api_dishPost(formData);

                if(result?.status) {
                    setGetApi(true);
                    setIsOpen(false);
                } else alert(result?.message);

                if (fileInput) {
                    fileInput.value = ''; // 清空 file input 的值
                    setImage(undefined); // 將圖片設置為 undefined 或其他適當的初始值
                }
            }catch(e) {
                console.log(e);
            }
        } else alert(error[0].textContent);
    }

    const handleDelete = async (menu: I_dishes) => {
        if(confirm('確定要刪除此菜單 ? ')) {
            try {
                const data = await api_deleteDishes(menu.id);
                alert(data?.message);
                if(data?.status) setGetApi(true);
            }catch(e) {
                console.log(e);
            }
        }
    }

    const handleEdit = (menu: I_dishes) => {
        setEditor(menu);
        setIsOpen(true);

        if(title.current) title.current.value = menu.title;
        if(subtitle.current) subtitle.current.value = menu.subtitle;
        if(dind.current) dind.current.value = menu.dind + ''; 
    }

    useEffect(() => {
        if(!isOpen) {
            clearInput();
            setEditor(null);
        }
    }, [isOpen])

    useEffect(() => {
        if(getapi) {
            (async function() {
                const data = await api_getDish();
                setDishData(data?.dishesinfo!);
            })()
            setGetApi(false);
        }
    }, [getapi])

    return (
        <div className={styles.backmenu}>
            <div className={styles.addactivities}>
                <button onClick={()=>setIsOpen(true)}>新增菜單</button>
            </div>
            <div className={styles.displays}>
                <Columnar keys={Dishes_Key} values={dishData!} handleDelete={handleDelete} handleEdit={handleEdit}/>
            </div>
            <div className={styles.lightbox}>
                <LightBox
                    isOpen={isOpen}
                    handleDispatch={setIsOpen}
                    direction={E_direction.TOP}
                    theName={styles.regisblocker}
                >
                    <div className={styles.regisblocker}>
                        <div className={styles.displaytitle}>
                            {editor ? '編輯' : '新增'}
                        </div>
                        <InputFile 
                            onChange={(e: ChangeEvent<HTMLInputElement>|null) => {
                                let file = null;
                                if(e) file = e.target.files![0];
                                setImage(file!);
                            }}
                            accept=".jpg, .jpeg"
                            defaultImage={editor ? editor.image : undefined}
                        />
                        <InputBar
                            title="標題"
                            placeholder="請輸入標題"
                            type={E_RegexType.NAME}
                            maxlength={10}
                            ref={title}
                            value={editor?.title}
                            clear={!isOpen}
                        />
                        <InputBar
                            title="副標題"
                            placeholder="請輸入副標題"
                            type={E_RegexType.NAME}
                            maxlength={20}
                            ref={subtitle}
                            value={editor?.subtitle}
                            clear={!isOpen}
                        />
                        <InputBar
                            title="順序"
                            placeholder="請輸入順序"
                            type={E_RegexType.NUMBER}
                            maxlength={2}
                            ref={dind}
                            value={editor?.dind}
                            clear={!isOpen}
                        />
                        <button className={styles.sender} onClick={handlePost}>送出</button>
                    </div>
                </LightBox>
            </div>
        </div>
    )
}

export default memo(BackMennu);