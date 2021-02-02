import * as types from './actionTypes';

export const LOADPOSTLIST = () => {
    return {
        type : types.LOAD_POST_LIST
    };
};

export type LoadPostActions = ReturnType<typeof LOADPOSTLIST>;