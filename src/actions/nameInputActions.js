export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const insertInputValue = ({nameValue})=> {
    return {
        type: CHANGE_INPUT_VALUE,
            payload: nameValue,
    }
}

