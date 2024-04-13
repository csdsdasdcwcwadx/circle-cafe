import { memo, useEffect, useState, useRef, ChangeEvent } from "react"
import Carousel from "../../app/Carousel";
import { I_banner } from "@/redux/interfaces";
import { api_bannerPost, api_bannerUpdate, api_getBanner, api_postData } from "@/apisource/apiname";
import styles from './styles.module.scss';
import LightBox, { E_direction } from "@/components/Modules/LightBox";
import InputBar, { E_RegexType } from "@/components/Modules/InputBar";
import InputFile from "@/components/Modules/InputFile";
import InputContents from "@/components/Modules/InputContents";

function BackBanner() {
    const [banner, setBanner] = useState<I_banner[] | null>();
    const [editor, setEditor] = useState<I_banner|null>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [getapi, setGetApi] = useState(true);
    const [image, setImage] = useState<File>();

    const title = useRef<HTMLInputElement>(null);
    const subtitle = useRef<HTMLInputElement>(null);

    const clearInput = () => {
        if(title.current) title.current.value = '';
        if(subtitle.current) subtitle.current.value = ''; 
    }

    useEffect(() => {
        async function fetchData() {
            const data = await api_getBanner();
            setBanner(data?.bannerinfo);
        }

        if(getapi) {
            fetchData();
            setGetApi(false);
        } else fetchData();
    }, [getapi])

    useEffect(() => {
        if(!isOpen) {
            clearInput();
            setEditor(null);
        }
    }, [isOpen])

    const handleClick = async () => {
        const error = document.getElementsByClassName('error');
        if(error.length === 0) {
            const formData = new FormData();
            formData.append('title', title.current?.value!);
            formData.append('subtitle', subtitle.current?.value!);
            formData.append('image', image!);
            if(editor) {
                editor.image && formData.append('oldimg', editor.image);
                formData.append('id', editor.id);
            }
            
            try {
                const fileInput = document.querySelector<HTMLInputElement>('input[type="file"]');
                const result = editor ? await api_bannerUpdate(formData) : await api_bannerPost(formData);

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

    const handleEdit = (banner: I_banner) => {
        console.log(banner)
        setEditor(banner);
        setIsOpen(true);

        if(title.current) title.current.value = banner.title;
        if(subtitle.current) subtitle.current.value = banner.subtitle + ''; 
    }

    return (
        <div className={styles.banner}>
            <div className={styles.addbanner}>
                <button onClick={()=>setIsOpen(true)}>新增輪播圖</button>
            </div>
            <div className={styles.carousel}>
                <div className={styles.hint}>點擊編輯</div>
                <Carousel data={banner!} bannerClick={handleEdit}/>
            </div>
            <div className={styles.lightbox}>
                <LightBox
                    isOpen={isOpen}
                    handleDispatch={setIsOpen}
                    direction={E_direction.TOP}
                    theName={styles.blocker}
                >
                    <div className={styles.blocker}>
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
                        <button className={styles.sender} onClick={handleClick}>送出</button>
                    </div>
                </LightBox>
            </div>
        </div>
    )
}

export default memo(BackBanner);