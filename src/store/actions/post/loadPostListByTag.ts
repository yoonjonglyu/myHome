import * as Types from '../actionTypes';

function LOADPOSTLISTBYTAG(type: string, idx: string) {
    return {
        type: Types.LOAD_POST_LIST_BY_TAG,
        payload: {
            type: type,
            idx: idx
        }
    };
};

type LoadPostListByTagAction = ReturnType<typeof LOADPOSTLISTBYTAG>;

export { LOADPOSTLISTBYTAG, LoadPostListByTagAction }