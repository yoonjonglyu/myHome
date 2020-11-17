import * as types from './actionTypes';

interface TagProps {
    essay : Array<any>
    tech : Array<any>
    portfolio : Array<any>
}

export const TAGLIST = (list : TagProps) => {
    return {
        type : types.TAG_LIST,
        payload : list
    };
};

export type TagActions = ReturnType<typeof TAGLIST>;