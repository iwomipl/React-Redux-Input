import {createStore} from "redux";
import {rootReducer} from "../reducers/rootReducer";


//deprecated method, but i could not use React Toolkit
export const store = createStore(rootReducer)