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

interface I_Requester extends NextRequest {
    params: {
        activity: string;
    };
    searchParams: {
        id: string;
    }
}

export default async function Activities(req: I_Requester) {
    const id = req.searchParams.id
    const activity = await api_get_a_activity(id, true);

    const listBlock: I_Block[] = JSON.parse(activity?.activitiesinfo[0].content!);
    
    return (
        <Default
            className={styles.activities}
            imageSrc={`${handlepath()}${activity?.activitiesinfo[0].image}`}
            // imageSrc={sss}
            currentPage={E_Page.ACTIVITIES}
            title={activity?.activitiesinfo[0].title!}
            altContent="environment"
            faded
        >
            <div className={styles.like}><FBLikeButton/></div>
            <div className={styles.activity}>
                <div className={styles.lister}>
                    <h3 className={styles.subtitle}>活動日期：</h3>
                    <span>{handleDate(activity?.activitiesinfo[0].date!, false, true)}</span>
                </div>
                {
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
                }
            </div>
        </Default>
    )
}