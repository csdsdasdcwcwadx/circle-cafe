import Default from "@/components/Common/Default";
import styles from './styles.module.scss';
import { E_Page } from "@/redux/interfaces";
import { api_get_a_activity } from "@/apisource/apiname";
import { handlepath } from "@/apisource/apiname";
import { NextRequest } from "next/server";
import cN from 'classnames';
import { handleDate, E_Block, I_Block, splitter } from "@/utils";
import { Fragment } from "react";
import FBLikeButton from "@/components/Modules/FBLikeButton";
import first from '@/image/temp/拾旅食 (10).jpg';

interface I_Requester extends NextRequest {
    params: {
        activity: string;
    };
    searchParams: {
        id: string;
    }
}

export default async function Item() {
    // const id = req.searchParams.id
    // const activity = await api_get_a_activity(id, true);

    // const listBlock: I_Block[] = JSON.parse(activity?.activitiesinfo[0].content!);
    
    return (
        <Default
            className={styles.activities}
            imageSrc={first}
            currentPage={E_Page.ACTIVITIES}
            title='活動主題'
            altContent="environment"
            faded
        >
            <div className={styles.like}><FBLikeButton/></div>
            <div className={styles.activity}>
                <div className={styles.lister}>
                    <h3 className={styles.subtitle}>活動日期：</h3>
                    <span>{handleDate('2024-04-23T14:45:09.000Z', false, true)}</span>
                </div>
                <div className={styles.lister}>
                    <h3 className={styles.subtitle}>活動概述：</h3>
                    <span>隨著秋天的來臨，我們餐廳特別推出「秋日豐收美食節」，以當季新鮮食材為主題，打造出一系列令人垂涎欲滴的秋季限定料理，邀請大家一起品味豐收的喜悅。</span>
                </div>
                <div className={styles.lister}>
                    <h3 className={styles.subtitle}>人數限制：</h3>
                    <span>由於座位有限，建議提前預訂，每場次最多可容納50位顧客。</span>
                </div>
                <div className={styles.lister}>
                    <h3 className={styles.subtitle}>折扣優惠：</h3>
                    <span>週日全日，消費滿500元，即可免費獲得秋季限定飲品一杯。</span>
                </div>
                <div className={styles.lister}>
                    <h3 className={styles.subtitle}>活動推廣：</h3>
                    <span>活動資訊將通過餐廳官網、Facebook、Instagram 及電子郵件宣傳，同時在餐廳門口設有大型海報介紹活動詳情。</span>
                </div>
                {/* {
                    listBlock.map((block, ind) => {
                        switch(block.type) {
                            case E_Block.list:
                                const title = block.value.split(splitter)[0];
                                const content = block.value.split(splitter)[1];

                                return (
                                    <div className={styles.lister} key={ind}>
                                        <h3 className={styles.subtitle}>{title}：</h3>
                                        <span>{content}</span>
                                    </div>
                                );
                            case E_Block.subtitle:
                                    return (
                                        <div className={styles.subcontent} key={ind}>
                                            <strong>{block.value}</strong>
                                        </div>
                                    );
                            default:
                                return <Fragment key={ind}></Fragment>
                        }
                    })
                } */}
            </div>
        </Default>
    )
}