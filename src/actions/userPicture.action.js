import axios from "axios";
import { baseUrl } from "../bases/baseUrl";

export const GET_PICTURE = "GET_PICTURE";

export const getPicture = (uid) => {
    return (dispatch) => {
        return axios
            .get(baseUrl + "/user/" + uid)
            .then(resp => {
                dispatch({ type: GET_PICTURE, payload: resp.data })
            })
            .catch(err => {
                console.log(err);
            })
    }
}