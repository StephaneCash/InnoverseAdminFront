import axios from "axios";
import { baseUrl } from "../bases/baseUrl";

export const GET_COMPTE_USER = "GET_COMPTE_USER";

export const getCompteUser = (uid) => {
    return (dispatch) => {
        return axios
            .post(baseUrl + "/comptes/getCompteById/", {userId: uid})
            .then(resp => {
                console.log(resp)
                dispatch({ type: GET_COMPTE_USER, payload: resp.data });
            })
            .catch(err => {
                console.log(err)
            })
    }
}