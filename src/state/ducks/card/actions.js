import * as types from './types';

export const setUpcomingActivitiesList = (data) => {
    return {
        type: types.SET_UPCOMING_ACTIVITY_LIST,
        payload: data
    }
}

export const createActivity = (data, success, failure) => {
    return {
        type: types.CREATE_ACTIVITY,
        payload: data,
        success: (res) => success(res),
        failure: (res) => failure(res)
    }
}

