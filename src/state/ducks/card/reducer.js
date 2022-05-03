import _ from 'lodash';

import * as types from './types';

const initialState = {
    isOnWeeklyLimit: false,
    limit: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.STORE_CARD_WEEKLY_LIMIT:
            return {
                ...state,
                isOnWeeklyLimit: _.get(action, 'payload.isOnWeeklyLimit', false),
                limit: _.get(action, 'payload.limit', null),
            }

        default:
            return state;
    }
}

export default reducer;