import * as actions from '../../actions';
import * as types from '../../actions/actionTypes';

interface TapState {
    tapIndex : number | null
}
const initialState : TapState = {
    tapIndex : null
} 

const Taps = (state : TapState = initialState, action : actions.TapActions) => {
    if(action.type === types.TAP_INDEX){
        return {
            ...state,
            tapIndex : action.payload
        };
    } else {
        return state;
    }
};

export default Taps;