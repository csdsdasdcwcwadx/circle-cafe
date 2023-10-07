import { I_activities } from "@/redux/interfaces";

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
