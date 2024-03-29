import { memo, useState, useEffect, forwardRef, ForwardedRef, RefObject, useCallback } from "react";
import styles from './styles.module.scss';
import cN from 'classnames';

export enum E_RegexType {
    PHONE = 'PHONE',
    NAME = 'NAME',
    ADDRESS = 'ADDRESS',
    EMAIL = 'EMAIL',
    NUMBER = 'NUMBER',
    TEXTING = 'TEXTING',
}

interface I_props {
    title: string;
    placeholder: string;
    type: E_RegexType;
    value?: string | number;
    unnecessary?: boolean;
    trigger?: boolean;
    maxlength: number;
    className?: string;
}

function InputBar ({title, placeholder, type, value, unnecessary, trigger, maxlength, className}: I_props, ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>) {
    const [input, setInput] = useState<string>('');
    const [errMsg, setErrMsg] = useState<string | undefined>();

    useEffect(() => {
        value && setInput(`${value}`);
    },[value])

    useEffect(() => {
        if(trigger) setErrMsg(undefined);
        else setErrMsg(`${title}必填`);
    },[trigger, title])


    const validateInput = useCallback((checker: string | number | undefined) => {
        let flag = true;
        const RegexNumTypes = /^[0-9]*$/;
        const RegexChineseTypes = /^[^\u4e00-\u9fa5]+$/;
        const RegexPhoneNum = /^09\d{8}$/;
        const RegexDecimalPoint = /^\d+$/;
        const Regexmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        switch (type) {
            case E_RegexType.PHONE:
                if (!RegexPhoneNum.test(`${checker}`)) {
                    flag = false;
                    setErrMsg('此欄位須為手機格式');
                }
                if (!RegexNumTypes.test(`${checker}`)) {
                    flag = false;
                    setErrMsg('此欄位須為數字');
                }
                if (!unnecessary && (checker === '' || !checker)) {
                    flag = false;
                    setErrMsg(`${title}必填`);
                }
                break;
            case E_RegexType.NAME:
            case E_RegexType.ADDRESS:
                if (!unnecessary && (checker === '' || !checker)) {
                    flag = false;
                    setErrMsg(`${title}必填`);
                }
                break;
            case E_RegexType.EMAIL:
                if (!Regexmail.test(`${checker}`)) {
                    flag = false;
                    setErrMsg('此欄位須為信箱格式');
                }
                if (!unnecessary && (checker === '' || !checker)) {
                    flag = false;
                    setErrMsg(`${title}必填`);
                }
                break;
            case E_RegexType.NUMBER:
                if (!RegexDecimalPoint.test(`${checker}`)) {
                    flag = false;
                    setErrMsg('此欄位只允許數字');
                }
                if (!unnecessary && (checker === '' || !checker)) {
                    flag = false;
                    setErrMsg(`${title}必填`);
                }
                break;
            default:
                if (!unnecessary && (checker === '' || !checker)) {
                    flag = false;
                    setErrMsg(`${title}必填`);
                }
                break;
        }
        if (flag) setErrMsg(undefined);
    }, [title, type, unnecessary])
    
    useEffect(() => {
        validateInput(input);
    }, [input, validateInput]);
    
    useEffect(() => {
        validateInput(value);
    }, [validateInput, value]);

    return (
        <div className={cN(styles.inputblock, className)}>
            <span>{title}{!unnecessary && '*'}</span>
            {
                type === E_RegexType.TEXTING ? <textarea placeholder={placeholder} onChange={e=>setInput(e.target.value)} ref={(ref as RefObject<HTMLTextAreaElement>)} defaultValue={value} maxLength={maxlength}/>:
                <input placeholder={placeholder} onChange={e=>setInput(e.target.value)} ref={(ref as RefObject<HTMLInputElement>)} defaultValue={value} maxLength={maxlength}/>
            }
            {errMsg && <span className={cN(styles.err, 'error')}>{errMsg}</span>}
        </div>
    );
}

export default memo(forwardRef(InputBar));