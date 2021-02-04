import * as types from './actionTypes';

export const LOADPOSTCONTENTS = (type : string, idx : number) => {
    return {
        type : types.LOAD_POST_CONTENTS,
        payload : {
            type : type,
            idx : idx
        }
    };
};

export type LoadBlogPostActions = ReturnType<typeof LOADPOSTCONTENTS>;