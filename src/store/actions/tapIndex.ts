import * as Types from './actionTypes';

function TAPINDEX(index: number) {
    return {
        type: Types.TAP_INDEX,
        payload: index
    };
};

type TapActions = ReturnType<typeof TAPINDEX>;

export { TAPINDEX, TapActions }