import * as types from './actionTypes';

export const LOADPOSTLIST = (type : string) => {
    return {
        type : types.LOAD_POST_LIST,
        payload : type
    };
};

export type LoadPostActions = ReturnType<typeof LOADPOSTLIST>;