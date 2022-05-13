import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getObjectFromApi, insertInputValue, setActiveDivNumber} from "../../actions/nameInputActions";
import {getObjectFromAPIFunction} from "../../utils/functions";
import {NameInputDropdown} from "./NameInputDropdown";

import './NameInput.css'

export const NameInput = (props) => {
    const dispatch = useDispatch();
    const {nameValue, shortListOfUsers, activeDivNumber} = useSelector(store => store.inputValue);

    useEffect(() => {
        const urlAddress = 'https://jsonplaceholder.typicode.com/users';
        (async () => dispatch(getObjectFromApi(await getObjectFromAPIFunction(urlAddress))))();
    }, []);

    const handleChange = (e) => {
        e.preventDefault();
        dispatch(insertInputValue({nameValue: e.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.toggle();
    }

    const keyDown = (e) => {
        if (e.key === 'ArrowDown') {
            dispatch(setActiveDivNumber(1));
        } else if (e.key === 'ArrowUp') {
            dispatch(setActiveDivNumber(-1));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (!shortListOfUsers.includes(nameValue) && shortListOfUsers.length !== 1) {
                //storing nameValue after hitting enter key, it's value of chosen div if it was chosen or the inputs value
                dispatch(insertInputValue({nameValue: (shortListOfUsers[activeDivNumber] || nameValue)}));
            }
        }

    }

    return (<form onSubmit={handleSubmit}>
        <input
            className="input"
            type="text"
            onChange={handleChange}
            value={nameValue}
            onKeyDown={keyDown}
        />
        <button type="submit">Submit</button>
        {nameValue.length > 0 ?
            (shortListOfUsers.toString() !== nameValue ? <NameInputDropdown/> : null) :
            null}
    </form>)
}