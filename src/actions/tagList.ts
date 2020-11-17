import * as types from './actionTypes';

export const TAGLIST = (list : Array<any>) => {
    return {
        type : types.TAG_LIST,
        payload : list
    };
};

export type TagActions = ReturnType<typeof TAGLIST>;