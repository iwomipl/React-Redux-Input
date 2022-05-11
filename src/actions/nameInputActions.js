export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const GET_OBJECT_FROM_API = 'GET_OBJECT_FROM_API';
export const SET_NEW_SHORTLIST_OF_USERS = 'SET_NEW_SHORTLIST_OF_USERS';

export const insertInputValue = ({nameValue})=> ({
        type: CHANGE_INPUT_VALUE,
            payload: nameValue,
    })

export const getObjectFromApi = (usersNamesFromAPI)=>({
        type: GET_OBJECT_FROM_API,
        payload: usersNamesFromAPI,
    })

export const setNewShortListOfUsers = (shortListOfUsers)=>({
    type: SET_NEW_SHORTLIST_OF_USERS,
    payload: shortListOfUsers,
})


