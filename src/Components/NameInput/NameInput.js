import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getObjectFromApi, insertInputValue} from "../../actions/nameInputActions";
import {getObjectFromAPIFunction} from "../../utils/functions";
import {NameInputDropdown} from "./NameInputDropdown";

export const NameInput= ()=>{
    const dispatch = useDispatch();
    const {nameValue, shortListOfUsers} = useSelector( store => store.inputValue);

    useEffect(()=>{
        (async ()=>dispatch(getObjectFromApi(await getObjectFromAPIFunction())))();
        }, [])

    useEffect(()=>{

    }, [shortListOfUsers])

    const handleChange = (e)=>{
        e.preventDefault();
        dispatch(insertInputValue({nameValue: e.target.value}));
    }

    const handleSubmit = ()=>{

    }
    return(<form onSubmit={handleSubmit}>
        <input
            type="text"
            onChange={handleChange}
            value={nameValue}
        />
        <button type="submit">Submit</button>
        {nameValue.length > 0 ?
            (shortListOfUsers.toString() !== nameValue ? <NameInputDropdown/> : null) :
            null}
    </form>)
}