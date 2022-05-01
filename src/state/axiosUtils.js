import { Globals } from "../utils/globals";

import { getAxiosInstance } from "./axiosWrapper";

export const performGetRequest = (endPoint) =>{
    let token = Globals.kUserToken;
    let instance = getAxiosInstance(token);

    return instance.get(endPoint)
    .then(response=>response.data)
    .catch(e=>{
        throw e;
    })
}

export const performPostRequest = (endPoint, data) =>{
    let token = Globals.kUserToken;
    let instance = getAxiosInstance(token);

    return instance.post(endPoint, data)
    .then(response=>response.data)
    .catch(e=>{
        throw e;
    });
}

export const performPutRequest = (endPoint, data) => {
    const token = Globals.kUserToken;
    const instance = getAxiosInstance(token);

    return instance.put(endPoint, data)
        .then(response => response.data)
        .catch(e => {
            throw e;
        });
}

export const performDeleteRequest = (endPoint, data) => {
    const token = Globals.kUserToken;
    const instance = getAxiosInstance(token);

    return instance.delete(endPoint, data)
        .then(response => response.data)
        .catch(e => {
            throw e;
        });
}
