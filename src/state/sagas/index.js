import { takeEvery, all } from 'redux-saga/effects';

import * as CardTypes from '../ducks/card/types';

export default function* rootSaga() {
    yield all([
        // Auth
        // yield takeEvery(AuthTypes.SIGN_IN, signIn),
    ]);
}