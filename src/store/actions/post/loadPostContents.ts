import * as Types from '../actionTypes';

function LOADPOSTCONTENTS (type : string, idx : string) {
    return {
        type : Types.LOAD_POST_CONTENTS,
        payload : {
            type : type,
            idx : idx
        }
    };
};

type LoadPostContentsAction = ReturnType<typeof LOADPOSTCONTENTS>;

export { LOADPOSTCONTENTS, LoadPostContentsAction }