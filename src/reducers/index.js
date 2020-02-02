import * as types from '../constants';

export default function reducerProcess(state = 100, action) {

    if (action.type === types.POSITIVE) {
        return state = state + 10;
    }

    if (action.type === types.NEGATIVE) {
        return state = state - 10;
    }

    if (action.type === types.RESET) {
        return state = 0;
    }

    return state;
}
