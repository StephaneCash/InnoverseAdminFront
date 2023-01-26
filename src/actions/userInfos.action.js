import axios from "axios";
import { baseUrl } from "../bases/baseUrl";

export const GET_INFOS_USER = "GET_INFOS_USER";

export const getUserInfos = (uid) => {
    return (dispatch) => {
        return axios
            .patch(baseUrl + "/user/infos", {userId: uid})
            .then(res => {
                dispatch({ type: GET_INFOS_USER, payload: res.data })
            })
            .catch(err => {
                console.log(err)
            });
    };
};