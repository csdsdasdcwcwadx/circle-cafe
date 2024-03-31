
import { Fragment, memo, useState, useCallback, useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import InputBar, { E_RegexType } from '../InputBar';
import cN from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { E_Block, I_Block, splitter } from '@/utils'
interface I_props {
    defaultValue?: string;
    dispatch: Function;
    clear?: boolean;
}

function InputContents({defaultValue, dispatch, clear}: I_props) {
    const [list, setList] = useState(false);
    const [subtitle, setSubtitle] = useState(false);

    const [listBlock, setListBlock] = useState<I_Block[]>([]);

    const titleRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLInputElement>(null);
    const subtitleRef = useRef<HTMLInputElement>(null);

    const clearRef = () => {
        if(titleRef.current) titleRef.current.value = '';
        if(contentRef.current) contentRef.current.value = '';
        if(subtitleRef.current) subtitleRef.current.value = ''; 
    }

    const addlister = () => {
        if(!list && !subtitle) {
            setList(true);
        }
    }

    const addsubtitle = () => {
        if(!list && !subtitle) {
            setSubtitle(true);
        }
    }

    const handleDelete = (index: number) => {
        setListBlock(prevListBlock => {
            return prevListBlock.filter((_, idx) => idx !== index);
        })
    }

    const buttons = useCallback(() => {
        const handleConfirm = () => {
            const error = document.getElementsByClassName('error');
            if(error.length === 0) {
                setListBlock(pre => {
                    let block;
                    const newId = uuidv4().substring(0, 3);
    
                    if(list) {
                        block = {
                            type: E_Block.list,
                            value: `${titleRef.current?.value}${splitter}${contentRef.current?.value}`,
                            id: newId,
                        }
                    }
    
                    if(subtitle) {
                        block = {
                            type: E_Block.subtitle,
                            value: `${subtitleRef.current?.value}`,
                            id: newId,
                        }
                    }
    
                    return [...pre, block!];
                })
                clearRef();
                setSubtitle(false);
                setList(false);
            } else alert(error[0].textContent);
        }

        const handleCancel = () => {
            clearRef();
            setList(false);
            setSubtitle(false);
        }

        return (
            <div className={cN(styles.buttons, styles.inner)}>
                <button onClick={handleConfirm}>確認</button>
                <button onClick={handleCancel}>取消</button>
            </div>
        )
    },[list, subtitle])

    useEffect(() => {
        if(dispatch) dispatch(JSON.stringify(listBlock));
    }, [listBlock, dispatch])

    useEffect(() => {
        if(clear) {
            setListBlock([]);
            if(dispatch) dispatch('');
        }
    }, [clear, dispatch])

    return (
        <div className={styles.inputcontents}>
            <span>內文區塊*</span>
            <div className={styles.block}>
                {
                    listBlock.map((block, ind) => {
                        switch(block.type) {
                            case E_Block.list:
                                const title = block.value.split(splitter)[0];
                                const content = block.value.split(splitter)[1];

                                return (
                                    <div key={ind} className={cN(styles.lister, styles.displays)}>
                                        <div className={styles.title}>{title}</div>
                                        <span className={styles.content}>{content}</span>
                                        <button onClick={() => handleDelete(ind)}>刪除</button>
                                    </div>
                                )
                            case E_Block.subtitle:
                                return (
                                    <div key={ind} className={cN(styles.subcontent, styles.displays)}>
                                        <strong>{block.value}</strong>
                                        <button onClick={() => handleDelete(ind)}>刪除</button>
                                    </div>
                                )
                            default:
                                return <Fragment key={ind}></Fragment>;
                        }
                    })
                }
                {
                    list && <div className={styles.listerblock}>
                        <div className={styles.lister}>
                            <InputBar
                                title='內文標題'
                                placeholder='請輸入內文標題'
                                type={E_RegexType.NAME}
                                maxlength={20}
                                ref={titleRef}
                                clear={!list}
                            />
                            <InputBar
                                title='內容'
                                placeholder='請輸入內容'
                                type={E_RegexType.TEXTING}
                                maxlength={2048}
                                ref={contentRef}
                                clear={!list}
                            />
                        </div>
                        {buttons()}
                    </div>
                }
                {
                    subtitle && <div className={styles.subtitleblock}>
                        <div className={styles.subtitle}>
                            <InputBar
                                title='副標題'
                                placeholder='請輸入副標題'
                                type={E_RegexType.NAME}
                                maxlength={20}
                                ref={subtitleRef}
                                clear={!subtitle}
                            />
                        </div>
                        {buttons()}
                    </div>
                }
                <div className={cN(styles.buttons, {[styles.outer]: list || subtitle})}>
                    <button onClick={addlister} className={cN({[styles.disabled]: list || subtitle})}>新增列表</button>
                    <button onClick={addsubtitle} className={cN({[styles.disabled]: list || subtitle})}>新增副標題</button>
                </div>
            </div>
        </div>
    )
}

export default memo(InputContents);