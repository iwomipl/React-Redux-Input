import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {insertInputValue} from "../actions/nameInputActions";

export const NameInput=()=>{
    const dispatch = useDispatch();
    const {nameValue} = useSelector( store => store.inputValue);

    const handleChange = (e)=>{
        dispatch(insertInputValue({nameValue: e.target.value}));
    }

    return(<>
        <input
            type="text"
            onChange={handleChange}
            value={nameValue}
        />
        <button>Zapisz</button>
        <p>{nameValue}</p>
    </>)
}