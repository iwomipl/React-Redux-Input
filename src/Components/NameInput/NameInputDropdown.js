import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {insertInputValue, setNewShortListOfUsers} from "../../actions/nameInputActions";
import './NameInputDropdown.css'

export const NameInputDropdown= ()=>{
    const dispatch = useDispatch();
    const {nameValue, usersNamesFromAPI, shortListOfUsers, activeDivNumber} = useSelector( store => store.inputValue);

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

    return(<div className="temp">
         {shortListOfUsers.map((elem, index)=> {
             return (<div
                 key={index}
                 className={activeDivNumber === index ? "tempName__item tempName__item-active" : "tempName__item"}
                 onClick={()=>handleClick(elem)}
             ><strong>{
                 elem.substring(0, nameValue.length)
             }</strong>{
                 elem.substring(nameValue.length)
             }</div>)
         })
         }
    </div>)
}