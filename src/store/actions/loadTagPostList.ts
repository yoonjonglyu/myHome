import * as types from './actionTypes';

export const LOADTAGPOSTLIST = (type : string, idx : string) => {
    return {
        type : types.LOAD_TAG_POST_LIST,
        payload : {
            type : type,
            idx : idx
        }
    };
};

export type LoadTagPostActions = ReturnType<typeof LOADTAGPOSTLIST>;