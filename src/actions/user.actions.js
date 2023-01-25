import axios from "axios";
import { baseUrl } from "../bases/baseUrl";

export const GET_USER = "GET_USER";

export const getUser = (uid) => {
    return (dispatch) => {
        return axios
            .get(baseUrl + "/users/" + uid)
            .then(res => {
                dispatch({ type: GET_USER, payload: res.data })
            })
            .catch(err => {
                console.log(err)
            });
    };
};