import axios from "axios"
import Urls from "./Urls";

export const getAxiosInstance = (token) => {
    if (token) {
        return axios.create({
            baseURL: Urls.BASE_URL,
            timeout: 60000,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                'Authorization': token,
            },
        });
    } else {
        return axios.create({
            baseURL: Urls.BASE_URL,
            timeout: 60000,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}

export const getAxiosInstanceFileUpload = (token) => {
    if (token) {
        return axios.create({
            baseURL: Urls.BASE_URL,
            timeout: 60000,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': token
            },
        });
    } else {
        return axios.create({
            baseURL: Urls.BASE_URL,
            timeout: 60000,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        });
    }
}
