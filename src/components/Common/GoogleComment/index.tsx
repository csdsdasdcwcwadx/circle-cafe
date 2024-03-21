'use client';

import { memo, useCallback, useEffect, useState, useMemo } from "react";
import styles from './styles.module.scss'
import Image from "next/image";
import Link from "next/link";
import cN from 'classnames';
import { I_reviews } from "@/apisource/apitype";
import { api_fetch_google_comment } from "@/apisource/apiname";
import { useMediaQuery } from 'react-responsive';

enum E_clicktype {
    origin = 0,
    right = 1,
    left = 2,
}

const displayCount = 3;

let preventDoubleClick = false;
function GoogleComment() {
    const [reviews, setReviews] = useState<Array<I_reviews>>();
    const [click, setClick] = useState<E_clicktype>(E_clicktype.origin);
    const [effect, setEffect] = useState(true);
    const isMobile = useMediaQuery({ query: '(max-width: 980px)' });
    const displayCount = useMemo(() => {
        return isMobile ? 1 : 3;
    }, [isMobile])
    const [rotation, setRotation] = useState(displayCount);

    // 設定初始化評論數量
    useEffect(() => {
        (async function() {
            const data: Array<I_reviews> = await api_fetch_google_comment(process.env.GOOGLE_ID!);
            const frontArr: I_reviews[] = [];
            const backArr: I_reviews[] = [];

            Array.from({length: displayCount}).forEach((_, ind) => {
                frontArr.push(data[ind]);
                backArr.unshift(data[data.length-1-ind]);
            })
            setReviews([...backArr, ...data, ...frontArr]);
        })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if(click && reviews) {
            preventDoubleClick = true;
            setTimeout(() => {
                preventDoubleClick = false;
            }, 700)
            setClick(E_clicktype.origin);
            switch(click) {
                case E_clicktype.left:
                    // rotation = 0
                    if(!rotation) {
                        setRotation(reviews.length - displayCount*2);
                        setEffect(false);
                        setTimeout(() => {
                            setEffect(true);
                            setRotation(reviews.length - 1 - displayCount*2);
                        }, 20)
                    }
                    else setRotation(pre => pre - 1);
                    break;
                case E_clicktype.right:
                    if(rotation+displayCount >= reviews.length) {
                        setEffect(false);
                        setRotation(displayCount);
                        setTimeout(() => {
                            setEffect(true);
                            setRotation(displayCount + 1);
                        }, 20)
                    }
                    else setRotation(pre => pre + 1);
                    break;
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [click, reviews, rotation])

    const handleStars = useCallback((rating: number) => {
        let fullStar = Math.floor(rating);
        let halfStar = (rating - fullStar) > 0;

        return Array.from({length: 5}).map((_, ind) => {
            if(fullStar > 0) {
                fullStar--;
                return <span key={ind} className={styles.fullstar}></span>
            } else if(halfStar) {
                halfStar = false;
                return <span key={ind} className={styles.halfstar}></span>
            } else {
                return <span key={ind} className={styles.emptystar}></span>
            }
        })
    }, [])

    const rotateCalculation = useCallback((ind: number) => {
        return (ind-rotation)*(100/displayCount) + (10/displayCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rotation])

    return (
        <div className={styles.googlecommment}>
            { reviews && <button className={styles.leftclick} onClick={() => !preventDoubleClick && setClick(E_clicktype.left)}></button> }
            <div className={styles.carding}>
                {
                    reviews && reviews.map((review, ind) => {
                        return (
                            <aside key={ind} className={cN(styles.commentcard, {[styles.disabledeffect]: !effect}, {[styles.active]: rotateCalculation(ind) < 100 && rotateCalculation(ind) > 0})} style={{
                                left: `${rotateCalculation(ind)}%`,
                                width: `${80 / displayCount}%`
                            }}>
                                <div className={styles.topper}>
                                    <Link href={review.author_url} className={styles.peopleimg}>
                                        <Image src={review.profile_photo_url} alt={review.author_name} layout="fill" sizes="100%"/>
                                    </Link>
                                    <div className={styles.peopleinfo}>
                                        <div className={styles.peoplename}>{review.author_name}</div>
                                        <div className={styles.stars}>
                                            {
                                                handleStars(review.rating)
                                            }
                                        </div>
                                        <div className={styles.commenttime}>{review.relative_time_description}</div>
                                    </div>
                                </div>
                                <div className={styles.commentcontent}>
                                    <p>{review.text}</p>
                                </div>
                            </aside>
                        )
                    })
                }
            </div>
            { reviews && <button className={styles.rightclick} onClick={() => !preventDoubleClick && setClick(E_clicktype.right)}></button> }
        </div>
    )
}

export default memo(GoogleComment);
