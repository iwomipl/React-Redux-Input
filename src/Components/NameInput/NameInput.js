import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getObjectFromApi, insertInputValue} from "../../actions/nameInputActions";
import {getObjectFromAPIFunction} from "../../utils/functions";
import {NameInputDropdown} from "./NameInputDropdown";

export const NameInput= ()=>{
    const dispatch = useDispatch();
    const {nameValue} = useSelector( store => store.inputValue);

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
        <button type="submit">Submit</button>
        {nameValue.length > 0 ? <NameInputDropdown/> : null}
    </form>)
}