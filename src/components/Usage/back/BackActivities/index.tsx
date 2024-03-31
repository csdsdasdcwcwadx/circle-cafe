'use client';

import { memo, useEffect, useRef, useState, ChangeEvent } from "react";
import styles from './styles.module.scss';
import InputBar, { E_RegexType } from "@/components/Modules/InputBar";
import LightBox, { E_direction } from "@/components/Modules/LightBox";
import { Activities_Key, I_activities } from "@/redux/interfaces";
import { api_postData, api_deleteActivities, api_updateData, api_getData } from "@/apisource/apiname";
import Columnar from "../Columnar";
import InputFile from "@/components/Common/InputFile";
import PageNumber from "@/components/Common/PageNumber";

const pageCount = 10;

function BackActivities() {
    const [isOpen, setIsOpen] = useState(false);
    const [serial, setSerial] = useState(1);
    const [maxPage, setMaxPage] = useState(1);

    const [image, setImage] = useState<File>();
    const [activityData, setActivityData] = useState<I_activities[]|null>(null);
    const [editor, setEditor] = useState<I_activities|null>(null);
    const [getapi, setGetApi] = useState(true);

    const title = useRef<HTMLInputElement>(null);
    const content = useRef<HTMLInputElement>(null);
    const fb = useRef<HTMLInputElement>(null);

    const clearInput = () => {
        if(title.current) title.current.value = '';
        if(content.current) content.current.value = '';
        if(fb.current) fb.current.value = ''; 
    }

    const handleClick = async () => {
        const error = document.getElementsByClassName('error');
        if(error.length === 0) {
            const formData = new FormData();
            formData.append('title', title.current?.value!);
            formData.append('content', content.current?.value!);
            formData.append('fb', fb.current?.value!);
            formData.append('image', image!);
            if(editor) {
                editor.image && formData.append('oldimg', editor.image);
                formData.append('id', editor.id);
            }
            
            try {
                const fileInput = document.querySelector<HTMLInputElement>('input[type="file"]');
                const result = editor ? await api_updateData(formData) : await api_postData(formData);

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

    const handleDelete = async (id: string) => {
        if(confirm('確定要刪除此活動 ? ')) {
            try {
                const data = await api_deleteActivities(id);
                alert(data?.message);
                if(data?.status) setGetApi(true);
                
            }catch(e) {
                console.log(e);
            }
        }
    }

    const handleEdit = (activity: I_activities) => {
        setEditor(activity);
        setIsOpen(true);

        if(title.current) title.current.value = activity.title;
        if(content.current) content.current.value = activity.content;
        if(fb.current) fb.current.value = activity.fb + ''; 
    }

    // const renderBlock = (activity: I_activities) => {
    //     return (
    //         <div className={styles.buttons}>
    //             <button onClick={() => {
    //                 setIsOpen(true);
    //                 setEditor(activity);
    //             }}>編輯</button>
    //             <button onClick={() => handleDelete(activity.id)}>刪除</button>
    //         </div>
    //     )
    // }

    useEffect(() => {
        if(!isOpen) {
            clearInput();
            setEditor(null);
        }
    }, [isOpen])


    useEffect(() => {
        async function fetchData() {
            (async function() {
                const data = await api_getData(serial, pageCount);
                setActivityData(data?.activitiesinfo!);
                setMaxPage(data?.totalpage!);
            })()
        }
        if(getapi) {
            fetchData();
            setGetApi(false);
        } else fetchData();
    }, [getapi, serial])

    return (
        <div className={styles.backactivities}>
            <div className={styles.addactivities}>
                <button onClick={()=>setIsOpen(true)}>新增活動</button>
            </div>
            <div className={styles.displays}>
                <Columnar keys={Activities_Key} values={activityData!} handleDelete={handleDelete} handleEdit={handleEdit}/>
            </div>
            <div className={styles.pages}>
                <PageNumber serial={serial} setSerial={setSerial} maxpage={maxPage}/>
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
                            title="FB連結"
                            placeholder="請輸入FB貼文連結"
                            type={E_RegexType.NAME}
                            maxlength={500}
                            ref={fb}
                            value={editor?.fb}
                            unnecessary
                            clear={!isOpen}
                        />
                        <InputBar
                            title="內文"
                            placeholder="請輸入內文"
                            type={E_RegexType.TEXTING}
                            maxlength={2048}
                            ref={content}
                            value={editor?.content}
                            clear={!isOpen}
                        />
                        <button className={styles.sender} onClick={handleClick}>送出</button>
                    </div>
                </LightBox>
            </div>
        </div>
    )
}

export default memo(BackActivities);