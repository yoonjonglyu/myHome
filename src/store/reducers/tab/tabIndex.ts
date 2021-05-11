import { Reducer } from 'redux';

import * as Actions from '../../actions';
import * as Types from '../../actions/actionTypes';

interface TabIndexProps {
    tabIndex: number | false
}
const initialState: TabIndexProps = {
    tabIndex: false
}

const TabIndex: Reducer<TabIndexProps, Actions.TabIndexAction> = (state = initialState, action) => {
    if (action.type === Types.TAB_INDEX) {
        return {
            ...state,
            tabIndex: action.payload
        };
    } else {
        return state;
    }
};

export default TabIndex;