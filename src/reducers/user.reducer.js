import { GET_USER, UPLOAD_PICTURE, SAVE_INFOS_SUPPL } from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return action.payload
        case UPLOAD_PICTURE:
            return action.payload
        case SAVE_INFOS_SUPPL:
            return action.payload
        default:
            return state;
    }
}



