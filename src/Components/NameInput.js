import React, {useState} from "react";

export const NameInput=()=>{
    const [nameValue, setNameValue]= useState('');

    const handleChange = (e)=>{
        setNameValue(e.target.value);
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