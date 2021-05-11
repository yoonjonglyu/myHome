import * as Types from './actionTypes';

function LOADTAGPOSTLIST(type: string, idx: string) {
    return {
        type: Types.LOAD_TAG_POST_LIST,
        payload: {
            type: type,
            idx: idx
        }
    };
};

type LoadTagPostActions = ReturnType<typeof LOADTAGPOSTLIST>;

export { LOADTAGPOSTLIST, LoadTagPostActions }