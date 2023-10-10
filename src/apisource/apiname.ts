import { I_GET_DISHES_GETTER, I_GET_GETACTIVITIES, I_POST_SET_getter, I_reInfo } from "./apitype";

export const handlepath = () => {
    return '/local';
}

// POST
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
    try {
        const response = await fetch(`${handlepath()}/activities/delactivities`, {
            headers: {
                'Content-Type': 'application/json',
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
    try {
        const response = await fetch(`${handlepath()}/dishes/set`, {
            method: "POST",
            body: poster,
        });
        const data: I_GET_GETACTIVITIES = await response.json();
        return data;
    }catch(e) {
        console.log(e);
    }
}

// GET
export async function api_getDish(type?: string) {
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
    try {
        const response = await fetch(`${handlepath()}/dishes/delDishes`, {
            headers: {
                'Content-Type': 'application/json',
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