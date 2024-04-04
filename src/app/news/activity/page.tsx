import styles from './styles.module.scss';
import { E_Page } from '@/redux/interfaces';
import coverSrc from '@/image/temp/拾旅食 (40).jpg';
import Default from '@/components/Common/Default';
// import { api_getData } from '@/apisource/apiname';
// import ActivityComp from '@/components/Usage/activity/ActivityComp';
import ActivityDisplay from '@/components/Usage/activity/ActivityDisplay';

const pageCount = 6;

export default async function Activity() {
    return (
        <Default
            className={styles.activity}
            title='活動公告'
            currentPage={E_Page.ACTIVITY}
            imageSrc={coverSrc}
            altContent='envSrc'
            faded
        >
            {/* <ActivityComp activities={activities?.activitiesinfo!} isServerComp/> */}
            <ActivityDisplay pageCount={pageCount}/>
        </Default>
    )
}