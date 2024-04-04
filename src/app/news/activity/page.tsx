import styles from './styles.module.scss';
import { E_Page } from '@/redux/interfaces';
import envSrc from '@/image/img-03-07-1@2x.jpg';
import Default from '@/components/Common/Default';
import { api_getData } from '@/apisource/apiname';
import ActivityComp from '@/components/Usage/activity/ActivityComp';
import ActivityDisplay from '@/components/Usage/activity/ActivityDisplay';

const pageCount = 6;

export default async function Activity() {
    const activities = await api_getData(1, pageCount, true);

    return (
        <Default
            className={styles.activity}
            title='活動公告'
            currentPage={E_Page.ACTIVITY}
            imageSrc={envSrc}
            altContent='envSrc'
            faded
        >
            {/* <ActivityComp activities={activities?.activitiesinfo!} isServerComp/> */}
            <ActivityDisplay pageCount={pageCount}/>
        </Default>
    )
}