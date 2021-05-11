import * as Types from '../actionTypes';

function LOADPOSTLIST(type: string) {
    return {
        type: Types.LOAD_POST_LIST,
        payload: type
    };
};

type LoadPostActions = ReturnType<typeof LOADPOSTLIST>;

export { LOADPOSTLIST, LoadPostActions }