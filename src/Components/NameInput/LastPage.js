import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {insertInputValue} from "../../actions/nameInputActions";

export const LastPage = (props)=>{
    const dispatch = useDispatch();
    const {nameValue} = useSelector( store => store.inputValue);

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(insertInputValue({nameValue:''}));
        props.toggle();

    }
    return (<>
        <h1>Your input was seceived as:</h1>
        <p>nameValue={nameValue}</p>
        <button type="submit" onClick={handleSubmit}>Get back to Input</button>
    </>)

}