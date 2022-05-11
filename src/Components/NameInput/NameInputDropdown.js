import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setNewShortListOfUsers} from "../../actions/nameInputActions";

export const NameInputDropdown= ()=>{
    const dispatch = useDispatch();
    const {nameValue, usersNamesFromAPI, shortListOfUsers} = useSelector( store => store.inputValue);

    useEffect(()=>{
        if (nameValue.length > 0){
            dispatch(setNewShortListOfUsers(usersNamesFromAPI.filter((elem) => elem.indexOf(nameValue) === 0)));
        } else {
            dispatch(setNewShortListOfUsers([]));
        }
    },[nameValue]);


    return(<li className="temp">
         {shortListOfUsers.map((elem)=> <ul
             key={'a'+Math.random()*21736178246218347856}
             className="temp__item"><strong>{
                 elem.substring(0, nameValue.length)
             }</strong>{
             elem.substring(nameValue.length)
         }</ul>)
         }
    </li>)
}