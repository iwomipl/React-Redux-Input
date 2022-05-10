import {CHANGE_INPUT_VALUE, GET_OBJECT_FROM_API} from '../actions/nameInputActions'

const initialState = {
    nameValue: '',
    usersNamesFromAPI: [],
}

export const nameInputReducer = (state = initialState, action)=>{
    switch (action.type){
        case CHANGE_INPUT_VALUE:
            return {
                ...state,
                nameValue: action.payload,
            };
        case GET_OBJECT_FROM_API:
            return {
                ...state,
                usersNamesFromAPI: action.payload,
            };
        default:
            return state;
    }
}