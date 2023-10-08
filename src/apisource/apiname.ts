import { I_GET_GETACTIVITIES, I_POST_SET_getter } from "./apitype";

export const handlepath = () => {
    return '/local';
}
export async function api_postData(poster: FormData) {
    try {
        const response = await fetch(`${handlepath()}/activities/set`, {
            method: "POST",
            body: poster,
        });
        const data: I_POST_SET_getter = await response.json();
        return data;
    } catch(e) {
        console.log(e);
    }
}

export async function api_getData(id?: string) {
    try {
        const response = await fetch(`${handlepath()}/activities/getActivities`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify({id}),
        });
        const data: I_GET_GETACTIVITIES = await response.json();
        return data;
    }catch(e) {
        console.log(e);
    }
}