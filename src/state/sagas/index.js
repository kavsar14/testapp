import { takeEvery, all } from 'redux-saga/effects';

import * as CardTypes from '../ducks/card/types';
import { getCardWeeklyLimit, setCardWeeklyLimit } from './card';

export default function* rootSaga() {
    yield all([
        // Card
        yield takeEvery(CardTypes.GET_CARD_WEEKLY_LIMIT, getCardWeeklyLimit),
        yield takeEvery(CardTypes.SET_CARD_WEEKLY_LIMIT, setCardWeeklyLimit),
    ]);
}