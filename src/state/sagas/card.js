import { call, put } from 'redux-saga/effects';

import { CommonAction } from '../ducks/common';
import { performGetRequest, performPostRequest } from '../axiosUtils';
import Urls from '../Urls';
import { CardActions } from '../ducks/card';

export function* setCardWeeklyLimit(action) {
  try {
    yield put(CommonAction.startLoading());
    let endUrl = Urls.SET_CARD_WEEKLY_LIMIT;
    console.log("endUrl ",endUrl);
    let response = yield call(performPostRequest, endUrl, action.payload);
    yield put(CardActions.storeCardWeeklyLimit(response));
    yield put(CommonAction.stopLoading());
    action.success(response);
  } catch (error) {
    const message = error.response ? error.response && error.response.data && error.response.data.message : "Network Error or Server down, Please try again later."
    const toastData = { success: false, message: message };
    yield put(CommonAction.showToast(toastData));
    yield put(CommonAction.stopLoading());
    action.failure(error);
  }
}

export function* getCardWeeklyLimit(action) {
  try {
    yield put(CommonAction.startLoading());
    const endUrl = Urls.GET_CARD_WEEKLY_LIMIT;
    const params = endUrl;
    const response = yield call(performGetRequest, params);
    yield put(CardActions.storeCardWeeklyLimit(response.data));
    yield put(CommonAction.stopLoading());
    action.success(response);
  } catch (error) {
    const message = error.response ? error.response && error.response.data && error.response.data.message : "Network Error or Server down, Please try again later."
    const toastData = { success: false, message: message };
    yield put(CommonAction.showToast(toastData));
    yield put(CommonAction.stopLoading());
    action.failure(error);
  }
}

 