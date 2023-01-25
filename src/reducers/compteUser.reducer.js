import { GET_COMPTE_USER } from "../actions/compte.actions";

const initialState = {};

export default function compteUserReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COMPTE_USER:
            return action.payload
        default:
            return state;
    }
}



