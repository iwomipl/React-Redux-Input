import { combineReducers} from 'redux';

import {nameInputReducer} from './nameInputReducer';

export const rootReducer = combineReducers({
    inputValue: nameInputReducer,
})


