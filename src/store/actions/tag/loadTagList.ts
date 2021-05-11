import * as Types from '../actionTypes';

function LOADTAGLIST(type: string, idx: string) {
    return {
        type: Types.LOAD_TAG_LIST,
        payload: {
            type: type,
            idx: idx
        }
    };
};

type LoadTagListAction = ReturnType<typeof LOADTAGLIST>;

export { LOADTAGLIST, LoadTagListAction }