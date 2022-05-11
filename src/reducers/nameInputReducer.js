import {CHANGE_INPUT_VALUE, GET_OBJECT_FROM_API, SET_NEW_SHORTLIST_OF_USERS} from '../actions/nameInputActions'

const initialState = {
    nameValue: '',
    usersNamesFromAPI: [],
    shortListOfUsers: [],
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
                usersNamesFromAPI: action.payload.map(element => element.name).sort(),
            };
        case SET_NEW_SHORTLIST_OF_USERS:
            return {
                ...state,
                shortListOfUsers: action.payload,
            };
        default:
            return state;
    }
}