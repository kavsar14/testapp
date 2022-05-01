import { call, put } from 'redux-saga/effects';

import { CommonAction } from '../ducks/common';
import { performGetRequest, performGetRequestGoogle, performPostRequest, performPostRequestWithFile, performPostRequestWithFileCloudinary, performPutRequest, performPutRequestWithFile } from '../axiosUtils';
import Urls from '../Urls';
import { AuthAction } from '../ducks/auth';

function getParams(params) {
  return Object.entries(Object.assign({}, params)).
    map(([key, value]) => `${key}=${value}`).
    join('&');
}

export function* signUp(action) {
  try {
    yield put(CommonAction.startLoading());
    let endUrl = Urls.SIGN_UP;
    let response = yield call(performPostRequest, endUrl, action.payload);
    if (response.status) {
      yield put(AuthAction.setUserData(response.payload.user));
      yield put(AuthAction.setTokenData(response.payload.tokens));
    }
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

export function* getUserById(action) {
  try {
    const endUrl = Urls.GET_USER_BY_ID;
    const params = endUrl + '/?' + getParams(action.payload);
    const response = yield call(performGetRequest, params);
    if (response.status) {
      yield put(AuthAction.setUserData(response.payload));
    }
    action.success(response);
  } catch (e) {
    action.failure(e.response);
  }
}

 