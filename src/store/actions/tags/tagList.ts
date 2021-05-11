import * as Types from '../actionTypes';

interface TagProps {
    essay: Array<any>
    tech: Array<any>
    portfolio: Array<any>
}

function TAGLIST(list: TagProps) {
    return {
        type: Types.TAG_LIST,
        payload: list
    };
};

type TagActions = ReturnType<typeof TAGLIST>;

export { TAGLIST, TagActions }