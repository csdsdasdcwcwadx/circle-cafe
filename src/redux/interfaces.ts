
export interface I_RootState {
    page: E_Page;
}

export enum E_Page {
    HOME = 'HOME_PAGE',
    NULL = '',
    STORY = 'STORY',
    CONTACT = 'CONTACT',
    MENU = 'MENU',
    BOOK = 'BOOK',
    VENUE = 'VENUE',
    ACTIVITY = 'ACTIVITY',
    ACTIVITIES = 'ACTIVITIES',
}