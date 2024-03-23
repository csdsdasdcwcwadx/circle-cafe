import Default from "@/components/Common/Default";
import styles from './styles.module.scss';
import { E_Page } from "@/redux/interfaces";
import { api_getData } from "@/apisource/apiname";
import { handlepath } from "@/apisource/apiname";
import { NextRequest } from "next/server";
import cN from 'classnames';
import sss from '@/image/1ea5f3a2f2f21e96.png';

interface I_Requester extends NextRequest {
    params: {
        activity: string;
    };
    searchParams: {
        id: string;
    }
}

export default async function Activities(req: I_Requester) {
    // const id = req.searchParams.id
    // const activity = await api_getData(id, true);
    
    return (
        <Default
            className={styles.activities}
            // imageSrc={`${handlepath()}${activity.activitiesinfo[0].image}`}
            imageSrc={sss}
            currentPage={E_Page.ACTIVITIES}
            title={req.params.activity}
            altContent="environment"
            faded
        >
            <div className={styles.lister}>
                <h3 className={styles.subtitle}>活動日期：</h3>
                <span>活動日期內容</span>
            </div>
            <div className={styles.lister}>
                <h3 className={styles.subtitle}>活動區間：</h3>
                <span>活動區間內容</span>
            </div>
            <div className={styles.lister}>
                <h3 className={styles.subtitle}>活動對象：</h3>
                <span>活動對象內容</span>
            </div>
            <div className={styles.lister}>
                <h3 className={styles.subtitle}>活動區間：</h3>
                <span>活動區間內容</span>
            </div>
            <div className={cN(styles.lister, styles.contents)}>
                <h3 className={styles.subtitle}>活動詳情：</h3>
                {/* <span>{activity.activitiesinfo[0].content}</span> */}
                <span>
                    內文內文內文內內文內文內文內內文內文內文內內文內文內文內內文內文內文內
                    內文內文內文內內文內文內文內內文內文內文內內文內文內文內內文內文內文內
                    內文內文內文內內文內文內文內內文內文內文內內文內文內文內內文內文內文內
                    內文內文內文內內文內文內文內內文內文內文內內文內文內文內內文內文內文內
                    內文內文內文內內文內文內文內內文內文內文內內文內文內文內內文內文內文內
                    內文內文內文內內文內文內文內內文內文內文內內文內文內文內內文內文內文內
                    內文內文內文內內文內文內文內內文內文內文內內文內文內文內內文內文內文內
                    內文內文內文內內文內文內文內內文內文內文內內文內文內文內內文內文內文內
                    內文內文內文內內文內文內文內內文內文內文內內文內文內文內內文內文內文內
                    內文內文內文內內文內文內文內內文內文內文內內文內文內文內內文內文內文內
                    內文內文內文內內文內文內文內內文內文內文內內文內文內文內內文內文內文內
                    內文內文內文內內文內文內文內內文內文內文內內文內文內文內內文內文內文內
                </span>
            </div>
            <div className={styles.subcontent}>
                <strong>副標題</strong>
                <div className={styles.lister}>
                    <h3 className={styles.subtitle}>活動日期：</h3>
                    <span>活動日期內容</span>
                </div>
            </div>
        </Default>
    )
}