import * as types from './types';

export const getCardWeeklyLimit = (data, success, failure) => {
    return {
        type: types.GET_CARD_WEEKLY_LIMIT,
        payload: data, 
        success: (res) => success(res),
        failure: (res) => failure(res)
    }
}

export const setCardWeeklyLimit = (data, success, failure) => {
    return {
        type: types.SET_CARD_WEEKLY_LIMIT,
        payload: data,
        success: (res) => success(res),
        failure: (res) => failure(res)
    }
}

export const storeCardWeeklyLimit = (data) => {
    return {
        type: types.STORE_CARD_WEEKLY_LIMIT,
        payload: data
    }
}

