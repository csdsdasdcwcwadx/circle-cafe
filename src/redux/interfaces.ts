import { E_column } from "@/components/Usage/back/Columnar";

export interface I_RootState {
    page: E_Page;
}

export enum E_Page {
    NULL = '',
    HOME = 'HOME_PAGE',
    STORY = 'STORY',
    CONTACT = 'CONTACT',
    MENU = 'MENU',
    BOOK = 'BOOK',
    VENUE = 'VENUE',
    ACTIVITY = 'ACTIVITY',
    ACTIVITIES = 'ACTIVITIES',
    INGREDIENT = 'INGREDIENT',
    MESSAGE = 'MESSAGE',
    REPORT = 'REPORT',
    BACKEND = 'BACKEND',
}

export interface I_activities {
    id: string;
    title: string;
    content: string;
    image: string;
    date: string;
    fb: string;
}
export const Activities_Key = [
    {
        display: 'id',
        conditions: [E_column.isHide],
    },
    {
        display: 'title',
        text: '標題'
    },
    {
        display: 'content',
        text: '內文',
    },
    {
        display: 'image',
        conditions: [E_column.isImage],
        text: '圖片',
    },
    {
        display: 'fb',
        text: '臉書連結',
    },
    {
        display: 'date',
        conditions: [E_column.isDate],
        text: '上傳日期',
    },
];

export interface I_dishes {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    dind: number;
    date: string;
}
export const Dishes_Key = [
    {
        display: 'id',
        conditions: [E_column.isHide],
    },
    {
        display: 'title',
        text: '標題'
    },
    {
        display: 'subtitle',
        text: '副標題',
    },
    {
        display: 'image',
        conditions: [E_column.isImage],
        text: '圖片',
    },
    {
        display: 'dind',
        text: '順序',
    },
    {
        display: 'date',
        conditions: [E_column.isDate],
        text: '上傳日期',
    },
];