import { TESTING } from "./actionTypes";
import { I_RootState } from "./interfaces";

const initState: I_RootState = {
    testing: "@@@",
}

export default function reducer(State = initState, action: {
    type: string,
    payload: any,
}) {
    switch(action.type) {
        case TESTING:
            return {...State, testing: action.payload};
        default:
            return State;
    }
}