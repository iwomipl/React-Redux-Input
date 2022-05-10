import {CHANGE_INPUT_VALUE} from '../actions/nameInputActions'

const initialState = {
    nameValue: '',
}

export const nameInputReducer = (state = initialState, action)=>{
    switch (action.type){
        case CHANGE_INPUT_VALUE:
            return {
                ...state,
                nameValue: action.payload,
            };
        default:
            return state;
    }
}