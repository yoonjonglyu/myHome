import * as Types from '../actionTypes';

function LOADPOSTLIST(type: string) {
    return {
        type: Types.LOAD_POST_LIST,
        payload: type
    };
};

type LoadPostListAction = ReturnType<typeof LOADPOSTLIST>;

export { LOADPOSTLIST, LoadPostListAction }