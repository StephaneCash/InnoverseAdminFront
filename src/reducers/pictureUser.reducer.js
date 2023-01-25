import {  GET_PICTURE } from "../actions/userPicture.action";

const initialState = {};

export default function pictureUser(state = initialState, action) {
    switch (action.type) {
        case GET_PICTURE:
            return action.payload
        default:
            return state;
    }
}



