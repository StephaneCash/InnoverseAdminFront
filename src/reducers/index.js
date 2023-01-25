import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import compteUserReducer from "./compteUser.reducer"

export default combineReducers({
    userReducer, compteUserReducer
})