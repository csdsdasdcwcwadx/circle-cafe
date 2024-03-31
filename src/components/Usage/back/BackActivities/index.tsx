'use client';

import { memo, useEffect, useRef, useState } from "react";
import styles from './styles.module.scss';
import InputBar, { E_RegexType } from "@/components/Modules/InputBar";
import LightBox, { E_direction } from "@/components/Modules/LightBox";
import { I_activities } from "@/redux/interfaces";
import { api_postData, api_deleteActivities, api_updateData } from "@/apisource/apiname";
import ActivityDisplay from "../../activity/ActivityDisplay";

const pageCount = 10;

function BackActivities() {
    const [image, setImage] = useState<File>();
    const [isOpen, setIsOpen] = useState(false);
    const [editor, setEditor] = useState<I_activities|null>(null);

    const inputRefs = {
       title: useRef<HTMLInputElement>(null),
       content: useRef<HTMLInputElement>(null),
       fb: useRef<HTMLInputElement>(null),
    }

    const handleClick = async () => {
        const error = document.getElementsByClassName('error');
        if(error.length === 0) {
            const formData = new FormData();
            formData.append('title', inputRefs.title.current?.value!);
            formData.append('content', inputRefs.content.current?.value!);
            formData.append('fb', inputRefs.content.current?.value!);
            formData.append('image', image!);
            if(editor) {
                formData.append('id', editor.id);
                formData.append('oldimage', editor.image);
            }
            
            try {
                if(editor) {
                    // update
                    const result = await api_updateData(formData);
                    setIsOpen(false);
    
                    if(result?.status) location.reload();
                    else alert(result?.message);
                } else {
                    // post
                    const result = await api_postData(formData);
                    setIsOpen(false);
    
                    if(result?.status) location.reload();
                    else alert(result?.message);
                }

                // if(result?.status) {
                //     const data = await api_getData(1);
                //     // setData(data?.activitiesinfo);

                // } else alert(result?.message);

                // const fileInput = document.querySelector<HTMLInputElement>('input[type="file"]');
                // if (fileInput) {
                //     fileInput.value = ''; // 清空 file input 的值
                //     setImage(undefined); // 將圖片設置為 undefined 或其他適當的初始值
                // }
            }catch(e) {
                console.log(e);
            }
        } else alert(error[0].textContent);
    }

    const handleDelete = async (id: string) => {
        if(confirm('確定要刪除此活動 ? ')) {
            try {
                const data = await api_deleteActivities(id);
                alert(data?.message);
                if(data?.status) location.reload();
                
            }catch(e) {
                console.log(e);
            }
        }
    }

    const renderBlock = (activity: I_activities) => {
        return (
            <div className={styles.buttons}>
                <button onClick={() => {
                    setIsOpen(true);
                    setEditor(activity);
                }}>編輯</button>
                <button onClick={() => handleDelete(activity.id)}>刪除</button>
            </div>
        )
    }

    useEffect(() => {
        if(!isOpen) setEditor(null);
    }, [isOpen])

    return (
        <div className={styles.backactivities}>
            <div className={styles.addactivities}>
                <button onClick={()=>setIsOpen(true)}>新增活動</button>
            </div>
            <div className={styles.displays}>
                <ActivityDisplay renderBlock={renderBlock} pageCount={pageCount}/>
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
                            value={editor?.title}
                        />
                        <InputBar
                            title="FB連結"
                            placeholder="請輸入FB貼文連結"
                            type={E_RegexType.NAME}
                            maxlength={500}
                            ref={inputRefs.fb}
                            value={editor?.fb}
                            unnecessary
                        />
                        <InputBar
                            title="內文"
                            placeholder="請輸入內文"
                            type={E_RegexType.TEXTING}
                            maxlength={2048}
                            ref={inputRefs.content}
                            value={editor?.content}
                        />
                        <input type="file" className={styles.file} onChange={e => {
                            const file = e.target.files![0];
                            setImage(file);
                        }}/>
                        <button className={styles.sender} onClick={handleClick}>送出</button>
                    </div>
                </LightBox>
            </div>
        </div>
    )
}

export default memo(BackActivities);