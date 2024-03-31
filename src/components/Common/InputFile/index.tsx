'use client';

import { ChangeEvent, memo, useEffect, useState } from "react";
import styles from './styles.module.scss';
import Image, { StaticImageData } from "next/image";
import cN from 'classnames';
import uploadSrc from '@/icons/upload.png';
import cloasSrc from '@/icons/icons8-close copy.svg'
import { handlepath } from "@/apisource/apiname";

interface I_props {
    onChange: Function;
    accept: string;
    defaultImage?: string;
}

function InputFile({onChange, accept, defaultImage}: I_props) {
    const [displayImage, setDisplayImage] = useState<string | ArrayBuffer | null>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event);
        const file = event.target.files![0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setDisplayImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    useEffect(() => {
        const currentTime = new Date().getTime();
        if(defaultImage) setDisplayImage(`${handlepath()}${defaultImage}?timestamp=${currentTime}`);
        else setDisplayImage('');
    }, [defaultImage])

    return (
        <div className={styles.inputfile}>
            <label htmlFor={styles.upload} className={cN(styles.uploadclass)}>
                { displayImage && <Image src={displayImage as string} alt="image" fill sizes='100%'/>}
                <div className={styles.uploadicon}>
                    <Image src={uploadSrc} alt="image" fill sizes='100%'/>
                </div>
                <div className={styles.closeicon} onClick={event => {
                    event.preventDefault();
                    onChange(null);
                    setDisplayImage('');
                }}>
                    <Image src={cloasSrc} alt="image" fill sizes='100%'/>
                </div>
            </label>
            <input 
                type="file" 
                onChange={handleChange}
                accept={accept}
                id={styles.upload}
            />
        </div>
    )
}

export default memo(InputFile);