import axios from "axios"
import { baseUrl } from "../bases/baseUrl"

export const addInfosSupplementairesUser = (data) => {
    axios.post(baseUrl + "/user/infos", data)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
};
