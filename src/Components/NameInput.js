import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getObjectFromApi, insertInputValue} from "../actions/nameInputActions";
import {getObjectFromAPIFunction} from "../utils/functions";

export const NameInput= ()=>{
    const dispatch = useDispatch();
    const {nameValue, usersNamesFromAPI} = useSelector( store => store.inputValue);

    useEffect(()=>{
        (async ()=>dispatch(getObjectFromApi(await getObjectFromAPIFunction())))();
        }, [])

    const handleChange = async (e)=>{
        e.preventDefault();
        dispatch(insertInputValue({nameValue: e.target.value}));
    }


    return(<form>
        <input
            type="text"
            onChange={handleChange}
            value={nameValue}
        />
        <button type="submit">Zapisz</button>
        <p>{nameValue}</p>
        {usersNamesFromAPI.map((elem)=> <p key={Math.random()*21736178246218347856}>{elem}</p>)}
    </form>)
}