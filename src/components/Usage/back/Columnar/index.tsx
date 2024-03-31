import { memo, useCallback, cloneElement } from "react";
import styles from './styles.module.scss';
import cN from 'classnames';
import { handleDate } from "@/utils";

interface I_Key {
    display: string;
    conditions?: E_column[];
    text?: string;
}

interface I_props {
    keys?: I_Key[];
    values?: any[];
    handleEdit: Function;
    handleDelete: Function;
    handleShow?: Function;
}

export enum E_column {
    noCons = '',
    isImage = 'image',
    isDate = 'date',
    isHide = 'hide',
}

function Columnar({keys, values, handleDelete, handleEdit, handleShow}: I_props) {

    const handleConditions = useCallback((index: number, key: I_Key, value?: any, isHeader = false,) => {
        let returnDOM = isHeader ? <aside key={index}><em>{key.text}</em></aside> : <aside key={index}>{value[key.display]}</aside>;

        if(key.conditions) {
            if(key.conditions.indexOf(E_column.isHide) > -1) {
                returnDOM = cloneElement(returnDOM, {
                    style: {...returnDOM.props.style, display: 'none'}
                })
            }
            if(key.conditions.indexOf(E_column.isImage) > -1 && !isHeader) {
                returnDOM = cloneElement(returnDOM, {
                    className: styles.isImage
                })
            }
            if(key.conditions.indexOf(E_column.isDate) > -1 && !isHeader) {
                returnDOM = cloneElement(returnDOM, {
                    children: handleDate(value[key.display], false, true),
                })
            }
        }
        return returnDOM;
    }, [])

    return (
        <div className={styles.columnar}>
            <div className={cN(styles.titlebar, styles.bar)}>
                {
                    keys?.map((key, ind) => {
                        return handleConditions(ind, key, null, true);
                    })
                }
                <aside>設定</aside>
            </div>
            {
                values?.map((value, ind) => {
                    return (
                        <div key={ind} className={cN(styles.contentbar, styles.bar)}>
                            {
                                keys?.map((key, ind) => {
                                    return handleConditions(ind, key, value);
                                })
                            }
                            <aside className={styles.buttons}>
                                <button onClick={() => handleEdit(value)}>編輯</button>
                                <button onClick={() => handleDelete(value)}>刪除</button>
                            </aside>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default memo(Columnar);