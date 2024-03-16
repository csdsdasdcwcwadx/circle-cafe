import { I_activities, I_dishes } from "@/redux/interfaces";

export interface I_reInfo {
    message: string;
    status: boolean;
}

export interface I_POST_SET_getter {
    message: string;
    status: boolean;
    activitiesinfo: Array<I_activities>
}

export interface I_GET_GETACTIVITIES {
    message: string;
    status: boolean;
    activitiesinfo: Array<I_activities>
}

export interface I_POST_MENU_SET {
    message: string;
    status: boolean;
    dishesinfo: Array<I_dishes>
}

export interface I_GET_DISHES_GETTER {
    message: string;
    status: boolean;
    dishesinfo: Array<I_dishes>
}

export interface I_Login {
    message: string;
    status: boolean;
    accessToken?: string;
}

export interface I_reviews {
    author_name : string;
    author_url : string;
    language : string;
    original_language : string;
    profile_photo_url : string;
    rating : number;
    relative_time_description : string;
    text : string;
    time : number;
    translated : boolean;
}