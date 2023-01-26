import {  GET_INFOS_USER } from "../actions/userInfos.action";

const initialState = {};

export default function getUserInfos(state = initialState, action) {
    switch (action.type) {
        case GET_INFOS_USER:
            return action.payload
        default:
            return state;
    }
}