import axios from "axios";
import { baseUrl } from "../bases/baseUrl";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";

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

export const uploadPicture = (data) => {
    return (dispatch) => {
        return axios
            .post(baseUrl + "/user/upload", data)
            .then(resp => {
                dispatch({ type: UPLOAD_PICTURE, payload: resp.data.data });
            })
            .catch(err => {
                console.log(err);
            })
    }
};