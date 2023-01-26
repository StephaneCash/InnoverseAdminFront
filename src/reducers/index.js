import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import compteUserReducer from "./compteUser.reducer";
import pictureUser from "./pictureUser.reducer";
import getUserInfos from "./userInfo.reducer";

export default combineReducers({
    userReducer, compteUserReducer, pictureUser, getUserInfos
})