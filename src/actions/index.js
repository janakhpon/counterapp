import * as types from '../constants';

export const positive = () => {
    return {
        type: types.POSITIVE
    }
}

export const negative = () => {
    return {
        type: types.NEGATIVE
    }
}

export const reset = () => {
    return {
        type: types.RESET
    }
}