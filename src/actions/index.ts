import * as types from './actionTypes';

export const TAPINDEX = (index : number) => {
    return {
        type : types.TAP_INDEX,
        payload : index
    };
};

export type TapActions = ReturnType<typeof TAPINDEX>;
