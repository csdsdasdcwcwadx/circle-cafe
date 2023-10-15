import { E_Dish } from "@/redux/interfaces";
import { I_GET_DISHES_GETTER, I_GET_GETACTIVITIES, I_Login, I_POST_SET_getter, I_reInfo } from "./apitype";

export const handlepath = () => {
    return '/local';
}

// POST
export async function api_postData(poster: FormData) {
    const accessToken = window.localStorage.getItem('accessToken') || 'nodata';
    try {
        const response = await fetch(`${handlepath()}/activities/set`, {
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

// GET
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

// DELETE
export async function api_deleteActivities(id?: string) {
    const accessToken = window.localStorage.getItem('accessToken') || 'nodata';
    try {
        const response = await fetch(`${handlepath()}/activities/delactivities`, {
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

// POST
export async function api_dishPost(poster: FormData) {
    const accessToken = window.localStorage.getItem('accessToken') || 'nodata';
    try {
        const response = await fetch(`${handlepath()}/dishes/set`, {
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

// GET
export async function api_getDish(type?: E_Dish) {
    try {
        const response = await fetch(`${handlepath()}/dishes/getDishes`, {
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

// DELETE
export async function api_deleteDishes(id?: string) {
    const accessToken = window.localStorage.getItem('accessToken') || 'nodata';
    try {
        const response = await fetch(`${handlepath()}/dishes/delDishes`, {
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
export async function api_login(account?: string, password?: string) {
    const accessToken = window.localStorage.getItem('accessToken') || 'nodata';
    try {
        const response = await fetch(`${handlepath()}/admin/login`, {
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