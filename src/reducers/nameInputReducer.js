import {
    CHANGE_INPUT_VALUE,
    GET_OBJECT_FROM_API,
    SET_ACTIVE_DIV_NUMBER,
    SET_NEW_SHORTLIST_OF_USERS
} from '../actions/nameInputActions'

const initialState = {
    nameValue: '',
    usersNamesFromAPI: [],
    shortListOfUsers: [],
    activeDivNumber: -1,
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
        case SET_ACTIVE_DIV_NUMBER:
            //if new state.activeDivNumber will be higher, than array with names, set focus on first element
            if (state.activeDivNumber + action.payload >= state.shortListOfUsers.length && state.shortListOfUsers.length !== (0 || 1)) return {
                ...state,
                activeDivNumber: 0,
            }
            //if new state.activeDivNumber will be lower, than 0 index, set focus on last element
            if (state.activeDivNumber + action.payload < 0) return {
                ...state,
                activeDivNumber: state.shortListOfUsers.length-1,
            }
            //otherwise calculate new state.activeDivNumber
            return {
                ...state,
                activeDivNumber: state.activeDivNumber + action.payload,
            }
        default:
            return state;
    }
}