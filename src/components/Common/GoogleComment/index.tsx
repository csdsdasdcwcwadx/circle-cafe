'use client';

import { memo, useCallback, useEffect, useState } from "react";
import styles from './styles.module.scss'
import Image from "next/image";
import Link from "next/link";
import cN from 'classnames';
import { I_reviews } from "@/apisource/apitype";
import { api_fetch_google_comment } from "@/apisource/apiname";

const reviewer = [
    {
        "author_name" : "Hero Chen",
        "author_url" : "https://www.google.com/maps/contrib/107059735362750625313/reviews",
        "language" : "zh-Hant",
        "original_language" : "zh-Hant",
        "profile_photo_url" : "https://lh3.googleusercontent.com/a/ACg8ocLIQMfYfe-vnJhzd6SNpW0SDecP0eVrgFYK-iAxTpy1zu0=s128-c0x00000000-cc-rp-mo",
        "rating" : 5,
        "relative_time_description" : "1 個月前",
        "text" : "環境很優美且舒適。老闆處處用心，食材與料理都是精心挑選製作的。以後會常來❤️",
        "time" : 1704904687,
        "translated" : false
    },
    {
        "author_name" : "Kate Chen",
        "author_url" : "https://www.google.com/maps/contrib/110670404072620252345/reviews",
        "language" : "zh-Hant",
        "original_language" : "zh-Hant",
        "profile_photo_url" : "https://lh3.googleusercontent.com/a-/ALV-UjWpDOkauGgXN24wHB-hlkTProllYpMLD5XOOKph8PhiESOp=s128-c0x00000000-cc-rp-mo-ba6",
        "rating" : 5,
        "relative_time_description" : "2 個月前",
        "text" : "在這裡享用了瑪格麗特披薩、柳橙汁。\n坐在靠窗的位置，可以看見庭院裡種的香草植物、山茶等花卉，覺得氣氛很好，服務態度也好。",
        "time" : 1703249134,
        "translated" : false
    },
    {
        "author_name" : "Hu Betta",
        "author_url" : "https://www.google.com/maps/contrib/112672409759334511631/reviews",
        "language" : "zh-Hant",
        "original_language" : "zh-Hant",
        "profile_photo_url" : "https://lh3.googleusercontent.com/a/ACg8ocINMJlsGmsb-RkqXcUu4ZSPNLbl7pO7CqeoOTJNNa4R2Q=s128-c0x00000000-cc-rp-mo-ba6",
        "rating" : 4,
        "relative_time_description" : "4 個月前",
        "text" : "環境：🌟🌟🌟🌟🌟\n餐廳內外環境都很好，停車也十分方便。\n服務：🌟🌟🌟🌟🌟\n態度十分親切，詳盡的介紹餐點，謝謝🙏\n餐點：🌟🌟🌟🌟\n有些餐點還不錯吃，有些味道則普通。\n甜點：🌟🌟🌟\n今日選了布朗尼及檸檬塔兩款甜點，口味真的很一般。\n咖啡：🌟🌟🌟\n鬆餅：🌟🌟🌟",
        "time" : 1697353316,
        "translated" : false
    },
]

enum E_clicktype {
    origin = 0,
    right = 1,
    left = 2,
}

let preventDoubleClick = false;
function GoogleComment() {
    const [reviews, setReviews] = useState<Array<I_reviews>>();
    const [rotation, setRotation] = useState(1);
    const [click, setClick] = useState<E_clicktype>(E_clicktype.origin);
    const [effect, setEffect] = useState(true);

    useEffect(() => {
        (async function() {
            const data = await api_fetch_google_comment(process.env.GOOGLE_ID!);
            const firstReviews = data[0];
            const lastReviewes = data[data.length - 1];
            setReviews([lastReviewes, ...data, firstReviews]);
        })()
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
                        setRotation(reviews.length - 2);
                        setEffect(false);
                        setTimeout(() => {
                            setEffect(true);
                            setRotation(reviews.length - 3);
                        }, 20)
                    }
                    else setRotation(pre => pre - 1);
                    break;
                case E_clicktype.right:
                    if(rotation+1 >= reviews.length) {
                        setEffect(false);
                        setRotation(1);
                        setTimeout(() => {
                            setEffect(true);
                            setRotation(2);
                        }, 20)
                    }
                    else setRotation(pre => pre + 1);
                    break;
            }
        }
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

    return (
        <div className={styles.googlecommment}>
            { reviews && <button className={styles.leftclick} onClick={() => !preventDoubleClick && setClick(E_clicktype.left)}></button> }
            <div className={styles.carding}>
                {
                    reviews && reviews.map((review, ind) => {
                        return (
                            <aside key={ind} className={cN(styles.commentcard, {[styles.disabledeffect]: !effect}, {[styles.active]: ind-rotation === 0})} style={{
                                left: `${(ind-rotation)*100 + 10}%`
                            }}>
                                <div className={styles.topper}>
                                    <div className={styles.people}>
                                        <Link href={review.author_url}>
                                            <Image src={review.profile_photo_url} alt={review.author_name} layout="fill" sizes="100%"/>
                                        </Link>
                                        <span>{review.author_name}</span>
                                    </div>
                                    <div className={styles.stars}>
                                        {
                                            handleStars(review.rating)
                                        }
                                    </div>
                                    <div className={styles.commenttime}>{review.relative_time_description}</div>
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
