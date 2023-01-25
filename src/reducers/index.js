import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import compteUserReducer from "./compteUser.reducer";
import pictureUser from "./pictureUser.reducer";

export default combineReducers({
    userReducer, compteUserReducer, pictureUser
})