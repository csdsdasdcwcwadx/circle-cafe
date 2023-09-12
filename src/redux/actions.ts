import { PAGING } from "./actionTypes";
import { E_Page } from "./interfaces";

export const setPage = (payload: E_Page) => ({
    type: PAGING,
    payload,
})