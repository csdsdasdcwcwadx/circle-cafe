import { E_Dish } from "@/redux/interfaces";
import { I_GET_DISHES_GETTER, I_GET_GETACTIVITIES, I_Login, I_POST_SET_getter, I_reInfo } from "./apitype";

export const handlepath = () => {
    return '/local';
}

export const handleServerPath = () => {
    return 'http://localhost:3001';
}

// POST ACTIVITIES
export async function api_postData(poster: FormData, isServer: boolean = false) {
    const accessToken = window.localStorage.getItem('accessToken') || 'nodata';
    try {
        const response = await fetch(`${isServer? handleServerPath(): handlepath()}/activities/set`, {
            method: "POST",
            body: poster,
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        });
        const data: I_POST_SET_getter = await response.json();
        return data;
    } catch(e) {
        console.log(e);
    }
}

// GET ACTIVITIES
export async function api_getData(id?: string, isServer: boolean = false) {
    try {
        const response = await fetch(`${isServer? handleServerPath(): handlepath()}/activities/getActivities`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify({id}),
        });
        const data: I_GET_GETACTIVITIES = await response.json();
        const duplicate = {...data, activitiesinfo: [
            ...data.activitiesinfo, ...data.activitiesinfo
        ] }
        return duplicate;
    }catch(e) {
        console.log(e);
    }
}

// DELETE ACTIVITIES
export async function api_deleteActivities(id?: string, isServer: boolean = false) {
    const accessToken = window.localStorage.getItem('accessToken') || 'nodata';
    try {
        const response = await fetch(`${isServer? handleServerPath(): handlepath()}/activities/delactivities`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            method: "POST",
            body: JSON.stringify({id}),
        });
        const data: I_reInfo = await response.json();
        return data;
    }catch(e) {
        console.log(e);
    }
}

// POST DISHES
export async function api_dishPost(poster: FormData, isServer: boolean = false) {
    const accessToken = window.localStorage.getItem('accessToken') || 'nodata';
    try {
        const response = await fetch(`${isServer? handleServerPath(): handlepath()}/dishes/set`, {
            method: "POST",
            body: poster,
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        });
        const data: I_GET_GETACTIVITIES = await response.json();
        return data;
    }catch(e) {
        console.log(e);
    }
}

// GET DISHES
export async function api_getDish(type?: E_Dish, isServer: boolean = false) {
    try {
        const response = await fetch(`${isServer? handleServerPath(): handlepath()}/dishes/getDishes`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify({type}),
        });
        const data: I_GET_DISHES_GETTER = await response.json();
        return data;
    }catch(e) {
        console.log(e);
    }
}

// DELETE DISHES
export async function api_deleteDishes(id?: string, isServer: boolean = false) {
    const accessToken = window.localStorage.getItem('accessToken') || 'nodata';
    try {
        const response = await fetch(`${isServer? handleServerPath(): handlepath()}/dishes/delDishes`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            method: "POST",
            body: JSON.stringify({id}),
        });
        const data: I_reInfo = await response.json();
        return data;
    }catch(e) {
        console.log(e);
    }
}

// LOGIN
export async function api_login(account?: string, password?: string, isServer: boolean = false) {
    const accessToken = window.localStorage.getItem('accessToken') || 'nodata';
    try {
        const response = await fetch(`${isServer? handleServerPath(): handlepath()}/admin/login`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            method: "POST",
            body: JSON.stringify({account, password}),
        });
        const data: I_Login = await response.json();
        return data;
    }catch(e) {
        console.log(e);
    }
}

// GET GOOGLE COMMENT
export async function api_fetch_google_comment(apikey: string) {
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?key=${apikey}&placeid=ChIJMTZqYp8haDQRFxD-F4S88Rk`);
        const data: any = await response.json();
        return data && data.result && data.result.reviews;
    }catch(e) {
        console.log(e);
    }
}