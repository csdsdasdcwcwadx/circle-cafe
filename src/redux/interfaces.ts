
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
}