import * as actions from '../../actions';
import * as types from '../../actions/actionTypes';

interface TapState {
    tapIndex : number
}
const initialState : TapState = {
    tapIndex : 0
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