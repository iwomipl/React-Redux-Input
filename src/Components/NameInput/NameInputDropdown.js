import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {insertInputValue, setNewShortListOfUsers} from "../../actions/nameInputActions";
import './NameInputDropdown.css'

export const NameInputDropdown= ()=>{
    const dispatch = useDispatch();
    const {nameValue, usersNamesFromAPI, shortListOfUsers} = useSelector( store => store.inputValue);

    useEffect(()=>{
        if (nameValue.length > 0){
            dispatch(setNewShortListOfUsers(usersNamesFromAPI.filter((elem) => elem.toLowerCase().indexOf(nameValue.toLowerCase()) === 0)));
        } else {
            dispatch(setNewShortListOfUsers([]));
        }
    },[nameValue]);

    const handleClick = (elem)=>{
        dispatch(setNewShortListOfUsers([]));
        dispatch(insertInputValue({nameValue: elem}));
    }

    return(<li className="temp">
         {shortListOfUsers.map((elem)=> {
             return (<ul
                 key={'a' + Math.random() * 21736178246218347856}
                 className="tempName__item"
                 onClick={()=>handleClick(elem)}
             ><strong>{
                 elem.substring(0, nameValue.length)
             }</strong>{
                 elem.substring(nameValue.length)
             }</ul>)
         })
         }
    </li>)
}