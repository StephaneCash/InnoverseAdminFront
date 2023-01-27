import axios from "axios"
import { baseUrl } from "../bases/baseUrl";
import { toast } from 'react-toastify';

export const addInfosSupplementairesUser = (data) => {
    axios.post(baseUrl + "/user/infos", data)
        .then(res => {
            console.log(res);
            if (res.status === 200) {
                toast.success("Données modifiées avec succès");
            } else if (res.status === 201) {
                toast.success("Données ajoutées avec succès");
            }
        })
        .catch(err => {
            console.log(err);
        });
};
