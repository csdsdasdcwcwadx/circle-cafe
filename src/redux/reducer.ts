import { PAGING } from "./actionTypes";
import { E_Page, I_RootState } from "./interfaces";

const initState: I_RootState = {
    page: E_Page.NULL,
}

export default function reducer(State = initState, action: {
    type: string,
    payload: any,
}) {
    switch(action.type) {
        case PAGING:
            return {...State, testing: action.payload};
        default:
            return State;
    }
}