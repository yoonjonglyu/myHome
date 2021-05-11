import * as Types from '../actionTypes';

function TABINDEX(index: number) {
    return {
        type: Types.TAB_INDEX,
        payload: index
    };
};

type TapIndexAction = ReturnType<typeof TABINDEX>;

export { TABINDEX, TapIndexAction }