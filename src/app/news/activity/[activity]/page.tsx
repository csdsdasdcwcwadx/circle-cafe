import Default from "@/components/Common/Default";
import styles from './styles.module.scss';
import { E_Page } from "@/redux/interfaces";
import { api_getData } from "@/apisource/apiname";
import { handlepath } from "@/apisource/apiname";
import { NextRequest } from "next/server";

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
    const activity = await api_getData(id, true);
    
    return (
        activity && <Default
            className={styles.activities}
            imageSrc={`${handlepath()}${activity.activitiesinfo[0].image}`}
            currentPage={E_Page.ACTIVITIES}
            title={req.params.activity}
            altContent="environment"
            faded
        >
            <span className={styles.contents}>
                {activity.activitiesinfo[0].content}
            </span>
        </Default>
    )
}