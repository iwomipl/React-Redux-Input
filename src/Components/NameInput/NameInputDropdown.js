import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {insertInputValue, setNewShortListOfUsers} from "../../actions/nameInputActions";
import './NameInputDropdown.css'

export const NameInputDropdown= ()=>{
    const dispatch = useDispatch();
    const {nameValue, usersNamesFromAPI, shortListOfUsers, activeDivNumber} = useSelector( store => store.inputValue);

    useEffect(()=>{
        if (nameValue.length > 0){
            dispatch(setNewShortListOfUsers(usersNamesFromAPI
                //filter elements from All names from API to the value from input, and lives only the matching ones
                .filter((elem) => {
                    //return boolean value comparison, the elements start and value from input start must be the same
                return elem.toLowerCase().indexOf(nameValue.toLowerCase()) === 0;
            })));
        } else {
            dispatch(setNewShortListOfUsers([]));
        }
    },[nameValue]);

    const handleClick = (elem)=>{
        dispatch(setNewShortListOfUsers([]));
        dispatch(insertInputValue({nameValue: elem}));
    }

    return(<div className="dropdown">
         {shortListOfUsers.map((elem, index)=> {
             return (<div
                 key={index}
                 className={activeDivNumber === index ? "dropdown__item dropdown__item-active" : "dropdown__item"}
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