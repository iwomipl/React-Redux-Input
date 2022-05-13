import React, {useState} from 'react';
import {NameInput} from "./Components/NameInput/NameInput";
import {store} from "./store";
import {Provider} from "react-redux";
import {LastPage} from "./Components/NameInput/LastPage";

import './App.css'

const App = () => {
    const [showNameInput, setShowNameInput] = useState(true);

    const toggleNameInputShower = ()=>{
        setShowNameInput(!showNameInput);
    }
    return (
        <div className="App">
            <Provider store={store}>
                { showNameInput ?<>
                    <h1>Autocomplete</h1>
                    <p>Start typing:</p>
                    <NameInput toggle={()=>toggleNameInputShower()} show={showNameInput}/>
                    </> :
                    <LastPage toggle={()=>toggleNameInputShower()}/>
                }
            </Provider>
        </div>
    );
}

export default App;
