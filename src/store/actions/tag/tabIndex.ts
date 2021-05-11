import * as Types from '../actionTypes';

function TABINDEX(index: number) {
    return {
        type: Types.TAB_INDEX,
        payload: index
    };
};

type TabIndexAction = ReturnType<typeof TABINDEX>;

export { TABINDEX, TabIndexAction }